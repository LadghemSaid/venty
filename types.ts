export type reviewType = {
  rate: number;
  date: string;
  name: string;
  comment: string;
  buy_date: string;
  photos: string[];
};
export type variantesType = {
  name: string;
  id: string;
};

export interface ProductType {
  id: string;
  currency: string;
  eventTime?: number;
  itemsLeft?: number;
  name: string;
  description: string;
  price: number;
  fakePrice: number;
  images: string[];
  variantes: variantesType[];
  rating: {
    count: number;
    rate: number;
    reviews: reviewType[];
  };
}

export type ProductListType = ProductType[];

export type CartDetails = {
  [key: string]: {
    id: string;
    quantity: number;
    price: number;
    images: string[];
    name: string;
  };
};
export type cartValues = {
  cartDetails?: CartDetails;
  cartCount?: number;
  totalPrice?: number;
};
