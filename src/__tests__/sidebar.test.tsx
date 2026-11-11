import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { Navbar } from '../components/navigation/Navbar';
import { ThemeProvider } from '../hooks/useTheme';

function CurrentLocation() {
  const location = useLocation();
  return <output data-testid="current-location">{location.pathname + location.hash}</output>;
}

function renderNavigation() {
  return render(<ThemeProvider><MemoryRouter><Navbar /><CurrentLocation /></MemoryRouter></ThemeProvider>);
}

beforeEach(() => {
  const entries = new Map<string, string>([['portfolio_theme', 'light']]);
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => entries.get(key) ?? null,
    setItem: (key: string, value: string) => { entries.set(key, value); },
  });
  vi.stubGlobal('innerWidth', 390);
  vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: false })));
});

afterEach(() => {
  cleanup();
  document.body.style.overflow = '';
  document.documentElement.classList.remove('dark');
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

it('opens with focus inside, wraps keyboard focus, and restores focus and scrolling on Escape', () => {
  document.body.style.overflow = 'auto';
  renderNavigation();
  const trigger = screen.getByRole('button', { name: 'Open navigation' });
  expect(trigger).toHaveAttribute('aria-haspopup', 'dialog');
  fireEvent.click(trigger);
  const menu = screen.getByRole('dialog', { name: 'Navigation menu' });
  const first = within(menu).getByRole('button', { name: 'Close navigation' });
  const last = within(menu).getByRole('button', { name: 'Switch to dark theme' });
  expect(first).toHaveFocus();
  expect(trigger).toHaveAttribute('aria-expanded', 'true');
  expect(document.body.style.overflow).toBe('hidden');
  fireEvent.keyDown(first, { key: 'Tab', shiftKey: true });
  expect(last).toHaveFocus();
  fireEvent.keyDown(last, { key: 'Tab' });
  expect(first).toHaveFocus();
  fireEvent.keyDown(first, { key: 'Escape' });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(trigger).toHaveFocus();
  expect(document.body.style.overflow).toBe('auto');
});

it('ignores clicks inside panel padding, dismisses the backdrop, and closes after section navigation', () => {
  renderNavigation();
  const trigger = screen.getByRole('button', { name: 'Open navigation' });
  fireEvent.click(trigger);
  const menu = screen.getByRole('dialog') as HTMLDialogElement;
  vi.spyOn(menu, 'getBoundingClientRect').mockReturnValue({
    left: 80, right: 390, top: 0, bottom: 800, width: 310, height: 800, x: 80, y: 0, toJSON: () => ({}),
  });
  fireEvent.click(menu, { clientX: 100, clientY: 10 });
  expect(menu).toHaveAttribute('open');
  fireEvent.click(menu, { clientX: 20, clientY: 100 });
  expect(menu).not.toHaveAttribute('open');
  expect(trigger).toHaveFocus();
  fireEvent.click(trigger);
  fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Contact' }));
  expect(screen.getByTestId('current-location')).toHaveTextContent('/#contact');
  expect(menu).not.toHaveAttribute('open');
  expect(document.body.style.overflow).toBe('');
});

it('keeps the sidebar and theme controls usable on tablets and closes when desktop navigation returns', () => {
  renderNavigation();
  fireEvent.click(screen.getByRole('button', { name: 'Open navigation' }));
  const menu = screen.getByRole('dialog');
  vi.stubGlobal('innerWidth', 1024);
  fireEvent(window, new Event('resize'));
  expect(menu).toHaveAttribute('open');
  fireEvent.click(within(menu).getByRole('button', { name: 'Switch to dark theme' }));
  expect(document.documentElement).toHaveClass('dark');
  expect(menu).toHaveAttribute('open');
  vi.stubGlobal('innerWidth', 1200);
  fireEvent(window, new Event('resize'));
  expect(menu).not.toHaveAttribute('open');
  expect(document.body.style.overflow).toBe('');
  expect(within(screen.getByRole('navigation', { name: 'Main navigation' })).getByRole('link', { name: 'Work' })).toHaveFocus();
});

it('restores scrolling on button dismissal, native cancellation, and unmount', () => {
  document.body.style.overflow = 'scroll';
  const view = renderNavigation();
  const trigger = screen.getByRole('button', { name: 'Open navigation' });
  fireEvent.click(trigger);
  fireEvent.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Close navigation' }));
  expect(document.body.style.overflow).toBe('scroll');
  fireEvent.click(trigger);
  fireEvent(screen.getByRole('dialog'), new Event('cancel', { cancelable: true }));
  expect(document.body.style.overflow).toBe('scroll');
  fireEvent.click(trigger);
  view.unmount();
  expect(document.body.style.overflow).toBe('scroll');
});
