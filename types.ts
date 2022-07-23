export type reviewType = {
  rate: number;
  date: string;
  name: string;
  comment: string;
  buy_date: string;
  photos: string[];
};

export type ProductType = {
  id: string;
  currency: string;
  eventTime: number;
  itemsLeft: number;
  name: string;
  description: string;
  price: number;
  fakePrice: number;
  images: string[];
  rating: {
    count: number;
    rate: number;
    reviews: reviewType[];
  };
};

export type ProductListType = ProductType[];

export type cartValues = {
  cartDetails?: {
    [key: string]: {
      id: string;
      quantity: number;
      price: number;
      images: string[];
      name: string;
    };
  };
  cartCount?: number;
  totalPrice?: number;
};
