import { ADD_TO_CART, DELETE_FROM_CART, REFRESH_CART_COUNTS } from "./actionTypes";

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  };
}

export function deleteFromCart(productId) {
  return {
    type: DELETE_FROM_CART,
    productId
  };
}

export function refreshCartCount(priceCount, itemCount) {
  return {
    type: REFRESH_CART_COUNTS,
    priceCount,
    itemCount
   };
}