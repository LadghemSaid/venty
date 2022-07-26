import products from "products";
import React, { useContext, useReducer, useMemo } from "react";
import { CartDetailProduct, cartValues } from "types";
import useLocalStorageReducer from "./use-local-storage-reducer";

// Reducers

const initialCartValues: cartValues = {
  cartDetails: {},
  cartCount: 0,
  totalPrice: 0,
};

const addItem = (
  state: cartValues = {},
  product: CartDetailProduct = null,
  quantity = 0
): cartValues => {
  if (quantity <= 0 || !product) return state;
  let entry = state?.cartDetails?.[product.id];

  if (entry && entry.variante.name === product.variante.name) {
    // Update item
    entry.quantity += quantity;
  } else {
    // Add item
    let varianteFound;
    if (product.variante.id) {
      varianteFound = products.find((it) => it.id === product.variante.id);
      if (varianteFound) {
        product = { ...varianteFound, variante: product.variante };
      }
    }

    entry = {
      ...product,
      quantity,
    };
  }

  return {
    ...state,
    cartDetails: {
      ...state.cartDetails,
      [product.id]: entry,
    },
    cartCount: Math.max(0, state.cartCount + quantity),
    totalPrice: Math.max(state.totalPrice + product.price * quantity),
  };
};

const removeItem = (
  state: cartValues = {},
  product: CartDetailProduct = null,
  quantity = 0
): cartValues => {
  if (quantity <= 0 || !product) return state;

  let entry;
  if (product.variante.id) {
    entry = state?.cartDetails?.[product.variante.id];
  } else {
    entry = state?.cartDetails?.[product.id];
  }

  if (entry) {
    // Remove item
    if (
      quantity >= entry.quantity &&
      entry.variante.name === product.variante.name
    ) {
      const { [product.id]: id, ...details } = state.cartDetails;
      return {
        ...state,
        cartDetails: details,
        cartCount: Math.max(0, state.cartCount - entry.quantity),
        totalPrice: Math.max(
          0,
          state.totalPrice - product.price * entry.quantity
        ),
      };
    }
    // Update item
    else {
      return {
        ...state,
        cartDetails: {
          ...state.cartDetails,
          [product.id]: {
            ...entry,
            quantity: entry.quantity - quantity,
          },
        },
        cartCount: Math.max(0, state.cartCount - quantity),
        totalPrice: Math.max(0, state.totalPrice - product.price * quantity),
      };
    }
  } else {
    return state;
  }
};

const clearCart = () => {
  return initialCartValues;
};

const cartReducer = (
  state = {},
  action: {
    product: CartDetailProduct;
    quantity: number;
    type: string;
  }
) => {
  switch (action.type) {
    case "ADD_ITEM":
      return addItem(state, action.product, action.quantity);
    case "REMOVE_ITEM":
      return removeItem(state, action.product, action.quantity);
    case "CLEAR_CART":
      return clearCart();
    default:
      return state;
  }
};

// Context + Provider
const CartContext = React.createContext({});

export const CartProvider = ({ currency = "EUR", children = null }) => {
  const [cart, dispatch]: any = useLocalStorageReducer(
    "cart",
    cartReducer,
    initialCartValues
  );

  const contextValue = useMemo(
    () => [
      {
        ...cart,
        currency,
      },
      dispatch,
    ],
    [cart, currency]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// Hook
export const useShoppingCart = () => {
  const [cart, dispatch]: any = useContext(CartContext);

  const addItem = (product: CartDetailProduct, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, quantity });
  };

  const removeItem = (product: CartDetailProduct, quantity = 1) => {
    dispatch({ type: "REMOVE_ITEM", product, quantity });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const shoppingCart = {
    ...(cart as cartValues),
    addItem,
    removeItem,
    clearCart,
  };

  return shoppingCart;
};
