import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Nav from "../components/Nav";


function AnimatedSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}

export const Route = createFileRoute("/")({
  component: SugarbloomPage,
});

const IMG = "https://media.base44.com/images/public/6a142babc9cc3adab8e62027";
const heroImg = `${IMG}/87e61b209_generated_29b2c915.png`;
const storyImg1 = `${IMG}/304971097_generated_a9594f9d.png`;
const storyImg2 = `${IMG}/0fb73f21b_generated_869a7859.png`;

const cafeItems = [
  { img: `${IMG}/cecf1735a_generated_9a0f5cba.png`, tag: "Viral", name: "Rose Lavender Latte", desc: "Floral and velvety with house-made rose lavender syrup", price: "₹260" },
  { img: `${IMG}/c9cd0f5ab_generated_de75cc36.png`, tag: "Trending", name: "Biscoff Dalgona Shake", desc: "Whipped dalgona coffee with crumbled Biscoff cookies", price: "₹320" },
  { img: `${IMG}/86e452165_generated_53d60c1f.png`, tag: "Seasonal", name: "Mango Cold Brew Tonic", desc: "Cold brew meets tonic water with fresh mango puree", price: "₹290" },
  { img: `${IMG}/10e4cd645_generated_8f54f231.png`, tag: "Bestseller", name: "Classic Espresso", desc: "Double-shot pulled from our single-origin house blend", price: "₹180" },
  { img: `${IMG}/671d3496c_generated_cb55442b.png`, tag: "", name: "Honey Cinnamon Cortado", desc: "Espresso balanced with steamed milk, honey, and cinnamon", price: "₹220" },
  { img: `${IMG}/fdce5c4da_generated_53c1eb49.png`, tag: "New", name: "Strawberry Matcha Latte", desc: "Ceremonial grade matcha layered with strawberry cream", price: "₹300" },
];

const bakeryItems = [
  { img: `${IMG}/85fc95d53_generated_deebf343.png`, tag: "Drop of the Week", name: "Dubai Pistachio Croissant", desc: "Flaky layers filled with pistachio kunafa cream", price: "₹280" },
  { img: `${IMG}/7747b60ee_generated_4f4aec59.png`, tag: "Viral", name: "Strawberry Cloud Cake", desc: "Light-as-air sponge with fresh strawberry cream layers", price: "₹380" },
  { img: `${IMG}/6d5eccece_generated_7ce81ecc.png`, tag: "Classic", name: "Burnt Basque Cheesecake", desc: "Caramelized custard-like cheesecake, impossibly creamy", price: "₹340" },
  { img: `${IMG}/77ba2ec33_generated_4dcfa84f.png`, tag: "Bestseller", name: "Matcha Twice-Baked Croissant", desc: "Crispy, twice-baked with ceremonial matcha cream", price: "₹210" },
  { img: `${IMG}/820c0ff2c_generated_efb32260.png`, tag: "Fresh Daily", name: "Butter Croissant", desc: "Classic French butter croissant, 72-hour lamination", price: "₹160" },
  { img: `${IMG}/294e6d5b3_generated_50bb61de.png`, tag: "For Two", name: "Sugarbloom Dessert Board", desc: "A curated board of pastries, macarons, and seasonal treats", price: "₹680" },
];

const iceItems = [
  { img: `${IMG}/c69fde4cf_generated_ec2e16e9.png`, tag: "Viral", name: "Black Sesame Soft Serve", desc: "Jaw-dropping charcoal cone with toasted sesame swirl", price: "₹220" },
  { img: `${IMG}/7acee30a7_generated_5d24b510.png`, tag: "Bestseller", name: "Mango Saffron Kulfi Pop", desc: "Rose petals on top, Alphonso mango with saffron", price: "₹180" },
  { img: `${IMG}/9a85c0bf9_generated_9b9e66da.png`, tag: "", name: "Cherry Blossom Gelato", desc: "Sakura-infused gelato with delicate floral notes", price: "₹200" },
  { img: `${IMG}/64987b4de_generated_a25c2c36.png`, tag: "For Two", name: "Sundae Dessert Board", desc: "3 scoops, brownies, macarons, and all the toppings", price: "₹580" },
  { img: `${IMG}/beb45842a_generated_9362c8ab.png`, tag: "", name: "Pistachio Scoops", desc: "Rich pistachio gelato with crushed pistachios on top", price: "₹240" },
  { img: `${IMG}/63c18d7db_generated_a1a75ce3.png`, tag: "New", name: "Coconut Pandan Soft Serve", desc: "Tropical coconut with Southeast Asian pandan leaf", price: "₹230" },
];

const specials = [
  { img: `${IMG}/75c23a2b8_generated_f4e30933.png`, cat: "Coffee", name: "Caramel Brûlée Cold Brew", desc: "Torched caramel, cold brew, oat milk.", price: "₹310" },
  { img: `${IMG}/c5f147386_generated_4c05c3e5.png`, cat: "Bakery", name: "Saffron Pistachio Éclair", desc: "Persian-inspired choux pastry.", price: "₹290" },
  { img: `${IMG}/e576f8144_generated_ec98c597.png`, cat: "Ice Cream", name: "Miso Caramel Sundae", desc: "Sweet, salty, utterly addictive.", price: "₹340" },
  { img: `${IMG}/e1e51867d_generated_02359298.png`, cat: "Dessert", name: "Triple Chocolate Brownie", desc: "Warm, gooey, with ice cream.", price: "₹260" },
  { img: `${IMG}/6ae3b36ff_generated_10154f77.png`, cat: "Drink", name: "Ube Taro Latte", desc: "Purple yam meets espresso.", price: "₹280" },
];

const gallery = [
  { img: `${IMG}/cf782597f_generated_c9b86f9e.png`, likes: "2.4K" },
  { img: `${IMG}/e7b1d18be_generated_df144614.png`, likes: "1.8K" },
  { img: `${IMG}/764cf076d_generated_fbeb86bf.png`, likes: "3.1K" },
  { img: `${IMG}/2be1cd16d_generated_36807dfb.png`, likes: "1.2K" },
  { img: `${IMG}/3a827d9fd_generated_c523c6b7.png`, likes: "2.9K" },
  { img: `${IMG}/0b3a1b225_generated_1b785119.png`, likes: "1.5K" },
  { img: `${IMG}/98b59b325_generated_c817acd9.png`, likes: "2.1K" },
];

const whyFeatures = [
  { num: '01', title: 'Insta-Perfect\nEvery Corner', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/d4439b395_generated_image.png', },
  { num: '02', title: 'Weekly Limited\nDrops', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/a597d3fdb_generated_image.png', },
  { num: '03', title: 'Made Fresh\nEvery Day', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/a2f1a3640_generated_image.png', },
  { num: '04', title: 'Stay as Long\nas You Like', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/aff8eda58_generated_image.png', },
  { num: '05', title: 'Custom Orders\n& Gifting', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/b070845e1_generated_image.png', },
  { num: '06', title: 'Live Music on\nWeekends', image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/73355e3c2_generated_image.png', },
];

const testimonials = [
  { quote: "The Rose Lavender Latte literally changed my life. I drive 30 minutes just for this café. The vibe, the food, everything is *chef's kiss*.", name: "Priya Nair", role: "Food Blogger" },
  { quote: "Best cheesecake in Vijayawada, hands down. The Dubai Pistachio Croissant is insane. My go-to weekend spot with my family.", name: "Rohit Sharma", role: "Regular Customer" },
  { quote: "We hosted our engagement party here and they went above and beyond. The dessert board was stunning. Cannot recommend enough!", name: "Ananya Reddy", role: "Event Organiser" },
];

function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-ready");
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}



function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-espresso min-h-[85vh] flex flex-col justify-center pt-28 pb-12 md:pt-32 md:pb-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 30%, rgba(201,133,58,0.18), transparent 60%), radial-gradient(50% 50% at 80% 70%, rgba(201,133,58,0.1), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="reveal self-center">
          <span className="inline-block rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold">
            Café · Bakery · Ice Cream
          </span>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] text-cream sm:text-6xl md:text-7xl">
            Where Every<br />
            Bite <em className="italic text-gold">Blooms.</em>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-cream/70">
            Vijayawada's most Instagram-worthy café — handcrafted coffees, cloud-soft pastries, and
            artisan ice creams made with love.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-espresso transition hover:bg-gold-2"
            >
              Explore Menu
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream transition hover:border-gold hover:text-gold"
            >
              Reserve a Table
            </a>
          </div>
        </div>
        <div className="relative reveal md:ml-auto md:w-[90%] md:pr-6 lg:pr-10">
          <div 
            className="relative w-full overflow-hidden rounded-[20px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            style={{ maxHeight: "min(520px, 75vh)", aspectRatio: "4/5" }}
          >
            <img
              src={heroImg}
              alt="Sugarbloom specialty coffee and pastries"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full bg-cream px-5 py-3 text-espresso shadow-2xl">
            <div className="flex text-gold">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="text-sm font-medium">4.9 on Google</span>
          </div>
        </div>
      </div>
      <div className="relative mx-auto mt-12 grid w-full max-w-7xl grid-cols-3 gap-6 border-t border-white/10 px-6 pt-8 text-center">
        {[
          { n: "12K+", l: "Instagram Followers" },
          { n: "4.9★", l: "Google Rating" },
          { n: "50+", l: "Menu Items" },
        ].map((s) => (
          <div key={s.l} className="reveal">
            <div className="font-display text-4xl text-gold md:text-5xl">{s.n}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-cream/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    "Specialty Coffee",
    "Cloud Cakes",
    "Artisan Ice Cream",
    "Fresh Croissants",
    "Viral Drinks",
    "Dessert Boards",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-espresso-2 py-7">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl italic text-cream/80 md:text-3xl">
            {t}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Story() {
  return (
    <section id="about" className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="relative reveal">
          <div className="overflow-hidden rounded-[24px]">
            <img src={storyImg1} alt="Sugarbloom café interior" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-56 overflow-hidden rounded-[20px] border-8 border-cream shadow-2xl sm:block">
            <img src={storyImg2} alt="Latte art" loading="lazy" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -left-4 top-6 flex items-center gap-2 rounded-full bg-espresso px-4 py-2 text-xs uppercase tracking-[0.22em] text-gold">
            ★ 4.9 Google Rating
          </div>
        </div>
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Our Story</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            A Love Letter to <em className="italic text-gold">Good Things</em>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70">
            Born in the heart of Vijayawada, Sugarbloom is where specialty coffee meets cloud-soft
            pastries and handcrafted ice cream. Every item on our menu is made with obsessive care
            — from sourcing the finest beans to perfecting each recipe.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[
              { t: "Café", d: "Specialty brews crafted to perfection" },
              { t: "Bakery", d: "Cloud-soft pastries baked daily" },
              { t: "Ice Cream", d: "Handcrafted artisan flavors" },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-ink/10 bg-cream-2/60 p-5">
                <h4 className="font-display text-xl">{c.t}</h4>
                <p className="mt-2 text-sm text-ink/65">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type MenuItem = { img: string; tag?: string; name: string; desc: string; price: string };

function MenuSection({
  id,
  kicker,
  title,
  titleAccent,
  intro,
  items,
  accent = "gold",
  buttonText,
  buttonLink,
}: {
  id?: string;
  kicker: string;
  title: string;
  titleAccent: string;
  intro: string;
  items: MenuItem[];
  accent?: "gold" | "rose";
  buttonText?: string;
  buttonLink?: string;
}) {
  const accentBg = accent === "rose" ? "bg-rose" : "bg-gold/15";
  const accentText = accent === "rose" ? "text-rose-900" : "text-gold";
  return (
    <section id={id} className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className={`text-xs uppercase tracking-[0.28em] ${accentText}`}>{kicker}</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {title} <em className="italic text-gold">{titleAccent}</em>
          </h2>
          <p className="mt-5 text-base text-ink/65">{intro}</p>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <AnimatedSection key={it.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[22px] border border-ink/10 bg-white transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {it.tag && (
                  <span className={`absolute left-4 top-4 rounded-full ${accentBg} px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] ${accentText} backdrop-blur`}>
                    {it.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug">{it.name}</h3>
                  <span className="shrink-0 font-display text-lg text-gold">{it.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{it.desc}</p>
              </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
        {buttonText && buttonLink && (
          <AnimatedSection delay={0.2} className="mt-10 flex justify-center">
            <Link
              to={buttonLink}
              className="inline-block rounded-full border border-gold px-8 py-3 text-sm font-semibold tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-espresso"
            >
              {buttonText}
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function IceCreamSection() {
  return (
    <section id="icecream" className="bg-rose-2 py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-[#b9526a]">The Scoop Bar</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Handcrafted <em className="italic text-[#b9526a]">Ice Creams</em>
          </h2>
          <p className="mt-5 text-base text-ink/65">
            Small-batch, handcrafted flavors you won't find anywhere else in Vijayawada.
          </p>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {iceItems.map((it, i) => (
            <AnimatedSection key={it.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[22px] border border-rose/60 bg-white transition-shadow hover:shadow-2xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                <img src={it.img} alt={it.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                {it.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-rose px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[#b9526a] backdrop-blur">
                    {it.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl leading-snug">{it.name}</h3>
                  <span className="shrink-0 font-display text-lg text-[#b9526a]">{it.price}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{it.desc}</p>
              </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.2} className="mt-10 flex justify-center">
          <Link
            to="/menu/icecream"
            className="inline-block rounded-full border border-[#b9526a] px-8 py-3 text-sm font-semibold tracking-wide text-[#b9526a] transition-all duration-300 hover:bg-[#b9526a] hover:text-white"
          >
            View All Flavours →
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Specials() {
  return (
    <section id="specials" className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">This Week Only</span>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            Weekly <em className="italic text-gold">Specials</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:auto-rows-[260px]">
          {specials.map((s, i) => {
            const span =
              i === 0 ? "md:row-span-2" : i === 2 ? "md:col-span-2" : i === 4 ? "md:col-span-2" : "";
            return (
              <article
                key={s.name}
                className={`reveal group relative overflow-hidden rounded-[22px] ${span}`}
              >
                <img src={s.img} alt={s.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
                <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6 text-cream">
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold">{s.cat}</span>
                  <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 max-w-sm text-sm text-cream/75">{s.desc}</p>
                  <span className="mt-3 font-display text-xl text-gold">{s.price}</span>
                </div>
              </article>
            );
          })}
        </div>
        <p className="reveal mt-10 text-center text-sm text-cream/60">
          New drops every Monday — follow us on Instagram{" "}
          <a className="text-gold" href="https://instagram.com" target="_blank" rel="noreferrer">
            @sugarbloom.cafe
          </a>
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">#SugarbloomVibes</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Captured at <em className="italic text-gold">Sugarbloom</em>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={`reveal group relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img src={g.img} alt={`Sugarbloom gallery ${i + 1}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-espresso/0 transition group-hover:bg-espresso/40" />
              <div className="absolute inset-0 flex items-center justify-center text-cream opacity-0 transition group-hover:opacity-100">
                <span className="flex items-center gap-2 text-lg">❤ {g.likes}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="reveal mt-12 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-cream transition hover:bg-gold hover:text-espresso"
          >
            Follow @sugarbloom.cafe →
          </a>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="bg-espresso-2 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">
            The Experience
          </span>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            Why <em className="italic text-gold">Sugarbloom?</em>
          </h2>
          <p className="text-cream/70 mt-5 max-w-md mx-auto text-base">
            Six reasons locals choose us every single day — and keep coming back.
          </p>
        </AnimatedSection>

        {/* 3-column grid x 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyFeatures.map((f, i) => (
            <AnimatedSection key={f.num} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-[22px] overflow-hidden aspect-[4/3] cursor-pointer shadow-2xl"
              >
                {/* Background image */}
                <img
                  src={f.image}
                  alt={f.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-black/10" />

                {/* Number badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gold text-espresso text-sm font-display w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
                  {f.num}
                </div>

                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-cream text-2xl leading-tight text-center whitespace-pre-line">
                    {f.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom stat strip */}
        <AnimatedSection delay={0.3} className="mt-14 flex flex-wrap justify-center items-center gap-6 text-cream/60 text-sm uppercase tracking-widest font-medium">
          <span className="text-cream/80">200+ Items on Menu</span>
          <span className="hidden sm:inline">|</span>
          <span className="text-cream/80">4.9★ Google Rating</span>
          <span className="hidden sm:inline">|</span>
          <span className="text-cream/80">3 yrs Serving Vijayawada</span>
        </AnimatedSection>

      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-cream py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Love Letters</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            What Our <em className="italic text-gold">Guests Say</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal relative rounded-[22px] border border-ink/10 bg-white p-8"
            >
              <span className="absolute -top-6 left-6 font-display text-7xl leading-none text-gold">“</span>
              <blockquote className="pt-3 font-display text-lg italic leading-relaxed text-ink/85">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink/10 pt-4">
                <div className="font-display text-lg">{t.name}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-ink/55">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Find Us</span>
          <h2 className="mt-4 font-display text-4xl text-cream md:text-5xl">
            Visit <em className="italic text-gold">Sugarbloom</em>
          </h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div className="reveal space-y-8">
            <div>
              <h4 className="font-display text-2xl text-gold">Address</h4>
              <p className="mt-2 text-cream/80 leading-relaxed">
                Plot 12, Benz Circle, Vijayawada,<br />Andhra Pradesh 520010
              </p>
            </div>
            <div>
              <h4 className="font-display text-2xl text-gold">Hours</h4>
              <p className="mt-2 text-cream/80 leading-relaxed">
                Mon – Fri: 8 AM – 10 PM<br />Sat – Sun: 8 AM – 11 PM
              </p>
            </div>
            <div>
              <h4 className="font-display text-2xl text-gold">Get in Touch</h4>
              <p className="mt-2 text-cream/80 leading-relaxed">
                +91 98491 22334<br />@sugarbloom.cafe
              </p>
              <a
                href="https://wa.me/919849122334"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-espresso transition hover:bg-gold-2"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>
          <div className="reveal overflow-hidden rounded-[22px] border border-white/10">
            <iframe
              title="Sugarbloom location"
              src="https://www.google.com/maps?q=Benz+Circle,+Vijayawada,+Andhra+Pradesh&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-espresso-2 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-cream/60 md:flex-row">
        <div className="font-display text-xl italic text-cream">
          Sugarbloom <span className="text-gold">✦</span>
        </div>
        <p>© {new Date().getFullYear()} Sugarbloom. Made with care in Vijayawada.</p>
        <div className="flex gap-5">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a>
          <a href="https://wa.me/919849122334" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href="https://wa.me/919849122334"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.6h-.01a9.74 9.74 0 0 1-4.96-1.36l-.36-.21-3.8 1 1.02-3.7-.23-.38a9.78 9.78 0 0 1-1.5-5.18c0-5.41 4.4-9.8 9.83-9.8 2.62 0 5.08 1.02 6.93 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.42-4.4 9.82-9.8 9.82Zm5.39-7.34c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15s-.76.96-.94 1.16c-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.39-1.48-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.18-.24-.57-.48-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.74-.71 1.98-1.4.25-.69.25-1.27.17-1.4-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}

function SugarbloomPage() {
  useReveal();
  return (
    <div className="min-h-screen bg-espresso text-cream">
      <Nav />
      <Hero />
      <Marquee />
      <Story />
      <div id="menu">
        <MenuSection
          id="cafe-menu"
          kicker="The Café"
          title="Our Signature"
          titleAccent="Coffees"
          intro="Every cup tells a story. Specialty beans, seasonal flavors, and barista-crafted perfection."
          items={cafeItems}
          buttonText="View All Coffees →"
          buttonLink="/menu/cafe"
        />
        <MenuSection
          id="bakery"
          kicker="The Bakery"
          title="Fresh From"
          titleAccent="Our Oven"
          intro="From Parisian-style croissants to viral cloud cakes — baked fresh every single morning."
          items={bakeryItems}
          buttonText="View Full Bakery Menu →"
          buttonLink="/menu/bakery"
        />
        <IceCreamSection />
      </div>
      <Specials />
      <Gallery />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWA />
    </div>
  );
}
