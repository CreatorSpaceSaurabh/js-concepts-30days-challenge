// Web sites like Vistaprint and Amazon have an online shopping cart that holds the customer's cart.
// Your goal is to write a program that calculates the total price of the products in the cart.

// The catch is that the cart may contain coupons that affect the prices.

// There are three kinds of coupons:

// * Take N% off each individual product in the cart
//   - For example, a general "10% off" coupon
// * Take P% off the next product in the cart
//   - For example, take 20% off your next product
// * Take $D off of the Nth product of type T
//   - For example, take $5 off your third business card holder

//   == Example #1 ==
// * Coupon: Take 10% off the next product in the cart
// * $10 Business cards
// * $20 T-shirt
// The coupon is applied to the Business cards, and the cart total is $29.

// == Example #2 ==
// * $10 Business cards
// * Coupon: Take 10% off the next product in the cart
// * $20 T-shirt
// The cart total here is $28.

// == Example #3 ==
// * $10 Business cards
// * Coupon: Take $2 off your 2nd Business cards
// * Coupon: 25% off each individual item
// * Coupon: Take 10% off the next item in the cart
// * $10 Business cards

// Total = ($10  75%) + (($10 - $2)  75% * 90%) = $7.50 + $5.40 = $12.90

// Coupon rules:
// If multiple coupons of different types could apply to a single product, apply all the discounts in the sequence they were presented.

// Write a program that, given the sequence of products in the shopping cart, computes their total price.
// Items in the order, including both products and coupons, must be considered in sequence.
// You are responsible only for writing the class definitions for necessary components, such as "Cart". No UI, no input reading.

// Write the method Cart.totalPrice(), implemented in terms of your classes.

let inputArray = [
  {
    type: "item",
    name: "Business card",
    category: "buss_card",
    price: 10, //dolar,
  },
  {
    type: "coupon",
    name: "$2 off",
    price: 2, //dolar,
    apply: "after", // enum = ['after', 'all', 'before']
  },
  {
    type: "coupon",
    name: "25% off",
    price: 0.75, //dolar,
    apply: "all",
  },
  {
    type: "coupon",
    name: "10% off",
    price: 0.9, //dolar,
    apply: "after",
  },
  {
    type: "item",
    name: "Business card",
    category: "buss_card",
    price: 10, //dolar
  },
];

// const checkType =

const shoppingCart = (arr) => {
  let cartArray = [];
  let totalItems = 0;

  let totalCoupons = 0;
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!cartArray.length) {
      if (ele.type == "item") totalItems++;
      else totalCoupons++;
      let obj = { ...ele, sequence: i + 1 };
      cartArray.push(obj);
      result = obj.price;
    } else {
      if (ele.type == "coupon") {
        if (cartArray.length) {
          totalCoupons++;
          if (ele.apply == "all") {
            result -= result * ele.price;
            cartArray.push(ele);
          } else if (ele.apply == "after") {
            if (totalItems > 1) {
              result = result - ele.price;
              cartArray.push(ele);
            }
          }
        }
      } else {
        totalItems++;
        result += ele.price;
        cartArray.push(ele);
      }
    }
  }

  return result;
};

const shoppingCartResult = shoppingCart(inputArray);
console.log("Result ==", shoppingCartResult);
