import { cleanup, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, expect, it, vi } from 'vitest';
import { ScrollExperience } from '../components/layout/ScrollExperience';

const originalAnimate = Object.getOwnPropertyDescriptor(Element.prototype, 'animate');

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  if (originalAnimate) Object.defineProperty(Element.prototype, 'animate', originalAnimate);
  else Reflect.deleteProperty(Element.prototype, 'animate');
});

function mountExperience(reduced = false) {
  const cancel = vi.fn();
  const animate = vi.fn(() => ({ cancel, onfinish: null, oncancel: null }));
  Object.defineProperty(Element.prototype, 'animate', { configurable: true, value: animate });
  vi.stubGlobal('matchMedia', vi.fn((media: string) => ({
    media, matches: reduced, addEventListener: vi.fn(), removeEventListener: vi.fn(),
  })));
  let callback: IntersectionObserverCallback | undefined;
  const intersection = { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
  vi.stubGlobal('IntersectionObserver', vi.fn(function (cb: IntersectionObserverCallback) {
    callback = cb;
    return intersection;
  }));
  const resize = { observe: vi.fn(), disconnect: vi.fn() };
  vi.stubGlobal('ResizeObserver', vi.fn(function () { return resize; }));
  const mutationDisconnect = vi.spyOn(MutationObserver.prototype, 'disconnect');
  vi.stubGlobal('requestAnimationFrame', vi.fn(() => 42));
  const cancelFrame = vi.fn();
  vi.stubGlobal('cancelAnimationFrame', cancelFrame);

  const view = render(
    <MemoryRouter>
      <ScrollExperience />
      <main><article className="skill-group" tabIndex={-1}>Skill</article></main>
    </MemoryRouter>,
  );
  const target = view.getByText('Skill');
  const intersect = () => callback?.(
    [{ target, isIntersecting: true, intersectionRatio: 1, boundingClientRect: target.getBoundingClientRect(), intersectionRect: target.getBoundingClientRect(), rootBounds: null, time: 0 }],
    intersection as unknown as IntersectionObserver,
  );
  return { ...view, target, intersect, animate, cancel, intersection, resize, mutationDisconnect, cancelFrame };
}

it('keeps content visible without reveal motion when reduced motion is requested', () => {
  const view = mountExperience(true);
  view.intersect();
  fireEvent.scroll(window);
  expect(view.target).toBeVisible();
  expect(view.animate).not.toHaveBeenCalled();
  expect(view.container.querySelector('.scroll-progress')).toHaveAttribute('aria-hidden', 'true');
});

it('cancels active reveals and pending scroll work on unmount', () => {
  const view = mountExperience();
  expect(view.intersection.observe).toHaveBeenCalledWith(view.target);
  view.intersect();
  expect(view.animate).toHaveBeenCalledTimes(1);
  fireEvent.scroll(window);
  view.unmount();
  expect(view.cancel).toHaveBeenCalled();
  expect(view.intersection.disconnect).toHaveBeenCalled();
  expect(view.resize.disconnect).toHaveBeenCalled();
  expect(view.mutationDisconnect).toHaveBeenCalled();
  expect(view.cancelFrame).toHaveBeenCalledWith(42);
  view.intersect();
  expect(view.animate).toHaveBeenCalledTimes(1);
});

it('stops a reveal immediately when its content receives keyboard focus', () => {
  const view = mountExperience();
  view.intersect();
  expect(view.animate).toHaveBeenCalledTimes(1);
  view.target.focus();
  expect(view.target).toHaveFocus();
  expect(view.cancel).toHaveBeenCalled();
});