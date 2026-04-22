import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#001E44] text-white selection:bg-amber-400 selection:text-blue-900">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Top Right Gold Glow */}
        <div className="absolute -right-[10%] -top-[10%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        {/* Bottom Left Blue Glow */}
        <div className="absolute -bottom-[10%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" 
             style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
        />
      </div>

      {/* Content Layers */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <NavBar />
        <main className="flex-grow pb-16 pt-24">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;