import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { Hero } from '../features/hero/Hero';
import { MotionProvider } from '../hooks/useMotionPreference';

const stored = new Map<string, string>();
const storage = { getItem: vi.fn<(key: string) => string | null>(), setItem: vi.fn<(key: string, value: string) => void>() };
const listeners = new Set<() => void>();
const preference = {
  matches: false,
  media: '(prefers-reduced-motion: reduce)',
  addEventListener: vi.fn((_type: string, listener: () => void) => listeners.add(listener)),
  removeEventListener: vi.fn((_type: string, listener: () => void) => listeners.delete(listener)),
};

beforeEach(() => {
  stored.clear();
  storage.getItem.mockImplementation(key => stored.get(key) ?? null);
  storage.setItem.mockImplementation((key, value) => { stored.set(key, value); });
  vi.stubGlobal('localStorage', storage);
  preference.matches = false;
  listeners.clear();
  vi.stubGlobal('matchMedia', vi.fn(() => preference));
});

afterEach(() => {
  cleanup();
  document.documentElement.classList.remove('motion-paused');
  stored.clear();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

const mount = () => render(<MotionProvider><Hero /></MotionProvider>);
const setReduced = (value: boolean) => act(() => {
  preference.matches = value;
  listeners.forEach(listener => listener());
});

it('pauses and resumes animation, retaining the visitor preference after remount', () => {
  const first = mount();
  fireEvent.click(screen.getByRole('button', { name: 'Pause animations' }));
  expect(document.documentElement).toHaveClass('motion-paused');
  expect(localStorage.getItem('portfolio_motion')).toBe('paused');
  expect(screen.getByRole('button', { name: 'Play animations' })).toHaveAttribute('aria-pressed', 'true');
  first.unmount();
  expect(document.documentElement).not.toHaveClass('motion-paused');
  mount();
  fireEvent.click(screen.getByRole('button', { name: 'Play animations' }));
  expect(document.documentElement).not.toHaveClass('motion-paused');
  expect(localStorage.getItem('portfolio_motion')).toBe('playing');
});

it('honors changing device preferences and restores the manual choice', () => {
  const view = mount();
  setReduced(true);
  expect(screen.getByRole('button', { name: 'Animations reduced by device setting' })).toBeDisabled();
  expect(document.documentElement).toHaveClass('motion-paused');
  setReduced(false);
  expect(screen.getByRole('button', { name: 'Pause animations' })).toBeEnabled();
  expect(document.documentElement).not.toHaveClass('motion-paused');
  fireEvent.click(screen.getByRole('button', { name: 'Pause animations' }));
  setReduced(true);
  setReduced(false);
  expect(screen.getByRole('button', { name: 'Play animations' })).toHaveAttribute('aria-pressed', 'true');
  view.unmount();
  expect(listeners.size).toBe(0);
  expect(document.documentElement).not.toHaveClass('motion-paused');
});

it('keeps the animation control usable when browser storage is blocked', () => {
  storage.getItem.mockImplementation(() => { throw new Error('blocked'); });
  storage.setItem.mockImplementation(() => { throw new Error('blocked'); });
  mount();
  fireEvent.click(screen.getByRole('button', { name: 'Pause animations' }));
  expect(document.documentElement).toHaveClass('motion-paused');
  fireEvent.click(screen.getByRole('button', { name: 'Play animations' }));
  expect(document.documentElement).not.toHaveClass('motion-paused');
});