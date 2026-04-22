import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-colors',
    isActive
      ? 'bg-amber-400 text-blue-950'
      : 'text-blue-50/80 hover:bg-white/10 hover:text-white',
  ].join(' ');

const mobileLinkClassName = ({ isActive }) =>
  [
    'block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-colors',
    isActive
      ? 'bg-amber-400 text-blue-950'
      : 'text-blue-50/80 hover:bg-white/10 hover:text-white',
  ].join(' ');

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-amber-400/60 bg-blue-950/95 backdrop-blur supports-[backdrop-filter]:bg-blue-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" aria-label="BulldogEx Shop — go home">
          <img
            src={logo}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-amber-400 bg-white object-contain p-0.5"
          />
          <div className="leading-tight">
            <p className="font-display text-2xl tracking-wide text-white">BulldogEx</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-amber-400">
              NU Campus Shop
            </p>
          </div>
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex" aria-label="Account">
          <Link
            to="/auth/signin"
            className="rounded-full border-2 border-white/20 bg-transparent px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-colors hover:border-white/60 hover:bg-white/10"
          >
            Sign In
          </Link>
          <Link
            to="/auth/signup"
            className="rounded-full bg-amber-400 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-950 transition-transform hover:scale-[1.03] hover:bg-amber-300 active:scale-95"
          >
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 text-white transition hover:border-amber-400 hover:text-amber-400 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-white/10 bg-blue-950/98 px-4 pb-6 pt-2 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={mobileLinkClassName}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/auth/signin"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl border-2 border-white/20 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white hover:border-white/60 hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-xl bg-amber-400 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-950 hover:bg-amber-300"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
