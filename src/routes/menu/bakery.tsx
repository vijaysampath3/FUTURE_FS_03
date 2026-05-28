import { createFileRoute } from "@tanstack/react-router";
import FullMenuPage, { FullMenuItem } from "../../components/FullMenuPage";

const bakeryItems: FullMenuItem[] = [
  {
    name: 'Dubai Pistachio Croissant',
    price: 280,
    badge: 'Drop of the Week',
    description: 'Flaky layers filled with pistachio kunafa cream',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/85fc95d53_generated_deebf343.png',
  },
  {
    name: 'Strawberry Cloud Cake',
    price: 380,
    badge: 'Viral',
    description: 'Light-as-air sponge with fresh strawberry cream layers',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/7747b60ee_generated_4f4aec59.png',
  },
  {
    name: 'Burnt Basque Cheesecake',
    price: 340,
    badge: 'Classic',
    description: 'Caramelized custard-like cheesecake, impossibly creamy',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/6d5eccece_generated_7ce81ecc.png',
  },
  {
    name: 'Matcha Twice-Baked Croissant',
    price: 210,
    badge: 'Bestseller',
    description: 'Crispy, twice-baked with ceremonial matcha cream',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/77ba2ec33_generated_4dcfa84f.png',
  },
  {
    name: 'Butter Croissant',
    price: 160,
    badge: 'Fresh Daily',
    description: 'Classic French butter croissant, 72-hour lamination',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/820c0ff2c_generated_efb32260.png',
  },
  {
    name: 'Sugarbloom Dessert Board',
    price: 680,
    badge: 'For Two',
    description: 'A curated board of pastries, macarons, and seasonal treats',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/294e6d5b3_generated_50bb61de.png',
  },
  {
    name: 'Tiramisu Cup',
    price: 320,
    badge: null,
    description: 'Classic Italian dessert with mascarpone and espresso',
    image: '/images/tiramisu_cup_1779939360961.png',
  },
  {
    name: 'Blueberry Cheesecake Slice',
    price: 290,
    badge: 'New',
    description: 'Rich baked cheesecake with a wild blueberry compote',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80',
  },
  {
    name: 'Almond Pain au Chocolat',
    price: 190,
    badge: null,
    description: 'Double chocolate baton and toasted almond flakes',
    image: 'https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=800&q=80',
  },
  {
    name: 'Lotus Biscoff Tart',
    price: 310,
    badge: 'Trending',
    description: 'Crisp tart shell with creamy Biscoff spread and crumble',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80',
  },
  {
    name: 'Cinnamon Roll',
    price: 180,
    badge: 'Bestseller',
    description: 'Soft, gooey rolls with cream cheese frosting',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=800&q=80',
  },
  {
    name: 'Mixed Berry Danish',
    price: 220,
    badge: 'Seasonal',
    description: 'Flaky pastry filled with custard and fresh summer berries',
    image: '/images/berry_danish_1779939384125.png',
  },
];

export const Route = createFileRoute("/menu/bakery")({
  component: BakeryPage,
});

function BakeryPage() {
  return (
    <FullMenuPage
      title="Fresh Bakery"
      kicker="Our Menu"
      items={bakeryItems}
      accent="gold"
    />
  );
}
