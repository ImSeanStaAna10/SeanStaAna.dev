import { act, cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { Navbar } from '../components/navigation/Navbar';
import { Contact } from '../features/contact/Contact';
import { ThemeProvider } from '../hooks/useTheme';
import { App } from '../App';
import { projectsData } from '../data/projects';

const fetchMock = vi.fn<typeof fetch>();
const createStorage = (): Storage => {
  const entries = new Map<string, string>();
  return {
    get length() { return entries.size; },
    clear: () => entries.clear(),
    getItem: key => entries.get(key) ?? null,
    setItem: (key, value) => { entries.set(key, String(value)); },
    removeItem: key => { entries.delete(key); },
    key: index => Array.from(entries.keys())[index] ?? null,
  };
};

beforeEach(() => {
  vi.stubGlobal('localStorage', createStorage());
  vi.stubGlobal('sessionStorage', createStorage());
  localStorage.setItem('portfolio_theme', 'light');
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
  vi.stubGlobal('scrollTo', vi.fn());
  vi.stubGlobal('matchMedia', vi.fn((query: string) => ({
    matches: false, media: query, onchange: null,
    addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(),
    removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
  })));
  vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', 'test-access-key');
  Element.prototype.scrollIntoView = vi.fn();
  window.history.replaceState({}, '', '/');
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe('Portfolio interactions', () => {
  it('closes mobile navigation with Escape and restores focus', async () => {
    render(<ThemeProvider><MemoryRouter><Navbar /></MemoryRouter></ThemeProvider>);
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAttribute('aria-controls', 'mobile-navigation');
    fireEvent.click(toggle);
    const navigation = screen.getByRole('navigation', { name: 'Mobile navigation' });
    const contact = within(navigation).getByRole('link', { name: 'Contact' });
    contact.focus();
    fireEvent.keyDown(contact, { key: 'Escape' });
    await waitFor(() => {
      expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Open navigation' })).toHaveFocus();
    });
    fireEvent.click(toggle);
    const link = within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', { name: 'Contact' });
    expect(link).toHaveAttribute('href', '/#contact');
    link.addEventListener('click', event => event.preventDefault(), { once: true });
    fireEvent.click(link);
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('opens a case study and returns to the selected work section', async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => [] } as unknown as Response);
    render(<App />);
    fireEvent.click(screen.getByRole('link', { name: 'Explore case study' }));
    expect(await screen.findByRole('heading', { level: 1, name: projectsData[0].title })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/projects/' + projectsData[0].slug);
    expect(screen.getByRole('navigation', { name: 'Case study contents' })).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('link', { name: 'Back to selected work' })[0]);
    expect(window.location.pathname).toBe('/');
    expect(window.location.hash).toBe('#projects');
    expect(screen.getByRole('heading', { name: /Built to solve/ })).toBeInTheDocument();
    await waitFor(() => expect(document.getElementById('projects')).toHaveFocus());
  });

  it('retains a failed contact message and allows a successful retry', async () => {
    let rejectRequest!: (reason: Error) => void;
    fetchMock.mockImplementationOnce(() => new Promise<Response>((_resolve, reject) => { rejectRequest = reject; }));
    fetchMock.mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) } as Response);
    render(<Contact />);
    const values = { name: 'Test Visitor', email: 'visitor@example.com', subject: 'Portfolio inquiry', message: 'I would like to discuss a software engineering opportunity.' };
    const inputs = [
      screen.getByLabelText('Your name'),
      screen.getByLabelText('Email address'),
      screen.getByLabelText('Subject'),
      screen.getByLabelText('Your message'),
    ];
    Object.values(values).forEach((value, index) => fireEvent.change(inputs[index], { target: { value } }));
    const submit = screen.getByRole('button', { name: 'Send message' });
    const form = submit.closest('form')!;
    fireEvent.submit(form);
    expect(submit).toBeDisabled();
    inputs.forEach(input => expect(input).toBeDisabled());
    await act(async () => rejectRequest(new Error('Simulated failure')));
    expect(await screen.findByRole('alert')).toHaveTextContent('Your message could not be sent.');
    expect(submit).toBeEnabled();
    Object.values(values).forEach((value, index) => expect(inputs[index]).toHaveValue(value));
    fireEvent.submit(form);
    const confirmation = await screen.findByRole('status');
    expect(confirmation).toHaveTextContent('Message sent.');
    expect(confirmation).toHaveFocus();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(2);
    const [url, options] = fetchMock.mock.calls[1];
    expect(url).toBe('https://api.web3forms.com/submit');
    expect(JSON.parse(String(options?.body))).toMatchObject({ access_key: 'test-access-key', ...values });
  });

  it('offers direct email when the form is not configured', () => {
    vi.stubEnv('VITE_WEB3FORMS_ACCESS_KEY', '');
    render(<Contact />);
    fireEvent.submit(screen.getByRole('form', { name: 'Contact form' }));
    expect(screen.getByRole('alert')).toHaveTextContent('email link');
    expect(screen.getByRole('link', { name: /Write to me directly/ })).toHaveAttribute('href', 'mailto:seanstaana0510@gmail.com');
    expect(fetchMock).not.toHaveBeenCalled();
  });
});