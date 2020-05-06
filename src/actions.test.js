import {addToCart, refreshCartCount, deleteFromCart} from './actions';

test("addToCart should return a correct action object", function() {
  expect(addToCart("testid")).toEqual({
    type: "ADD_TO_CART",
    productId: "testid"
  })
  expect(addToCart(12345)).toEqual({
    type: "ADD_TO_CART",
    productId: 12345
  })
});

test("refreshCartCount should return a correct action object", function() {
  expect(refreshCartCount(49.99, 1)).toEqual({
    type: "REFRESH_CART_COUNTS",
    priceCount: 49.99,
    itemCount: 1
  })
});

test("deleteFromCart should return a correct action object", function() {
  expect(deleteFromCart("testid")).toEqual({
    type: "DELETE_FROM_CART",
    productId: "testid"
  })
  expect(deleteFromCart(12345)).toEqual({
    type: "DELETE_FROM_CART",
    productId: 12345
  })
});