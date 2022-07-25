import { ProductListType } from "./types";
const products: ProductListType = [
  {
    id: "price_1LPSuYGYxr8yvqo4QPm64thh",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "noir",
        id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
        images: ["/products/img1.png"],
      },
      {
        name: "blanc",
        id: "price_1LPSuYGYxr8yvqo4QPm64thh",
        images: ["/products/img2.png"],
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
    id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
    name: "VentyPro™",
    description: "",
    variantes: [
      {
        name: "blanc",
        id: "price_1LPSuYGYxr8yvqo4QPm64thh",
        images: ["/products/img2.png"],
      },
      {
        name: "noir",
        id: "price_1LPUjUGYxr8yvqo4fgSirBBl",
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
