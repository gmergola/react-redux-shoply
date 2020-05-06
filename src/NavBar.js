import React from 'react';

// displays counts for total cost of shopping cart, and number of items in cart
function NavBar({ priceCount, itemCount }) {
  return (
    <nav>
      Shoply!
      <div className="cartInfo">
        Cart: ${priceCount} – {itemCount}
      </div>
    </nav>
  )
}

export default NavBar;