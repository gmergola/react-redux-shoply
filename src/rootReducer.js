import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes.js";
import products from './data.json'; //maybe this will be products.products

function makeProducts(){
  let newProducts = [];
  for(let product in products.products){
    let value = products.products[product];
    newProducts.push({...value, productId: product});
  }
  return newProducts;
}

const INITIAL_STATE = { 
  cart: [],
  products: makeProducts()
 };

function rootReducer(state = INITIAL_STATE, action) {
  console.log("reducer ran; state & action:", state, action);

  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item]
      }

    case DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.id)
      }

    default:
      return state;
  }
}
// end

export default rootReducer;