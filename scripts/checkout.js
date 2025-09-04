import { cart, SaveToStorage } from "../data/cart.js";
import { products } from "../data/products.js";
import { UpdateCartQuantity, TotalCartPrice } from "../data/cart.js";

RenderCartItems();
RemoveFromCart();
UpdateOrderSummary();
UpdateProductQuantity();

function RenderCartItems(){
  let cartHTML = ""
  cart.forEach((cartItem) => {
    let matchingProduct;
    products.forEach((productsItem) => {
      if(productsItem.id === cartItem.productId){
        matchingProduct = productsItem;
      }
    });
    cartHTML += `
    <div class="product-container">
      <div class="product-name">${matchingProduct.name}</div>
      <div class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>
      <div class="quantity-row">
        <div class="left-side">
          <div class="product-quantity">Quantity:</div>
          <button class="update-button js-less-update-button" 
            data-product-id="${matchingProduct.id}">-</button>
          <div>${cartItem.quantity}</div>
          <button class="update-button js-plus-update-button" 
            data-product-id="${matchingProduct.id}">+</button>
        </div>
        <div>
          <button class="delete-button js-delete-button" 
            data-product-id="${matchingProduct.id}">delete
          </button>
        </div>
      </div>
    </div>
    `;
  });
  
  document.querySelector('.js-cart-grid')
    .innerHTML = cartHTML;
}

function RemoveFromCart(){
  document.querySelectorAll('.js-delete-button')
    .forEach((button) => {
      button.addEventListener('click', () =>{
        const id = button.dataset.productId;
        let index = 0;
        cart.forEach((item) => {
          if(item.productId !== id){
            index++;
          }else{
            cart.splice(index, 1);
            SaveToStorage();
            console.log(cart);
          }        
        });
        RenderCartItems();
        RemoveFromCart();
        UpdateOrderSummary();
        UpdateProductQuantity()
      });
    });
}

function UpdateOrderSummary(){
  const cartQuantity = document.querySelector('.js-cart-chk-quantity');
  const orderSummaryElement = document.querySelector('.js-order-summary');
  
  cartQuantity.innerHTML = `${UpdateCartQuantity()} Items`

  let orderTotal = (TotalCartPrice() / 100).toFixed(2);
  let totalTax = (orderTotal * 0.1).toFixed(2);
  
  let orderSummary = `
  <div class="order-title">Order Summary</div>
    <div class="payment-summary-row">
      <div class="items-count">Items (${UpdateCartQuantity()}):</div>
      <div class="payment-total">${orderTotal}</div>
    </div>
    <div class="payment-summary-row">
      <div class="items-count">Total before tax:</div>
      <div class="payment-total">${orderTotal}</div>
    </div>
    <div class="payment-summary-row">
      <div class="items-count">Estimated Tax (10%):</div>
      <div class="payment-total">${totalTax}</div>
    </div>
    <div class="payment-summary-row-total">
      <div class="order-total">Order Total:</div>
      <div class="order-total">${((TotalCartPrice() / 100) + (orderTotal * 0.1)).toFixed(2)}</div>
    </div>
  `
  orderSummaryElement.innerHTML = orderSummary;
}

function UpdateProductQuantity(){
  document.querySelectorAll('.js-less-update-button').
    forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.productId;
        let index = 0;
        cart.forEach((item) => {
           if(item.productId !== id){
            index++;
          }else{
            if(item.quantity === 1){
              cart.splice(index, 1);
              SaveToStorage();
            }else{
              item.quantity--;
            }
          } 
          SaveToStorage();
          RenderCartItems();
          UpdateOrderSummary();
          UpdateProductQuantity();
          RemoveFromCart();
        });
      });
    });
  
  document.querySelectorAll('.js-plus-update-button').
    forEach((button) => {
      button.addEventListener('click', () => {
        const id = button.dataset.productId;
        cart.forEach((item) => {
          if(id === item.productId){
            item.quantity++;
            SaveToStorage();
            RenderCartItems();
            UpdateOrderSummary();
            UpdateProductQuantity();
          }
        });
      });
    });
}
