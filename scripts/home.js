import { products } from "../data/products.js";
import { cart, SaveToStorage, UpdateCartQuantity } from "../data/cart.js";

//generate HTML for <div class="products-grid">
let productHTML = '';
products.forEach((product) => {
  productHTML += `
  <div class="product-container">
    <div class="product-name">${product.name}</div>
    <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
    <div class="product-quantity-container">
      <select class="quantity-selector">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
    <button class="product-add-button js-add-button" data-product-id="${product.id}">
      Add to Cart
    </button>
    </div>
  </div>
  `;
});

productHTML +=`
  <div class="product-container">
    <a href="addProduct.html">Add Product</a>
  </div>
  `;

document.querySelector('.js-product-grid')
  .innerHTML = productHTML;

RenderCartQuantity();

document.querySelectorAll('.js-add-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      let matchingItem;
      cart.forEach((item) => {
        if(productId === item.productId){
          matchingItem = item;
        }
      });

      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
        cart.push({
          productId: productId,
          quantity: 1
        });
      }
      SaveToStorage();
      RenderCartQuantity();
    });
  });

function RenderCartQuantity(){
  document.querySelector('.js-cart-quantity')
    .innerHTML = UpdateCartQuantity();  
}
