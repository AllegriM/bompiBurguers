// // Agregar productos al Carrito.

// //*********  Clases  *********//

// class Producto {
//     constructor(id, name, type, price, desc) {
//         this.id = parseInt(id);
//         this.name = name.toLowerCase();
//         this.type = type.toLowerCase();
//         this.price = parseInt(price);
//         this.desc = desc
//         // this.stock = parseInt(stock);
//     }
//     cuponDescuento() {
//         if (this.price > 3000) {
//             let valorFinal = this.price - (this.price * 0.15);
//             return valorFinal;
//         } else {
//             return alert("No superaste los $3000. No hay descuento esta vez")
//         }
//     }
// }


// //********* Productos *********//

// // Hamburguesas
// const neuquen = new Producto(1, "NEUQUEN", "hamburguesa", 780, `Smoked cheese, arugula, mint, pine mushroom pickle & merken
// mayonnese.`);
// const cordoba = new Producto(2, "CORDOBA", "hamburguesa", 750, `Smoked cheese, arugula, mint, pine mushroom pickle & merken
// mayonnese.`);
// const mendoza = new Producto(3, "MENDOZA", "hamburguesa", 800, `Double hamburguer, double cheddar, pickled cucumbers,
// onion, capuccine lettuce & special sauce.`);
// const misiones = new Producto(4, "MISIONES", "hamburguesa", 780, `Blue cheese, caramelized onion, arugula & eggplant
// mayonnaise.`);
// const chaco = new Producto(5, "CHACO", "hamburguesa", 770, `Danbo cheese, tomatoe, cappucine lettuce, pickled
// cucumbers, white onion & mostaza.`);
// const salta = new Producto(6, "SALTA", "hamburguesa", 800, `Danbo cheese, grilled egg, cooked ham, grilled onion &
// olvie mayoneese.`);
// const jujuy = new Producto(7, "JUJUY", "hamburguesa", 750, `Pategras cheese, fresh tomatoes, pickled jalapeno &
// guacamole.`);
// const tucuman = new Producto(8, "TUCUMAN", "hamburguesa", 770, `Pategras cheese, marinated tomatoes, capuccine lettuce &
// alioli`);
// const chubut = new Producto(9, "CHUBUT", "hamburguesa", 850, `Cheddar cheese, smoked bacon, pickled cucumbers & ketchup.`);
// const corrientes = new Producto(10, "CORRIENTES", "hamburguesa", 830, `Fried chicken breast, smoked bacon, capuccine lettuce, &
// tartar sauce.`);
// // Extras
// const papasComunes = new Producto(11, "PAPAS COMUNES", "extras", 600, `The best friend of your burguer. The classic ones.`);
// const papasCheddar = new Producto(12, "PAPAS CHEDDAR", "extras", 680, `Fries with tempero, cheddar cheese, bacon & green onion.`);
// const chickenDice = new Producto(13, "CHICKEN DICES", "extras", 700, `Marinated chicken in 11 spices & some mayonnese.`);
// const OnionRing = new Producto(14, "ONION RINGS", "extras", 650, `Onion rings with some white barbacue. Or the sauce you.`);
// // Ensaladas
// const caesar = new Producto(15, "CAESAR", "ensaladas", 700, `Capuccine lettuce, smoked bacon, croutones, parmesano
// cheese, chicken breast, & our special Caesar sauce.`);
// const reisol = new Producto(16, "REISOL", "ensaladas", 650, `Green mix, smoked cheese, cheddar cheese, boiled egg,
// guacamole, roasted tomatoes & bell pepper sauce.`);
// // bebidas sin alcohol
// const coca = new Producto(17, "COCA", "bsalc", 200, `Gaseosa de 355ml marca Coca Cola.`);
// const cocaZero = new Producto(18, "COCA ZERO", "bsalc", 200, `Gaseosa de 355ml marca Coca Cola.`);
// const agua = new Producto(19, "AGUA", "bsalc", 150, `Botella de 500ml de agua mineral.`);
// const pasoToros = new Producto(20, "TOROS POMELO", "bsalc", 200,`Gaseosa de 355ml marca Paso de los toros.`);
// // bebidas con alcohol
// const budweis = new Producto(21, "BUDWEISER", "bcalc", 260, `Cerveza en lata marca Budweiser.`);
// const heineken = new Producto(22, "HEINEKEN", "bcalc", 350, `Cerveza en lata marca Heineken.`);
// const corona = new Producto(23, "CORONA", "bcalc", 260, `Cerveza en lata marca Corona.`);
// const brahma = new Producto(24, "BRAHMA", "bcalc", 250, `Cerveza en lata marca Brahma.`);
// // cupon de descuento
// const cupon = "A34B2J6UI";


// //********* Variables *********//

// const allMenu = [neuquen, cordoba, mendoza, misiones,
//     chaco, salta, jujuy, tucuman,
//     chubut, corrientes, papasComunes, papasCheddar,
//     chickenDice, OnionRing, caesar, reisol,
//     coca, cocaZero, agua, pasoToros, 
//     budweis, heineken, corona, brahma
//     ];

// const burguers = [neuquen, cordoba, mendoza, misiones,
//     chaco, salta, jujuy, tucuman,
//     chubut, corrientes];
    
// const salad = [caesar, reisol];
    
// const extras = [papasComunes, papasCheddar,
//     chickenDice, OnionRing];
    
// const bsalc = [coca, cocaZero, agua, pasoToros];
    
// const bcalc = [budweis, heineken, corona, brahma];
    
// let carrito = [];


// let customerOrder;
// let quantity;
// let product;

// if (document.readyState == "loading"){
//     document.addEventListener("DOMContentLoaded", ready);
// }else{
//     ready();
// }

// function ready() {
//     // Devuelve todos los botones
//     let addItemBtn = document.getElementsByClassName("plus");
//     for (let i = 0; i < addItemBtn.length; i++) {
//         let button = addItemBtn[i];
//         button.addEventListener("click", addToCartBtn);
//     }
//     // Devuelve las X creadas de item en carrito
//     let deleteItem = document.getElementsByClassName("cart_item_remove");
//     for (let i = 0; i < deleteItem.length; i++) {
//         let button = deleteItem[i];
//         console.log(button);
//         button.addEventListener("click", removeCartItem);
//     }
// }

// function addToCartBtn(e){
//     let button = e.target
//     let shopItem = button.parentElement;
//     let menuInfo = shopItem.children[1];
//     // Devuelve el texto y numero del div al añadirlo
//     let title = menuInfo.getElementsByClassName("menu_title")[0].innerText;
//     let price = menuInfo.getElementsByClassName("delivery_price")[0].innerText;
//     addItemToCart(title, price);
//     totalValue();
// }

// function addItemToCart(title, price){
//     let cartRow = document.createElement('li');
//     let cartContainer = document.getElementsByClassName("cart__ul");
//     // let cartItemNames = cartItem.getElementsByClassName("cart_item_value");
//     // let cartItemQt = cartItem.getElementsByClassName("cart_item_quantity");
//     // for (let i = 0; i < cartContainer.length; i++) {
//     //     if (cartItemNames[i].innerText == title) {
//     //         cartItemQt++;
//     //         return;
//     //     }
//     // }
//     let cartRowContent = `                
//         <li class="cart_item">
//             <div class="cart_item_quantity">1x</div>
//             <div class="cart_item_description">${title}</div>
//             <div class="cart_item_value">${price}</div>
//             <div class="cart_item_remove"><i class="fa-solid fa-xmark"></i></div>
//         </li>
//     `
//     // Crea columnas en el carrito
//     cartRow.innerHTML = cartRowContent;
//     cartContainer.append(cartRow);
//     // Descrea la columna del carrito
//     cartRow.getElementsByClassName("cart_item_remove")[0].addEventListener("click", removeCartItem);
//     updateCartTotal();
// }

// function totalValue(){
//     // Devuelve los List Items
//     let item = document.getElementsByClassName("cart_item");
//     let total = 0;
//     for (let i = 0; i < item.length; i++) {
//         let order = item[i];
//         // console.log(order);
//         let itemPrice = parseInt(order.getElementsByClassName("cart_item_value")[0].innerText.replace("$", ""));
//         // console.log(itemPrice);
//         total += itemPrice;
//     }
//     document.getElementsByClassName("price_subtotal")[0].innerText = "$" + total;
//     document.getElementsByClassName("price_total")[0].innerText = "$" + total;
// }

// function removeCartItem(e){
//     let buttonClicked = e.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal()
// }

// function updateCartTotal(){
//     // Devuelve los List Items sumandolos entre si y aumentando total
//     let cartItemContainer = document.getElementById("cart__ul");
//     let cartItems = cartItemContainer.getElementsByClassName("cart_item");
//     let total = 0;
//     for (let i = 0; i < cartItems.length; i++) {
//         let  cartItem = cartItems[i];
//         let cartPrice = cartItem.getElementsByClassName("cart_item_value")[0];
//         let price = parseInt(cartPrice.innerText.replace("$", ""))
//         total += price;
//     }
//     document.getElementsByClassName("price_total")[0].innerText = "$" + total;
//     document.getElementsByClassName("price_subtotal")[0].innerText = "$" + total;
// }

// function checkCart(){
//     // let itemList = document.getElementsByClassName('cart__ul');
//     let items = document.getElementsByClassName('cart_item');
//     for (let i = 0; i < items.length; i++) {
//         let prod = items[i];
//         console.log(prod);
//         if (prod != null) {
//             console.log("No esta vacio");
//         }else{
//             console.log("Carrito vacio")
//         }
//     }
// }

// function appearSumbit(){
//     let item = document.getElementsByClassName("cart_item");
//     // let quantity = document.getElementsByClassName("orderQty");
//     // let itemContainer = document.getElementsByClassName("orderCart__container");
//     let button = document.getElementsByClassName("orderCart__container_orderbtn");
//     if (item != null) {
//         button[0].style.display = 'block';
//         console.log("Llegue a entrar al if");
//     }else{
//         button[0].style.display = 'none';
//         console.log("Estoy en el else")
//     }
// }