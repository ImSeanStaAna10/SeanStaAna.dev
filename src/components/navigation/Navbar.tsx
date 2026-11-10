import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronRight,
  FileText,
  FolderGit2,
  Layers3,
  Mail,
  Moon,
  PanelRightOpen,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Logo.png";
import cvPdf from "../../assets/SeanChandrickStaAna_CVdocx.pdf";
import { useTheme } from "../../hooks/useTheme";

const links = [
  { name: "Work", id: "projects", icon: FolderGit2 },
  { name: "About", id: "about", icon: UserRound },
  { name: "Stack", id: "skills", icon: Layers3 },
  { name: "Journey", id: "experience", icon: BriefcaseBusiness },
  { name: "Contact", id: "contact", icon: Mail },
];
const DESKTOP_WIDTH = 1200;

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const desktopRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
    setActive("");
    if (pathname !== "/") return;
    const update = () => {
      let current = "";
      links.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) current = id;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
      if (event.key !== "Tab") return;
      const controls = dialog.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= DESKTOP_WIDTH) setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", closeOnDesktop);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      const destination =
        window.innerWidth >= DESKTOP_WIDTH
          ? desktopRef.current?.querySelector<HTMLAnchorElement>("a")
          : toggleRef.current;
      destination?.focus({ preventScroll: true });
    };
  }, [open]);

  const dismissBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const outside =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (outside) setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container nav-inner">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="Sean Sta Ana home"
        >
          <img
            src={logo}
            alt=""
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
          />

          <span className="whitespace-nowrap text-base font-bold tracking-tight text-slate-900 dark:text-white sm:text-lg">
            seansaints
            <span className="text-[#65B87D] dark:text-[#83D99A]">.dev</span>
          </span>
        </Link>

        <nav
          ref={desktopRef}
          className="desktop-navigation"
          aria-label="Main navigation"
        >
          {links.map(({ name, id }) => (
            <Link
              key={id}
              to={"/#" + id}
              className={"nav-link" + (active === id ? " is-active" : "")}
              aria-current={active === id ? "location" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? (
              <Sun size={22} aria-hidden="true" />
            ) : (
              <Moon size={22} aria-hidden="true" />
            )}
          </button>
          <a
            className="resume-link"
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={20} aria-hidden="true" /> Resume{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            className="icon-button menu-toggle"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-haspopup="dialog"
          >
            <PanelRightOpen size={24} aria-hidden="true" />
            <span className="menu-label">Menu</span>
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className="mobile-drawer"
        aria-label="Navigation menu"
        onClick={dismissBackdrop}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClose={() => setOpen(false)}
      >
        <div className="drawer-content">
          <div className="drawer-heading">
            <div>
              <p className="eyebrow">SEAN STA ANA</p>
              <h2>Explore</h2>
            </div>
            <button
              ref={closeRef}
              className="icon-button drawer-close"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {links.map(({ name, id, icon: Icon }) => (
              <Link
                key={id}
                to={"/#" + id}
                onClick={() => setOpen(false)}
                className={"drawer-link" + (active === id ? " is-active" : "")}
                aria-current={active === id ? "location" : undefined}
              >
                <span className="nav-icon">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <span>{name}</span>
                <ChevronRight
                  className="nav-chevron"
                  size={20}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
          <div className="drawer-footer">
            <a
              className="button button-primary"
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              <FileText size={22} aria-hidden="true" /> View resume{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <button
              className="drawer-theme"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              {theme === "dark" ? (
                <Sun size={22} aria-hidden="true" />
              ) : (
                <Moon size={22} aria-hidden="true" />
              )}
              <span>
                {theme === "dark" ? "Light appearance" : "Dark appearance"}
              </span>
              <span className="theme-indicator" aria-hidden="true" />
            </button>
          </div>
        </div>
      </dialog>
    </header>
  );
};
