import React from 'react';
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "./actions";
import uuid from 'uuid';
import Item from './Item';

function ItemList() {
  const { products } = useSelector(st =>
    ({ products: st.products }), shallowEqual);
    console.log('this is products', products);
  const dispatch = useDispatch();

  //change this foor loop to work with the new products array in state
  function addItem(productId) {
    for (let item in products) {
      if (item === productId) {
        dispatch(addToCart({...item, cartId: uuid()}));
      }
    }
  }

  function deleteItem(cartId) {
    dispatch(deleteFromCart(cartId));
  }

  function renderItems() {
    return products.map(item => 
      ( <Item
        productId={item.productId}
        key={item.productId}
        name={item.name}
        price={item.price}
        description={item.description}
        image_url={item.image_url}
        addItem={addItem}
        deleteItem={deleteItem}
      />
    ))
  }

  return (
    <div>
      {renderItems()}
    </div>
  )
}

export default ItemList;