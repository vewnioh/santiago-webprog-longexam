import Button from '../../components/Button';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';

import nuhome1Img from '../../assets/img/nuabout1.jpg';
import nuhome2Img from '../../assets/img/nuabout2.jpg';
import nuhome3Img from '../../assets/img/nuabout3.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-12 pb-4">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b-2 border-amber-400/60 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <img
          src={banner}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-blue-950/40"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
              The Official Campus Store
            </p>
            <h1 className="font-display text-6xl leading-[0.95] tracking-wide text-white sm:text-8xl">
              Wear the <span className="text-amber-400">Blue & Gold</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-blue-100/80 sm:text-lg">
              Get your official National University uniforms, everyday essentials, and exclusive
              Bulldog merch — ordered online, picked up on campus, ready to wear.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/products" variant="primary" className="px-7 py-3.5">
                Shop Now
              </Button>
              <Button to="/about" variant="ghost" className="px-7 py-3.5">
                About the Store
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              Campus Inventory
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
              Stocked for the semester
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Products', value: '18' },
              { label: 'Categories', value: '07' },
              { label: 'Weekly Orders', value: '24' },
              { label: 'Pickup Slots', value: '03' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-blue-900/30 p-6 transition-transform hover:-translate-y-1 hover:border-amber-400/60"
              >
                <p className="font-display text-5xl tracking-wide text-amber-400">{stat.value}</p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-blue-100/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-2 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400">
                Explore
              </p>
              <h2 className="mt-1 font-display text-4xl tracking-wide text-white">
                Shop by Category
              </h2>
            </div>
            <Button to="/products" variant="ghost">
              View All
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                img: nuhome1Img,
                title: 'Daily Essentials',
                desc: 'Lanyards, tumblers, backpacks, and everyday campus carry.',
                btn: 'Shop Essentials',
              },
              {
                img: nuhome2Img,
                title: 'Study Supplies',
                desc: 'Notebooks, pens, and focus-friendly desk gear.',
                btn: 'Shop Supplies',
              },
              {
                img: nuhome3Img,
                title: 'Campus Apparel',
                desc: 'Varsity jackets, hoodies, and official team-colored shirts.',
                btn: 'Shop Apparel',
              },
            ].map((item) => (
              <article key={item.title} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-blue-900/40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent transition-opacity group-hover:opacity-50" />
                </div>
                <h3 className="mt-6 font-display text-3xl tracking-wide text-white transition-colors group-hover:text-amber-400">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-blue-100/70">{item.desc}</p>
                <div className="mt-5">
                  <Button to="/products" variant="primary" className="w-full">
                    {item.btn}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Auth CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-500/10 p-8 backdrop-blur sm:p-12">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
                Join the Pack
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-wide text-white sm:text-4xl">
                Create an account to track orders and save favorites.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/auth/signup" variant="primary">
                Sign Up
              </Button>
              <Button to="/auth/signin" variant="ghost">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
