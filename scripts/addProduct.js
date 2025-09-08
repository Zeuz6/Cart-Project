import { UpdateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { SaveToStorage } from "../data/cart.js";

function RenderCartQuantity(){
  document.querySelector('.js-cart-quantity')
    .innerHTML = UpdateCartQuantity();  
}

RenderCartQuantity();

document.querySelector('.js-add-product-button')
  .addEventListener('click', () => {
    let newNameInput = document.querySelector('.js-new-name');
    let newPriceInput = document.querySelector('.js-new-price');
    
    let newName = newNameInput.value;
    let newPrice = newPriceInput.value;
    
    let count = products.length;

    products.push(
      { 
        id: `prod-${newName}-0${count + 1}`, 
        name: `${newName}`, 
        priceCents: newPrice * 100
      }
    );

    newPriceInput.value = null;
    newNameInput.value = '';

    console.log(products);
    SaveToStorage();
  
  });
