import Button from '../../components/Button';
import nuaboutImg from '../../assets/img/nuabout.jpg';
import varsityImg from '../../assets/img/NU Varsity.jpg';
import keychainImg from '../../assets/img/NU Keychain.png';
import stickerImg from '../../assets/img/NU Sticker.png';
import waterImg from '../../assets/img/NU Tumbler.jpg';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-8 px-4 sm:px-6 lg:px-8">
      {/* Intro */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10 lg:grid-cols-2 lg:items-center lg:p-14">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-blue-900/40">
            <img
              src={nuaboutImg}
              alt="Inside the BulldogEx store"
              className="h-full min-h-[18rem] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              About the Store
            </p>
            <h1 className="mt-3 font-display text-4xl leading-none tracking-wide text-white sm:text-5xl">
              Built for the <span className="text-amber-400">Bulldog community</span>.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100/75 sm:text-base">
              BulldogEx Shop is the official digital marketplace of National University. We bring
              uniforms, school supplies, apparel, and exclusive NU merchandise into one clean,
              fast-loading storefront — built specifically around the way students actually shop
              between classes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/" variant="ghost">
                Back Home
              </Button>
              <Button to="/products" variant="primary">
                Open Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10">
          <div className="mb-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              Store Overview
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-white">
              The campus exchange, by the numbers
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '18', label: 'Products' },
              { value: '07', label: 'Categories' },
              { value: '03', label: 'Pickup Slots' },
              { value: '24', label: 'Weekly Orders' },
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

      {/* Store Flow */}
      <section className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              How It Works
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-wide text-white">
              Simple from catalog to pickup
            </h2>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: 'Curated Catalog',
                  desc: 'Products grouped by daily need — uniforms, drinkware, bags, study gear — so you can scan fast.',
                },
                {
                  title: 'Simple Checkout',
                  desc: 'Every product page keeps price, stock, and the action buttons exactly where you expect them.',
                },
                {
                  title: 'Campus Pickup',
                  desc: 'Three pickup slots per school day at the BulldogEx counter. Order status and slot info stay direct.',
                },
              ].map((block, i) => (
                <article
                  key={block.title}
                  className="rounded-2xl border border-white/10 bg-blue-900/30 p-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display text-2xl tracking-wide text-amber-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-bold text-white">{block.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-blue-100/70">{block.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-blue-900/30 p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-400">
              Featured Gear
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { img: varsityImg, label: 'NU Varsity' },
                { img: keychainImg, label: 'Keychain' },
                { img: stickerImg, label: 'Sticker Pack' },
                { img: waterImg, label: 'Tumbler' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] border border-white/10 bg-blue-950/60"
                >
                  <img src={item.img} alt={item.label} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button to="/products" variant="primary" className="w-full">
                View All Products
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
