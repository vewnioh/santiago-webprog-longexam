import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Store', to: '/about' },
  { label: 'Products', to: '/products' },
];

const supportLinks = [
  { label: 'Contact Support', href: 'mailto:support@bulldogex.edu' },
  { label: 'Order Pickup Hours', to: '/about' },
  { label: 'Return Policy', to: '/about' },
];

const Footer = () => {
  return (
    <footer className="border-t-4 border-amber-400 bg-blue-950 px-6 py-14 text-zinc-300 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt=""
                className="h-12 w-12 rounded-full border-2 border-amber-400 bg-white object-contain p-1"
              />
              <div>
                <p className="font-display text-2xl tracking-wide text-white">BulldogEx Shop</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
                  National University
                </p>
              </div>
            </div>
            <p className="max-w-xs text-xs leading-6 text-blue-100/70">
              The official campus marketplace for uniforms, everyday essentials, and exclusive
              Bulldog merchandise — built for NU students, by NU students.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links" className="flex flex-col gap-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
              Quick Links
            </p>
            {quickLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="w-fit text-xs font-medium text-blue-100/80 transition-colors hover:text-amber-300"
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Account */}
          <div className="flex flex-col gap-4">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
              Account
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="/auth/signup"
                className="flex h-10 items-center justify-center rounded-xl bg-amber-400 px-6 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-950 transition-transform hover:scale-[1.03] hover:bg-amber-300 active:scale-95"
              >
                Create Account
              </Link>
              <Link
                to="/auth/signin"
                className="flex h-10 items-center justify-center rounded-xl border border-white/20 bg-transparent px-6 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-3">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
              Support
            </p>
            <ul className="space-y-2 text-xs">
              {supportLinks.map((item) =>
                item.href ? (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-medium text-blue-100/80 transition-colors hover:text-amber-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="font-medium text-blue-100/80 transition-colors hover:text-amber-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <a
              href="mailto:support@bulldogex.edu"
              className="mt-2 block text-xs font-semibold text-white underline decoration-amber-400 decoration-2 underline-offset-4 hover:text-amber-300"
            >
              support@bulldogex.edu
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-400/80">
            Est. 2018 · Education that Works
          </p>
          <p className="text-[11px] text-blue-100/60">
            © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
