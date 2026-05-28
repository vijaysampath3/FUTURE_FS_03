import { createFileRoute } from "@tanstack/react-router";
import FullMenuPage, { FullMenuItem } from "../../components/FullMenuPage";

const cafeItems: FullMenuItem[] = [
  {
    name: 'Rose Lavender Latte',
    price: 260,
    badge: 'Viral',
    description: 'Floral and velvety with house-made rose lavender syrup',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/cecf1735a_generated_9a0f5cba.png',
  },
  {
    name: 'Biscoff Dalgona Shake',
    price: 320,
    badge: 'Trending',
    description: 'Whipped dalgona coffee with crumbled Biscoff cookies',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/c9cd0f5ab_generated_de75cc36.png',
  },
  {
    name: 'Mango Cold Brew Tonic',
    price: 290,
    badge: 'Seasonal',
    description: 'Cold brew meets tonic water with fresh mango puree',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/86e452165_generated_53d60c1f.png',
  },
  {
    name: 'Classic Espresso',
    price: 180,
    badge: 'Bestseller',
    description: 'Double-shot pulled from our single-origin house blend',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/10e4cd645_generated_8f54f231.png',
  },
  {
    name: 'Honey Cinnamon Cortado',
    price: 220,
    badge: null,
    description: 'Espresso balanced with steamed milk, honey, and cinnamon',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/671d3496c_generated_cb55442b.png',
  },
  {
    name: 'Strawberry Matcha Latte',
    price: 300,
    badge: 'New',
    description: 'Ceremonial grade matcha layered with strawberry cream',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/fdce5c4da_generated_53c1eb49.png',
  },
  {
    name: 'Vanilla Cold Brew',
    price: 250,
    badge: null,
    description: 'Smooth 18-hour steep with house vanilla bean syrup',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
  },
  {
    name: 'Caramel Macchiato',
    price: 270,
    badge: 'Bestseller',
    description: 'Espresso layered over vanilla milk, topped with caramel drizzle',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80',
  },
  {
    name: 'Turmeric Golden Latte',
    price: 240,
    badge: 'New',
    description: 'Warming blend of turmeric, ginger, black pepper and oat milk',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
  },
  {
    name: 'Iced Hazelnut Latte',
    price: 280,
    badge: null,
    description: 'Chilled espresso with roasted hazelnut notes',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
  },
  {
    name: 'Signature Filter Coffee',
    price: 150,
    badge: 'Classic',
    description: 'Traditional South Indian drip coffee with chicory',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80',
  },
  {
    name: 'Dirty Chai Latte',
    price: 260,
    badge: 'Trending',
    description: 'Spiced masala chai kicked up with a shot of espresso',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
];

export const Route = createFileRoute("/menu/cafe")({
  component: CafePage,
});

function CafePage() {
  return (
    <FullMenuPage
      title="All Coffees"
      kicker="Our Menu"
      items={cafeItems}
      accent="gold"
    />
  );
}
