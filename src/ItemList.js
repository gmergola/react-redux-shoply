import React from 'react';
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "./actions";
import Item from './Item';
import './ItemList.css'

// renders the list of products
function ItemList({ products }) {
  const dispatch = useDispatch();

  // adding a product to the user's shopping cart
  function addItem(productId) {
    dispatch(addToCart(productId));
  }

  // removing a product from the user's shopping cart
  function deleteItem(productId) {
    dispatch(deleteFromCart(productId));
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
    <div className="productListContainer">
      {renderItems()}
    </div>
  )
}

export default ItemList;