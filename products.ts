import { ProductListType } from "./types";
const products: ProductListType = [
  {
    id_price:
      process.env.NODE_ENV === "production"
        ? "price_1LPSugGYxr8yvqo4YCcsyVor"
        : "price_1LPSuYGYxr8yvqo4QPm64thh",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "blanc",
        id_price: "price_1LPSuYGYxr8yvqo4QPm64thh",
        images: ["/products/img2.png"],
      },
      {
        name: "noir",
        id_price:
          process.env.NODE_ENV === "production"
            ? "price_1LPuRLGYxr8yvqo4slfSU11e"
            : "price_1LPUjUGYxr8yvqo4fgSirBBl",
        images: ["/products/img1.png"],
      },
    ],
    price: 3999,
    fakePrice: 9995,
    currency: "EUR",

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
    id_price: "price_1LPUjUGYxr8yvqo4fgSirBBl",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "blanc",
        id_price: "price_1LPSuYGYxr8yvqo4QPm64thh",
        images: ["/products/img2.png"],
      },
      {
        name: "noir",
        id_price: "price_1LPUjUGYxr8yvqo4fgSirBBl",
        images: ["/products/img1.png"],
      },
    ],
    price: 3999,
    fakePrice: 9995,
    currency: "EUR",

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
