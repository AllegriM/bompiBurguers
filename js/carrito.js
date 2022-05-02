// Agregar productos al Carrito.

//*********  Clases  *********//

class Producto {
    constructor(id, name, type, img, price, desc) {
        this.id = parseInt(id);
        this.name = name.toLowerCase();
        this.type = type;
        this.img = img;
        this.price = parseInt(price);
        this.desc = desc
        this.cantidad = 1;
        this.subtotal = 0;
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
const neuquen = new Producto(1, "NEUQUEN", "hamburguesa",`C:\Users\Marco\Desktop\CoderHouse\Bompi Burguer\img\menu\neuquen.png`,780, `Queso ahumado, rúcula, menta, pickle de hongos de pino y mayonesa de merken.`);
const cordoba = new Producto(2, "CORDOBA", "hamburguesa",` `,750, `Queso ahumado, guacamole, aros de cebolla, rúcula, lechuga capuchina y mostaza dulce.`);
const mendoza = new Producto(3, "MENDOZA", "hamburguesa",` `,800, `Doble hamburguesa, doble cheddar, pepinos en pickle, cebolla, lechuga capuchina y salsa especial.`);
const misiones = new Producto(4, "MISIONES", "hamburguesa",` `,780, `Queso azul, cebolla caramelizada, rúcula y mayonesa de berenjena.`);
const chaco = new Producto(5, "CHACO", "hamburguesa",` `,770, `Queso danbo, tomate, lechuga capuchina, pepinos en pickle, cebolla blanca y mostaneza.`);
const salta = new Producto(6, "SALTA", "hamburguesa",` `,800, `Doble hamburguesa, doble cheddar, pepinos en pickle, cebolla, lechuga capuchina y mayonesa de oliva.`);
const jujuy = new Producto(7, "JUJUY", "hamburguesa",` `,750, `Queso pategrás, tomates frescos, escabeche de jalapeño y guacamole.`);
const tucuman = new Producto(8, "TUCUMAN", "hamburguesa",` `,770, `Queso pategrás, tomates marinados, lechuga capuchina y alioli.`);
const chubut = new Producto(9, "CHUBUT", "hamburguesa",` `,850, `Queso cheddar, panceta ahumada, pepinos en pickle y ketchup.`);
const corrientes = new Producto(10, "CORRIENTES", "hamburguesa",` `,830, `Sánguche de pechuga de pollo frita, panceta ahumada, lechuga capuchina y tártara.`);
// Extras
const papasComunes = new Producto(11, "PAPAS COMUNES", "extras",` `,600, `Clásico acompañamiento para tu hamburguesa.`);
const papasCheddar = new Producto(12, "PAPAS CHEDDAR", "extras",` `,680, `Papas fritas con tempero,queso cheddar, panceta y cebolla de verdeo.`);
const chickenDice = new Producto(13, "CHICKEN DICES", "extras",` `,700, `Supremas marinadas en 11 especias y mayo vieja escuela.`);
const OnionRing = new Producto(14, "ONION RINGS", "extras",` `,650, `Acompañados con Barbacoa Blanca.`);
// Ensaladas
const caesar = new Producto(15, "CAESAR", "ensaladas",` `,700, `Lechuga capuchina, panceta ahumada, croutones, queso parmesano, pechuga de pollo y nuestro aderezo Caesar.`);
const reisol = new Producto(16, "REISOL", "ensaladas",` `,650, `Mix de verdes, queso ahumado, queso cheddar, huevo duro, guacamole, tomates asados y salsa de morrón.`);
// bebidas sin alcohol
const coca = new Producto(17, "COCA", "bsalc",` `,200, `Gaseosa de 355ml marca Coca Cola.`);
const cocaZero = new Producto(18, "COCA ZERO", "bsalc",` `,200, `Gaseosa de 355ml marca Coca Cola.`);
const agua = new Producto(19, "AGUA", "bsalc",` `,150, `Botella de 500ml de agua mineral.`);
const pasoToros = new Producto(20, "TOROS POMELO", "bsalc",` `,200,`Gaseosa de 355ml marca Paso de los toros.`);
// bebidas con alcohol
const budweis = new Producto(21, "BUDWEISER", "bcalc",` `,260, `Cerveza en lata marca Budweiser.`);
const heineken = new Producto(22, "HEINEKEN", "bcalc",` `,350, `Cerveza en lata marca Heineken.`);
const corona = new Producto(23, "CORONA", "bcalc",` `,260, `Cerveza en lata marca Corona.`);
const brahma = new Producto(24, "BRAHMA", "bcalc",` `,250, `Cerveza en lata marca Brahma.`);
// cupon de descuento
const cupon = "A34B2J6UI";

const allMenu = [neuquen, cordoba, mendoza, misiones,
    chaco, salta, jujuy, tucuman,
    chubut, corrientes, papasComunes, papasCheddar,
    chickenDice, OnionRing, caesar, reisol,
    coca, cocaZero, agua, pasoToros, 
    budweis, heineken, corona, brahma
    ];

const burguers = [neuquen, cordoba, mendoza, misiones,
    chaco, salta, jujuy, tucuman,
    chubut, corrientes];

const salad = [caesar, reisol];

const extras = [papasComunes, papasCheddar,
    chickenDice, OnionRing];

const bsalc = [coca, cocaZero, agua, pasoToros];

const bcalc = [budweis, heineken, corona, brahma];


allMenu.forEach(prod => {
    let item = document.createElement('li');
    item.classList.add('containerBurguers-box');
    item.classList.add(`${prod.type}`);
    let itemsList = document.getElementsByClassName('containerBurguers');
    let itemContent = 
                `
                <div class="containerBurguers-box-item">
                    <img src="../img/menu/${(prod.name).replace(" ", "_")}.png" alt="">
                    <div class="menu_info">
                        <h4 class="menu_title">${(prod.name).toUpperCase()}</h4>
                        <p class="menu-desc">${prod.desc}</p>
                        <p class="delivery_price">$${prod.price}</p>
                    </div>

                    <div class="plus" data-id="${prod.id}">
                        <div class="plus__liner plus__liner"></div>
                        <div class="plus__linel plus__liner"></div>
                    </div>
                </div>
                `
    item.innerHTML = itemContent;
    // console.log(item);
    itemsList[0].append(item);
});


//*****************  Adding and removing items to Cart  ******************//

// Variables


// Nav Bar

let cartQty = document.querySelector('.cartQuantity');

// Card Menu
let plusBtn = document.getElementsByClassName('plus');
let menuList = document.getElementsByClassName('containerBurguers');
let menuItem = document.querySelectorAll('.containerBurguers-box-item');
let cartContainer = document.getElementsByClassName('orderCart__container');
let plusInBtn = document.querySelectorAll('.plusliner')

// Modal

let submitBtn = document.querySelector('.orderCart__container_orderbtn');

// Carrito 
let cartList = document.querySelector('#cart__ul');
let cartItem = document.getElementsByClassName('cart_item');
let subtotal = document.querySelector('.price_subtotal');
let total = document.querySelector('.price_total');
let delBtn = document.querySelectorAll('.cart_item_remove');
let qtySubmit = document.querySelector('.orderQty')
let totalSubmit = document.querySelector('.orderCart__container_orderbtn_cont_price')


let carrito = [];

// Event Listeners 

callEventListeners()
function callEventListeners(){
    
    // Get add buttons and apply addProduct()
    for (let i = 0; i < plusBtn.length; i++) {
        let addButton = plusBtn[i];
        // console.log(addButton);
        addButton.addEventListener("click", addProduct);
    }
    
    cartList.addEventListener('click', removeItem);

    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('cart')) || [];
        addHTMLCart();
    })

    submitBtn.addEventListener('click', (e) =>{
        carrito = JSON.parse(localStorage.getItem('cart'))
        // console.log(carrito);
        if (carrito === null) {
            alert('No hay productos en la lista')
        }else{
            e.preventDefault();
            carrito = [];
            localStorage.removeItem('cart');
            totalGeneral();
            itemIconCart();
            addHTMLCart();
            cleanHTML();
            swal({
                title: "Good job!",
                text: "You order was submitted!",
                icon: "success",
            });
        }
    })
}
// Functions

function addProduct(e) {
    if (e.target.classList.contains('plus')){
        const productSelected = e.target.parentElement;
        getProductInfo(productSelected);
    }else if (e.target.classList.contains('plus__liner')){
        const productSelected = e.target.parentElement.parentElement;
        getProductInfo(productSelected);;
    }
}

function removeItem(e) {
    if (e.target.classList.contains('cart_item_remove')) {
        const productId = e.target.getAttribute('data-remove');
        // console.log(productId)
        carrito = carrito.filter(product => product.id != productId);
        // console.log(carrito);
        addHTMLCart();
        removeModalItem();
    }else if (e.target.classList.contains('fa-xmark')){
        const productId = e.target.parentElement.getAttribute('data-remove');
        carrito = carrito.filter(product => product.id != productId);
        // console.log(carrito);
        addHTMLCart();
        removeModalItem();
    }
}

function getProductInfo(product){

    // Getting the card info while clicking the plus btn.
    let id = product.querySelector('.plus').getAttribute('data-id');
    let name = product.querySelector('.menu_title').textContent;
    let type = product.querySelector('.containerBurguers-box');
    let img = product.querySelector('img').src;
    let price = product.querySelector('.delivery_price').textContent.replace("$", " ");
    let cantidad = product.querySelector('.cart_item_quantity');

    // Creating a new product
    const newProduct = new Producto(id, name, type, img, price, cantidad);
    newProduct.subtotal = "$" + parseInt(newProduct.price) * newProduct.cantidad;

    // Check if a product already exists in cart
    const exists = carrito.some(product => product.id === newProduct.id);
    if (exists) {
        const products = carrito.map(product =>{
            if (product.id === newProduct.id) {
                product.cantidad++;
                product.subtotal = "$ " + parseInt(product.price * product.cantidad);
                return product;
            }else{
                return product;
            }
        })

        carrito = [];

        for (let i = 0; i < products.length; i++) {
            carrito.push(products[i]);
        }

    }else{
        carrito.push(newProduct);
    }
    addHTMLCart();
}

function addHTMLCart() {
    
    cleanHTML();

    carrito.forEach(product => {
        let row = document.createElement('li');
        row.classList.add('cart_item');
        let rowContent = `
                        <div class="cart_item_img"><img class="cart_item_img_detail" src="../img/menu/${(product.name).replace(" ", "_")}.png" alt=""></div>
                        <div class="cart_item_description">${product.name.toUpperCase()}</div>
                        <div class="cart_item_quantity">${product.cantidad}</div>
                        <div class="cart_item_value">$${product.price}</div>
                        <div class="cart_item_subtotal">${product.subtotal}</div>
                        <div class="cart_item_remove" data-remove="${product.id}"><i class="fa-solid fa-xmark"></i></div>
                        `
        row.innerHTML = rowContent;
        cartList.appendChild(row);
    });
    saveLocalStorage();
    itemIconCart();
    totalGeneral();
}

function purchaseCart() {
    
    carrito = [];
}

function cleanHTML() {
    
    cartList.innerHTML = '';
}

function saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(carrito));
}


let itemsCart = localStorage.getItem("cart");
// console.log(itemsCart)
function itemIconCart() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // console.log(key);
        let valor = localStorage.getItem(key);
        // console.log(valor);
        const itemCart = JSON.parse(valor).length;
        // console.log(itemCart);
        if (itemCart === 0) {
            cartQty.textContent = 0;
            qtySubmit.textContent = "(" + 0 + ")";
        }else{
            cartQty.textContent = itemCart;
            qtySubmit.textContent = `(${itemCart})`;
        }
    }
}

function totalGeneral() {
    let itemValues = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // console.log(key);
        let valor = localStorage.getItem(key);
        // console.log(valor);
        const itemCart = JSON.parse(valor);
        for (let i = 0; i < itemCart.length; i++) {
            const itemPrice = itemCart[i];
            let indPrice = Number(itemPrice.subtotal.replace("$", ""));
            itemValues += indPrice;
        }
    }
    subtotal.textContent = "$" + itemValues;
    total.textContent = "$" + itemValues;
    totalSubmit.textContent = `TOTAL($${itemValues})`;
}