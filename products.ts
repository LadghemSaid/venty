const products = [
  {
    id: "price_1Kx68oEisLNJVJ1Cx7FlKYKPS",
    name: "Kentiapalm (L)",
    price: 3995,
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
    },
  },
  {
    id: "price_1Kx68oEisLNJVJ1Cx7FlKYKP",
    currency: "EUR",
    name: "Cactus Euphorbia (L)",
    description: "",
    price: 4995,
    images: [
      "/plants/euphorbia.png",
      "/plants/euphorbia.png",
      "/plants/euphorbia.png",
    ],
    rating: {
      count: 213, //optional overide
      rate: 5, //optional overide
      reviews: [
        {
          date: "",
          name: "",
          comment: "",
          buy_date: "", //optional overide for the date of the buy
          photos: [""], //optional first is image is the main
        },
      ],
    },
  },
];

export default products;
