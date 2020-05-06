import React from 'react';
import './Item.css'

function Item({
  productId, 
  name, 
  price, 
  description, 
  image_url, 
  addItem, 
  deleteItem}){

    return(
      <div className="productContainer">
        <div className="productImageContainer">
          <img src={image_url} alt="item-image" className="productImage"/>
        </div>
        <div className="productDetailsContainer">
          <h2>{name}</h2>
          <p>${price}</p>
          <p>{description}</p>
          <button className="btn btnAdd" onClick={() => addItem(productId)}>Add to Cart</button>
          <button className="btn btnDelete" onClick={() => deleteItem(productId)}>Delete from Cart</button>
        </div>
      </div>
    )
}

export default Item;