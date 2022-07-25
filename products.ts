import { ProductListType } from "./types";
const products: ProductListType = [
  {
    id: "price_1LPSuYGYxr8yvqo4QPm64thh",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "blanc",
        id: "price_1LPSuYGYxr8yvqo4QPm64thh",
      },
      {
        name: "noir",
        id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
      },
    ],
    price: 3999,
    fakePrice: 9995,
    currency: "EUR",
    images: ["/products/img2.png", "/products/img1.png"],
    rating: {
      count: 85,
      rate: 4.5,
      reviews: [
        {
          rate: 2, //optional overide
          date: "", //optional overide
          name: "", //optional overide
          comment: "",
          buy_date: "", //optional overide for the date of the buy
          photos: [""], //optional first is image is the main
        },
      ],
    },
  },
  {
    id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "noir",
        id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
      },
      {
        name: "blanc",
        id: "price_1LPSuYGYxr8yvqo4QPm64thh",
      },
    ],
    price: 3999,
    fakePrice: 9995,
    currency: "EUR",
    images: ["/products/img1.png", "/products/img2.png"],
    rating: {
      count: 85,
      rate: 4.5,
      reviews: [
        {
          rate: 2, //optional overide
          date: "", //optional overide
          name: "", //optional overide
          comment: "",
          buy_date: "", //optional overide for the date of the buy
          photos: [""], //optional first is image is the main
        },
      ],
    },
  },
];

export default products;
