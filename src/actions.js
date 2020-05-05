import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    item
  };
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    id
  };
}