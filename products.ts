import { ProductListType } from "./types";
const products: ProductListType = [
  {
    id: "price_1HrWTjEisLNJVJ1Cs6C4dN0e",
    name: "VentyPro™",
    description: "",
    price: 3995,
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
];

export default products;
