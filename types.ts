export type reviewType = {
  rate: number;
  date: string;
  name: string;
  comment: string;
  buy_date: string;
  photos: string[];
};
export type varianteType = {
  name: string;
  id_price: string;
  images: string[];
};

export interface ProductType {
  id_price: string;
  currency: string;
  eventTime?: number;
  itemsLeft?: number;
  name: string;
  description: string;
  price: number;
  fakePrice: number;
  variantes: varianteType[];
  rating: {
    count: number;
    rate: number;
    reviews: reviewType[];
  };
}

export type ProductListType = ProductType[];

export type CartDetails = {
  [key: string]: CartDetailProduct;
};
export type CartDetailProduct = {
  id_price: string;
  quantity?: number;
  price: number;
  variante: varianteType;
  name: string;
};
export type cartValues = {
  cartDetails?: CartDetails;
  cartCount?: number;
  totalPrice?: number;
};
