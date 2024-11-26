const products = [
  {
    id: "1",
    name: "Geometrica",
    price: 140000,
    category: "alfombra",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_3452-a30a9ba61841ca09b517242730284545-1024-1024.webp",
    stock: 25,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "2",
    name: "Acid",
    price: 80000,
    category: "alfombra",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_2462-0b82b5c296f1af939317159581045575-1024-1024.webp",
    stock: 1,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  
  },
  {
    id: "3",
    name: "Damero Way",
    price: 12000,
    category: "tapete",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_3756-824db6f0a4e869f5da17277058361738-1024-1024.webp",
    stock: 7,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  
  },
  {
    id: "4",
    name: "Unica",
    price: 120000,
    category: "perzonalizadas",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_4022-8d894b6ef4e3d1f35b17296574017457-1024-1024.webp",
    stock: 1,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "5",
    name: "Rectangulos",
    price: 80000,
    category: "alfombra",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_4018-ab2aac29ddda7ef73917304705041882-1024-1024.webp",
    stock: 16,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "6",
    name: "Ovalos",
    price: 800333,
    category: "alfombra",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_2314-596e7fab948b4fae4017150110036633-1024-1024.webp",
    stock: 16,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "7",
    name: "Petalos",
    price: 124400,
    category: "tapete",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_2774-517401399989b5f21117181192871525-1024-1024.webp",
    stock: 1,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "8",
    name: "Bosque",
    price: 120000,
    category: "tapete",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_2992-947315877440f75eee17202319381522-1024-1024.webp" ,
    stock: 6,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
  {
    id: "9",
    name: "Satoru",
    price: 120000,
    category: "perzonalizadas",
    img: "https://dcdn.mitiendanube.com/stores/004/135/378/products/img_2486_1_-abaab41080fee6d09017164376101212-1024-1024.webp",
    stock: 18,
    description: "Medidas: 80x55 cm, Espesor: 2 cm, Base: Panamá, Fondo: Tapizmel, Material: Lana Acrílica 100% - libre de derivado animal",
  },
];


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2500);
  });
};

export const getProductByID = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};
