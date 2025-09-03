import { products } from "./products.js";

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart = [
  {
    productId: "prod-tennis-003",
    quantity: 2
  },
  {
    productId: "prod-skate-010",
    quantity: 1
  }];
}

export function SaveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('products', JSON.stringify(products));
}

export function UpdateCartQuantity(){
  let totalCartQuantity = 0;
  cart.forEach((cartItem) => {
    totalCartQuantity += cartItem.quantity;
  });
  return totalCartQuantity;
}

export function TotalCartPrice(){
  let matchingProduct;
  let totalCartPrice = 0;

  cart.forEach((cartItem) => {
    products.forEach((productsItem) => {
      if(productsItem.id === cartItem.productId){
        matchingProduct = productsItem;
        totalCartPrice += (matchingProduct.priceCents * cartItem.quantity);
      }
    });
  });
  return totalCartPrice;
}