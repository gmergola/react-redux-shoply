import { ADD_TO_CART, DELETE_FROM_CART, REFRESH_CART_COUNTS } from "./actionTypes.js";
import products from './data.json'; //maybe this will be products.products

// reformatting products for easier rendering
function makeProducts(){
  let newProducts = [];
  for(let product in products.products){
    let value = products.products[product];
    newProducts.push({...value, productId: product});
  }
  return newProducts;
}

// formatting cart to track quantity counts for each item
// sanity check on storing all product items in cart, then only changing quantity
function makeCart(){
  let newCart = {};
  for(let product in products.products){
    newCart[product] = {
      ...products.products[product],
      qty: 0
    };
  }
  return newCart;
}

const INITIAL_STATE = { 
  cart: makeCart(),
  products: makeProducts(),
  itemCount: 0,
  priceCount: 0
 };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    // adding quantity to item in shopping cart
    case ADD_TO_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.productId]: {
            ...state.cart[action.productId],
            qty: state.cart[action.productId].qty + 1
          }}
      };

    // reducing quantity of item in shopping cart by 1
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.productId]: {
            ...state.cart[action.productId],
            qty: state.cart[action.productId].qty > 0
                  ? state.cart[action.productId].qty - 1
                  : state.cart[action.productId].qty
        }}
      };

      // updates navbar counts
      case REFRESH_CART_COUNTS:
        return {
          ...state,
          itemCount: action.itemCount,
          priceCount: action.priceCount
        }


    default:
      return state;
  }
}

export default rootReducer;