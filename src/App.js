import React, { useEffect } from 'react';
import './App.css';
import ItemList from './ItemList';
import NavBar from './NavBar';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { refreshCartCount } from "./actions";

/** App - refreshes nav bar for updated counts
 * 
 */
function App() {

  // TODO: don't need item/price in redux state
  const { products, cart, itemCount, priceCount } = useSelector(st => ({
    products: st.products,
    cart: st.cart,
    itemCount: st.itemCount,
    priceCount: st.priceCount
  }), shallowEqual);

  // const dispatch = useDispatch();

    let newTotalPrice = 0;
    let newItemCount = 0;
    for (let item in cart) {
      newItemCount += cart[item].qty;
      if (cart[item].qty === 1) {
        newTotalPrice += cart[item].price;
      } else if (cart[item].qty > 1) {
        newTotalPrice += (cart[item].price * cart[item].qty);
      }
    }

  // we want the shopping cart counts to refresh whenever cart is updated
  // useEffect(() => {
  //   let newTotalPrice = 0;
  //   let newItemCount = 0;
  //   for (let item in cart) {
  //     newItemCount += cart[item].qty;
  //     if (cart[item].qty === 1) {
  //       newTotalPrice += cart[item].price;
  //     } else if (cart[item].qty > 1) {
  //       newTotalPrice += (cart[item].price * cart[item].qty);
  //     }
  //   }
  //   dispatch(refreshCartCount(newTotalPrice.toFixed(2), newItemCount));
  // },[cart, dispatch]);

  return (
    <div className="App">
      <NavBar priceCount={newTotalPrice} itemCount={newItemCount} />
      <ItemList products={products} />
    </div>
  );
}

export default App;