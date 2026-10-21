export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Torta de Chocolate",
    description: "Bizcochuelo de chocolate con relleno de dulce de leche.",
    price: 18000,
    category: "Tortas",
    image: "/images/torta-chocolate.jpg",
  },
  {
    id: 2,
    name: "Cheesecake de Frutilla",
    description: "Cheesecake cremoso con salsa de frutillas.",
    price: 16000,
    category: "Tortas",
    image: "/images/cheesecake.jpg",
  },
  {
    id: 3,
    name: "Cupcakes de Vainilla",
    description: "Cupcakes de vainilla con frosting artesanal.",
    price: 8500,
    category: "Cupcakes",
    image: "/images/cupcakes.jpg",
  },
  {
    id: 4,
    name: "Cookies con Chocolate",
    description: "Cookies caseras con chips de chocolate.",
    price: 6000,
    category: "Cookies",
    image: "/images/cookies.jpg",
  },
  {
    id: 5,
    name: "Brownie",
    description: "Brownie húmedo de chocolate con nueces.",
    price: 7000,
    category: "Postres",
    image: "/images/brownie.jpg",
  },
  {
    id: 6,
    name: "Lemon Pie",
    description: "Base crocante, crema de limón y merengue.",
    price: 14000,
    category: "Postres",
    image: "/images/lemon-pie.jpg",
  },
];