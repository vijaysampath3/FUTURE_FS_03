import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Nav from "./Nav";

export type FullMenuItem = {
  name: string;
  price: string | number;
  badge?: string | null;
  description: string;
  image: string;
};

export default function FullMenuPage({
  title,
  kicker,
  items,
  accent = "gold",
}: {
  title: string;
  kicker: string;
  items: FullMenuItem[];
  accent?: "gold" | "rose";
}) {
  const accentColor = accent === "rose" ? "text-[#b9526a]" : "text-gold";
  const accentBorderHover = accent === "rose" ? "hover:border-[#b9526a]/50" : "hover:border-gold/50";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-espresso text-cream"
    >
      <Nav />
      <div className="mx-auto max-w-7xl px-6 pt-36 pb-24">
        <div className="mb-10">
          <Link
            to="/"
            hash="menu"
            className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${accentColor} hover:opacity-80 transition-opacity`}
          >
            ← Back to Menu
          </Link>
        </div>

        <div className="mb-16 border-b border-white/10 pb-8">
          <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${accentColor}`}>
            {kicker}
          </span>
          <h1 className="mt-4 font-display text-5xl md:text-6xl text-cream tracking-tight">
            {title}
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group"
            >
              <div className={`relative mb-5 aspect-square w-full overflow-hidden border border-transparent transition-colors duration-300 ${accentBorderHover}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                {item.badge && (
                  <span className="absolute left-3 top-3 bg-espresso/90 backdrop-blur-md px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cream">
                    {item.badge}
                  </span>
                )}
              </div>
              <div>
                <h3 className="font-display text-xl leading-tight text-cream">
                  {item.name}
                </h3>
                <div className={`mt-2 font-display text-lg ${accentColor}`}>
                  {typeof item.price === "number" ? `₹${item.price}` : item.price}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
