import { Link } from 'react-router-dom';
import notfoundImg from '../assets/img/National-University.jpg';
import logo from '../assets/img/nubdexchange_logo.png';

function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-blue-950 px-6 text-center text-white">
      <img
        src={notfoundImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/80 to-blue-950"
        aria-hidden="true"
      />

      {/* Decorative gold glow */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center">
        <Link to="/" className="mb-10 flex items-center gap-3">
          <img
            src={logo}
            alt=""
            className="h-10 w-10 rounded-full border-2 border-amber-400 bg-white object-contain p-0.5"
          />
          <div className="text-left leading-tight">
            <p className="font-display text-xl tracking-wide text-white">BulldogEx Shop</p>
            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-amber-400">
              National University
            </p>
          </div>
        </Link>

        <p className="select-none font-display text-[140px] leading-none tracking-tight text-white/10 sm:text-[180px]">
          404
        </p>

        <div className="-mt-12 sm:-mt-16">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-400">
            Lost in the Quad
          </p>
          <h1 className="font-display text-5xl tracking-wide text-white sm:text-6xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-blue-100/70">
            This page must be on extended OJT. Let&apos;s get you back to something useful —
            browse the catalog or head home.
          </p>

          <div className="mx-auto my-8 flex max-w-[200px] items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <div className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-950 transition-transform hover:scale-[1.03] hover:bg-amber-300 active:scale-95"
            >
              Go Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-colors hover:border-white/40 hover:bg-white/10"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 text-[10px] font-semibold uppercase tracking-[0.32em] text-blue-100/40">
        National University · Est. 1900
      </p>
    </div>
  );
}

export default NotFoundPage;
