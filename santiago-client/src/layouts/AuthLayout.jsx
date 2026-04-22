import { Outlet, Link } from "react-router-dom";
// Assets
import logo from "../assets/img/nulogin.png";
import nuBackground from "../assets/img/National-University.jpg";

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-white text-zinc-900 grid lg:grid-cols-[1fr_1fr]">
      
      {/* Left panel — Cinematic branding */}
      <div className="relative hidden lg:flex flex-col justify-between overflow-hidden border-r border-zinc-200 p-12 bg-zinc-50">
        {/* Background Image */}
        <img
          src={nuBackground}
          alt="National University"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        
        {/* Gradient overlay for white theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        {/* New BulldogEx Logo Header */}
        <Link to="/" className="relative z-10 w-fit">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="BulldogEx" 
              className="h-10 w-10 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" 
            />
            <div className="space-y-0.5">
              <p className="text-xl font-bold tracking-tight text-zinc-900">BulldogEx Shop</p>
            </div>
          </div>
        </Link>

        {/* Bottom Quote */}
        <div className="relative z-10">
          <blockquote className="text-2xl font-bold leading-snug tracking-tight text-zinc-900 mb-4">
            "Education that works."
          </blockquote>
          <p className="text-sm text-zinc-500">— National University</p>
        </div>
      </div>

      {/* Right panel — Form content */}
      <main className="flex items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          
          {/* Mobile Logo (Visible only on small screens) */}
          <Link to="/" className="flex items-center gap-4 mb-10 lg:hidden">
            <img 
              src={logo} 
              alt="BulldogEx" 
              className="h-9 w-9 rounded-full border-2 border-zinc-900 bg-zinc-50 object-contain" 
            />
            <div className="space-y-0.5">
              <p className="text-xl font-bold text-zinc-900">BulldogEx Shop</p>
            </div>
          </Link>

          <Outlet />
        </div>
      </main>

    </section>
  );
};

export default AuthLayout;