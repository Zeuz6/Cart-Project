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
    let newName = document.querySelector('.js-new-name').value;
    let newPrice = document.querySelector('.js-new-price').value;
    
    products.push(
      { 
        id: "prod-badmin-030", 
        name: `${newName}`, 
        priceCents: newPrice * 100
      }
    );
    //console.log((parseInt(newPriceInt, 100)));
    //newPrice.value = "";
    //newName.value = "";

    console.log(products);
    SaveToStorage();
  
  });