import { useEffect, useReducer, useState } from "react";

export const TimeReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Reset":
      state = 1;
      return state;
    default:
      return state;
  }
};
