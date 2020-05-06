import rootReducer from './rootReducer';

const COMPLETED_STATE = { 
  products: [
    {
      productId: "47314fa1-ae56-4eae-80be-af6691145951",
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    {
      productId: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  ],
  cart: {
    "47314fa1-ae56-4eae-80be-af6691145951": {
      qty: 1,
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  },
  itemCount: 0,
  priceCount: 0
 };

 const COMPLETED_STATE_REFRESH = { 
  products: [
    {
      productId: "47314fa1-ae56-4eae-80be-af6691145951",
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    {
      productId: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  ],
  cart: {
    "47314fa1-ae56-4eae-80be-af6691145951": {
      qty: 0,
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  },
  priceCount: 219.99,
  itemCount: 1
 };

 const INITIAL_STATE = { 
  products: [
    {
      productId: "47314fa1-ae56-4eae-80be-af6691145951",
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    {
      productId: "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9",
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  ],
  cart: {
    "47314fa1-ae56-4eae-80be-af6691145951": {
      qty: 0,
      name: "tv",
      price: 219.99,
      description: "A beautiful, big-screen TV. Because hey, Netflix isn't going to watch itself.",
      image_url: "https://images.samsung.com/is/image/samsung/latin_en-hd-j4300ah-un32j4300ahxpa-001-front-indigo-blue"
    },
    "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": {
      qty: 0,
      name: "microwave",
      price: 100.00,
      description: "Heat your food with the power of SCIENCE!",
      image_url: "https://target.scene7.com/is/image/Target/GUEST_c59b9457-3ee1-463b-ad0a-42f48d06c140"
    }
  },
  itemCount: 0,
  priceCount: 0
 };

const ACTION_ADD = {
  type: "ADD_TO_CART",
  productId: "47314fa1-ae56-4eae-80be-af6691145951"
}

const ACTION_REMOVE = {
  type: "DELETE_FROM_CART",
  productId: "47314fa1-ae56-4eae-80be-af6691145951"
}

const ACTION_REFRESH = {
  type: "REFRESH_CART_COUNTS",
  priceCount: 219.99,
  itemCount: 1
}

test("should add product to cart", function() {
  expect(rootReducer(INITIAL_STATE, ACTION_ADD)).toEqual(COMPLETED_STATE);
});

test("should remove product from cart", function() {
  expect(rootReducer(COMPLETED_STATE, ACTION_REMOVE)).toEqual(INITIAL_STATE);
});

test("should refresh cart counts", function() {
  expect(rootReducer(INITIAL_STATE, ACTION_REFRESH)).toEqual(COMPLETED_STATE_REFRESH);
});