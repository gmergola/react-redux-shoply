import React from 'react';

function Item({
  productId, 
  cartId, 
  name, 
  price, 
  description, 
  image_url, 
  addItem, 
  deleteItem}){

    return(
      <div>
        <img src={image_url} alt="item-image"/>
        <p>{name}</p>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={() => addItem(productId)}>Add to Cart</button>
        <button onClick={() => deleteItem(cartId)}>Delete from Cart</button>
      </div>
    )
}

export default Item;