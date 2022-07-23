import { ProductListType } from "./types";
const products: ProductListType = [
  {
    id: "price_1HrWTjEisLNJVJ1Cs6C4dN0e",
    name: "Kentiapalm (L)",
    description: "",
    price: 3995,
    fakePrice: 9995,
    currency: "EUR",
    images: [
      "/plants/kentiapalm.png",
      "/plants/kentiapalm.png",
      "/plants/kentiapalm.png",
      "/plants/kentiapalm.png",
      "/plants/kentiapalm.png",
    ],
    rating: {
      count: 85,
      rate: 4.5,
      reviews: [],
    },
  },
  {
    id: "price_1Kx68oEisLNJVJ1Cx7FlKYKP",
    currency: "EUR", //optional overide
    name: "Cactus Euphorbia (L)",
    description: "",
    price: 4995,
    fakePrice: 9995,
    images: [
      //optional first is image is the main
      "/plants/euphorbia.png",
      "/plants/euphorbia.png",
      "/plants/euphorbia.png",
    ],
    rating: {
      count: 213, //optional overide
      rate: 5, //optional overide
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
