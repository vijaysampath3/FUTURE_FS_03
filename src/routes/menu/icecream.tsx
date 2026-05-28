import { createFileRoute } from "@tanstack/react-router";
import FullMenuPage, { FullMenuItem } from "../../components/FullMenuPage";

const iceCreamItems: FullMenuItem[] = [
  {
    name: 'Black Sesame Soft Serve',
    price: 220,
    badge: 'Viral',
    description: 'Jaw-dropping charcoal cone with toasted sesame swirl',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/c69fde4cf_generated_ec2e16e9.png',
  },
  {
    name: 'Mango Saffron Kulfi Pop',
    price: 180,
    badge: 'Bestseller',
    description: 'Rose petals on top, Alphonso mango with saffron',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/7acee30a7_generated_5d24b510.png',
  },
  {
    name: 'Cherry Blossom Gelato',
    price: 200,
    badge: null,
    description: 'Sakura-infused gelato with delicate floral notes',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/9a85c0bf9_generated_9b9e66da.png',
  },
  {
    name: 'Sundae Dessert Board',
    price: 580,
    badge: 'For Two',
    description: '3 scoops, brownies, macarons, and all the toppings',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/64987b4de_generated_a25c2c36.png',
  },
  {
    name: 'Pistachio Scoops',
    price: 240,
    badge: null,
    description: 'Rich pistachio gelato with crushed pistachios on top',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/beb45842a_generated_9362c8ab.png',
  },
  {
    name: 'Coconut Pandan Soft Serve',
    price: 230,
    badge: 'New',
    description: 'Tropical coconut with Southeast Asian pandan leaf',
    image: 'https://media.base44.com/images/public/6a142babc9cc3adab8e62027/63c18d7db_generated_a1a75ce3.png',
  },
  {
    name: 'Belgian Chocolate Scoop',
    price: 200,
    badge: 'Classic',
    description: 'Deep, dark, and intensely chocolatey',
    image: '/images/belgian_chocolate_1779939404457.png',
  },
  {
    name: 'Salted Caramel Gelato',
    price: 210,
    badge: 'Bestseller',
    description: 'Sweet cream with ribbons of house-made sea salt caramel',
    image: '/images/salted_caramel_1779939432486.png',
  },
  {
    name: 'Rose Gulkand Kulfi',
    price: 190,
    badge: 'Seasonal',
    description: 'Traditional slow-churned ice cream with sweet rose petal jam',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80',
  },
  {
    name: 'Matcha White Chocolate Swirl',
    price: 250,
    badge: 'Viral',
    description: 'Earthy green tea swirled with sweet white chocolate chunks',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?w=800&q=80',
  },
  {
    name: 'Tender Coconut Ice Cream',
    price: 180,
    badge: 'Classic',
    description: 'Made with fresh malai and coconut water from local farms',
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?w=800&q=80',
  },
  {
    name: 'Strawberry Cheesecake Scoop',
    price: 220,
    badge: 'Trending',
    description: 'Cheesecake ice cream loaded with graham cracker and berry swirl',
    image: 'https://images.unsplash.com/photo-1553177595-4de2bb0842b9?w=800&q=80',
  },
];

export const Route = createFileRoute("/menu/icecream")({
  component: IceCreamPage,
});

function IceCreamPage() {
  return (
    <FullMenuPage
      title="Ice Cream Flavours"
      kicker="Our Menu"
      items={iceCreamItems}
      accent="rose"
    />
  );
}
