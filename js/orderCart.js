// Agregar productos al Carrito.

//*********  Clases  *********//

class Producto {
    constructor(id, name, type, price) {
        this.id = parseInt(id);
        this.name = name.toUpperCase();
        this.type = type.toUpperCase();
        this.price = parseInt(price);
        // this.stock = parseInt(stock);
    }
    cuponDescuento() {
        if (this.price > 3000) {
            let valorFinal = this.price - (this.price * 0.15);
            return valorFinal;
        } else {
            return alert("No superaste los $3000. No hay descuento esta vez")
        }
    }
}


//********* Productos *********//

// Hamburguesas
const neuquen = new Producto(1, "NEUQUEN", "HAMBURGUESA", 780);
const cordoba = new Producto(2, "CORDOBA", "HAMBURGUESA", 750);
const mendoza = new Producto(3, "MENDOZA", "HAMBURGUESA", 800);
const santaFe = new Producto(4, "SANTA FE", "HAMBURGUESA", 780);
const laRioja = new Producto(5, "LA RIOJA", "HAMBURGUESA", 770);
const santaCruz = new Producto(6, "SANTA CRUZ", "HAMBURGUESA", 800);
const jujuy = new Producto(7, "JUJY", "HAMBURGUESA", 750, 7);
const sanJuan = new Producto(8, "SAN JUAN", "HAMBURGUESA", 770);
const buenosAires = new Producto(9, "BUENOS AIRES", "HAMBURGUESA", 850);
const corrientes = new Producto(10, "CORRIENTES", "HAMBURGUESA", 830);
// Extras
const papasComunes = new Producto(11, "PAPAS COMUNES", "EXTRAS", 600);
const papasCheddar = new Producto(12, "PAPAS CON CHEDDAR", "EXTRAS", 680);
const chickenDice = new Producto(13, "CHICKEN DICES", "EXTRAS", 700);
const OnionRing = new Producto(14, "ONION RINGS", "EXTRAS", 650);
// Ensaladas
const caesar = new Producto(15, "CAESAR", "ENSALADAS", 700);
const reySol = new Producto(16, "REY SOL", "ENSALADAS", 650);
// bebidas sin alcohol
const coca = new Producto(17, "COCA", "BEBIDAS S/ALC", 200);
const cocaZero = new Producto(18, "COCA ZERO", "BEBIDAS S/ALC", 200);
const agua = new Producto(19, "AGUA", "BEBIDAS S/ALC", 150);
const pasoToros = new Producto(20, "TOROS POMELO", "BEBIDAS S/ALC", 200);
// bebidas con alcohol
const budweis = new Producto(21, "BUDWEISER", "BEBIDAS C/ALC", 260);
const heineken = new Producto(22, "HEINEKEN", "BEBIDAS C/ALC", 350);
const corona = new Producto(23, "CORONA", "BEBIDAS C/ALC", 260);
const brahma = new Producto(24, "BRAHMA", "BEBIDAS C/ALC", 250);
// cupon de descuento
const cupon = "A34B2J6UI";


//********* Variables *********//

let orderCart = [];
//============================== 0 ===============================================  1  ============================== 2 =========================  3  =============================  4  ================== // 
const orderStock = [neuquen, cordoba, mendoza, santaFe,
    laRioja, santaCruz, jujuy, sanJuan,
    buenosAires, corrientes, papasComunes, papasCheddar,
    chickenDice, OnionRing, caesar, reySol,
    coca, cocaZero, agua, pasoToros, budweis, heineken, corona, brahma];

let customerOrder;
let quantity;
let product;

//********* Funciones *********//

const addHamburguer = () => {
    customerOrder = parseInt(prompt(`Bienvenido a Bompi Burger! Seleccione la hamburguesa que le gustaria comprar: \n\n1: ${orderStock[0].name} \n2: ${orderStock[1].name} \n3: ${orderStock[2].name} \n4: ${orderStock[3].name}`));
    while (customerOrder >= 5 || customerOrder <= 0 || isNaN(customerOrder)) {
        alert("Escoja un valor correcto de la lista anterior")
        addHamburguer();
    }
    nombreProducto = orderStock[customerOrder - 1].name;
    return nombreProducto;
    // orderCart.push(nuevoProducto);
    // return nuevoProducto;
}

const addQuantity = () => {
    product = addHamburguer();
    quantity = parseInt(prompt(`Cuantas unidades le gustaria comprar?`));
    while (quantity < 0 || isNaN(quantity)) {
        alert("Cantidad invalidad, seleccione una cantidad valida!");
        quantity = parseInt(prompt(`Cuantas unidades le gustaria comprar?`));
    }
    let subTotalProducto = orderStock[customerOrder - 1].price * quantity;
    orderCart.push({ product, quantity, subTotalProducto });
    if (confirm`!Añadido correctamente! Queres agregar otro producto?\n\n En caso que quiera terminar de comprar y ver su factura aprete 'Cancel'` === true) {
        addQuantity();
    } else {
        alert("Ahora podras ver tus productos añadidos al carrito en consola escribiendo: 'orderCart'");
    }
}

// addQuantity();

const addExtra = () => {
    customerOrder = parseInt(prompt(`Bienvenido a Bompi Burger! Seleccione la hamburguesa que le gustaria consumir: \n\n\n1: ${orderStock[0].name} \n2: ${orderStock[1].name} \n3: ${orderStock[2].name} \n4: ${orderStock[3].name}`));
    if (customerOrder >= 5 || customerOrder <= 0) {
        alert("Escoja un valor correcto de la lista anterior")
        addHamburguer();
    }
}


//************************** Filter categories ***********************//


// let searchMenu = prompt("Que producto te gustaria ver del menu?? \n OPTIONS: \n HAMBURGUESA \n EXTRAS \n ENSALADAS \n BEBIDAS S/ALC \n BEBIDAS C/ALC ").toUpperCase();
// while (searchMenu != "HAMBURGUESA" &&  searchMenu != "EXTRAS" && searchMenu != "ENSALADAS" && searchMenu != "BEBIDAS S/ALC" && searchMenu != "BEBIDAS C/ALC" ){
//     alert("Opcion incorrecta, seleccione una opcion valida")
//     searchMenu = prompt("Que producto te gustaria ver del menu?? \n OPTIONS: \n HAMBURGUESA \n EXTRAS \n ENSALADAS \n BEBIDAS S/ALC \n BEBIDAS C/ALC ").toUpperCase();
// }
// console.log(searchMenu)
// const filterProd = orderStock.filter( (prod) => prod.type.includes(searchMenu));
// console.log(filterProd);


//************************** Button to add to cart ***********************//

    // let orderItem = document.createElement("div");
    // orderItem.innerHTML = "Soy un ITEM!";
    // document.cartContainer.append(orderItem)

if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

function ready() {
    let addItemBtn = document.getElementsByClassName("plus");
    for (let i = 0; i < addItemBtn.length; i++) {
        let button = addItemBtn[i];   
        button.addEventListener("click", addToCartBtn)
    }
    let deleteItem = document.getElementsByClassName("cart_item_remove");
    for (let i = 0; i < deleteItem.length; i++) {
        let button = deleteItem[i];
        button.addEventListener("click", removeCartItem)
    }
}

function addToCartBtn(event){
    let button = event.target
    let shopItem = button.parentElement;
    let menuInfo = shopItem.children[1];
    let title = menuInfo.getElementsByClassName("menu_title")[0].innerText;
    let price = menuInfo.getElementsByClassName("delivery_price")[0].innerText;
    addItemToCart(title, price);
    totalValue();
}

function addItemToCart(title, price){
    let cartRow = document.createElement('li');
    let cartContainer = document.getElementById("cart__ul");
    // let cartItemNames = cartItem.getElementsByClassName("cart_item_value");
    // let cartItemQt = cartItem.getElementsByClassName("cart_item_quantity");
    // for (let i = 0; i < cartContainer.length; i++) {
    //     if (cartItemNames[i].innerText == title) {
    //         cartItemQt++;
    //         return;
    //     }
    // }
    let cartRowContent = `                            
        <li class="cart_item">
            <div class="cart_item_quantity">1x</div>
            <div class="cart_item_description">${title}</div>
            <div class="cart_item_value">${price}</div>
            <div class="cart_item_remove"><i class="fa-solid fa-xmark"></i></div>
        </li>
    `
    cartRow.innerHTML = cartRowContent
    cartContainer.append(cartRow);
    cartRow.getElementsByClassName("cart_item_remove")[0].addEventListener("click", removeCartItem);
    appearSumbit();
}

function totalValue(){
    // console.log(allItems)
    let item = document.getElementsByClassName("cart_item");
    // console.log(item)
    let total = 0;
    for (let i = 0; i < item.length; i++) {
        let order = item[i];
        // console.log(order);
        let itemPrice = parseInt(order.getElementsByClassName("cart_item_value")[0].innerText.replace("$", ""));
        // console.log(itemPrice);
        total += itemPrice;
    }
    document.getElementsByClassName("price_subtotal")[0].innerText = "$" + total;
    document.getElementsByClassName("price_total")[0].innerText = "$" + total;
}

function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

function updateCartTotal(){
    let cartItemContainer = document.getElementById("cart__ul");
    let cartItems = cartItemContainer.getElementsByClassName("cart_item");
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let  cartItem = cartItems[i];
        let cartPrice = cartItem.getElementsByClassName("cart_item_value")[0];
        let price = parseInt(cartPrice.innerText.replace("$", ""))
        total += price;
    }
    document.getElementsByClassName("price_total")[0].innerText = "$" + total;
    document.getElementsByClassName("price_subtotal")[0].innerText = "$" + total;
}

// Aparezca realizar pedido //

function appearSumbit(){
    let item = document.getElementsByClassName("cart_item");
    // let quantity = document.getElementsByClassName("orderQty");
    let itemContainer = document.getElementsByClassName("orderCart__container");
    for (let i = 0; i < item.length; i++) {
        let prod = item[i];
        console.log(prod);
        if (prod != null) {
            console.log("Llegue a entrar al if");
            let buttonSection = document.createElement('button');
            buttonSection.classList.add("orderCart__container_orderbtn");
            let buttonSectionContent = `
                <div class="orderCart__container-orderbtn_title">
                    <p class="">REALIZAR PEDIDO</p>
                    <span class="orderQty"></span>
                </div>
                <div class="orderCart__container-orderbtn_price">
                    <span></span>
                </div>
            `
            buttonSection.innerHTML = buttonSectionContent;
            itemContainer.append(buttonSection);
        }else{
            console.log("Estoy en el else")
        }
    }
}