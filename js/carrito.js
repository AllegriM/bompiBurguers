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
const neuquen = new Producto(1, "NEUQUEN", "hamburguesa",`C:\Users\Marco\Desktop\CoderHouse\Bompi Burguer\img\menu\neuquen.png`,780, `Smoked cheese, arugula, mint, pine mushroom pickle & merken
mayonnese.`);
const cordoba = new Producto(2, "CORDOBA", "hamburguesa",` `,750, `Smoked cheese, arugula, mint, pine mushroom pickle & merken
mayonnese.`);
const mendoza = new Producto(3, "MENDOZA", "hamburguesa",` `,800, `Double hamburguer, double cheddar, pickled cucumbers,
onion, capuccine lettuce & special sauce.`);
const misiones = new Producto(4, "MISIONES", "hamburguesa",` `,780, `Blue cheese, caramelized onion, arugula & eggplant
mayonnaise.`);
const chaco = new Producto(5, "CHACO", "hamburguesa",` `,770, `Danbo cheese, tomatoe, cappucine lettuce, pickled
cucumbers, white onion & mostaza.`);
const salta = new Producto(6, "SALTA", "hamburguesa",` `,800, `Danbo cheese, grilled egg, cooked ham, grilled onion &
olvie mayoneese.`);
const jujuy = new Producto(7, "JUJUY", "hamburguesa",` `,750, `Pategras cheese, fresh tomatoes, pickled jalapeno &
guacamole.`);
const tucuman = new Producto(8, "TUCUMAN", "hamburguesa",` `,770, `Pategras cheese, marinated tomatoes, capuccine lettuce &
alioli`);
const chubut = new Producto(9, "CHUBUT", "hamburguesa",` `,850, `Cheddar cheese, smoked bacon, pickled cucumbers & ketchup.`);
const corrientes = new Producto(10, "CORRIENTES", "hamburguesa",` `,830, `Fried chicken breast, smoked bacon, capuccine lettuce, &
tartar sauce.`);
// Extras
const papasComunes = new Producto(11, "PAPAS COMUNES", "extras",` `,600, `The best friend of your burguer. The classic ones.`);
const papasCheddar = new Producto(12, "PAPAS CHEDDAR", "extras",` `,680, `Fries with tempero, cheddar cheese, bacon & green onion.`);
const chickenDice = new Producto(13, "CHICKEN DICES", "extras",` `,700, `Marinated chicken in 11 spices & some mayonnese.`);
const OnionRing = new Producto(14, "ONION RINGS", "extras",` `,650, `Onion rings with some white barbacue. Or the sauce you.`);
// Ensaladas
const caesar = new Producto(15, "CAESAR", "ensaladas",` `,700, `Capuccine lettuce, smoked bacon, croutones, parmesano
cheese, chicken breast, & our special Caesar sauce.`);
const reisol = new Producto(16, "REISOL", "ensaladas",` `,650, `Green mix, smoked cheese, cheddar cheese, boiled egg,
guacamole, roasted tomatoes & bell pepper sauce.`);
// bebidas sin alcohol
const coca = new Producto(17, "COCA", "bsalc",` `,200, `Gaseosa de 355ml marca Coca Cola.`);
const cocaZero = new Producto(18, "COCA ZERO", "bsalc",` `,200, `Gaseosa de 355ml marca Coca Cola.`);
const agua = new Producto(19, "AGUA", "bsalc",`C:\Users\Marco\Desktop\CoderHouse\Bompi Burguer\img\menu\agua.png`,150, `Botella de 500ml de agua mineral.`);
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
                        <div class="plus__liner"></div>
                        <div class="plus__linel"></div>
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
let menuItem = document.getElementsByClassName('containerBurguers-box');
let cartContainer = document.getElementsByClassName('orderCart__container');

// Modal

let submitBtn = document.querySelector('.orderCart__container_orderbtn');

// Carrito 
let cartList = document.querySelector('#cart__ul');
let cartItem = document.getElementsByClassName('cart_item');
let subtotal = document.getElementsByClassName('price_subtotal');
let total = document.getElementsByClassName('price_total');
let delBtn = document.querySelectorAll('.cart_item_remove');

let carrito = [];

// Event Listeners 

callEventListeners()
function callEventListeners(){
    
    // Get add buttons and apply addProduct()
    for (let i = 0; i < plusBtn.length; i++) {
        let addButton = plusBtn[i];
        addButton.addEventListener("click", addProduct);
    }
    
    cartList.addEventListener('click', removeItem);

    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('cart')) || [];
        addHTMLCart();
    })

    submitBtn.addEventListener('click', (e) =>{
        carrito = JSON.parse(localStorage.getItem('cart'))
        console.log(carrito);
        if (carrito === null) {
            alert('No hay productos en la lista')
        }else{
            alert("Gracias por su compra!");
            e.preventDefault();
            carrito = [];
            localStorage.removeItem('cart');
            cleanHTML();
        }
    })
}
// Functions

function addProduct(e) {
    if (e.target.classList.contains('plus')) {
        const productSelected = e.target.parentElement;
        getProductInfo(productSelected);
    }
}

function removeItem(e) {
    if (e.target.classList.contains('cart_item_remove')) {
        
        const productId = e.target.getAttribute('data-remove');
        console.log(productId)
        carrito = carrito.filter(product => product.id != productId);
        console.log(carrito);
        addHTMLCart();
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
    
    cleanHTML()

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
}

function purchaseCart() {
    
    carrito = [];
}

function cleanHTML() {
    
    cartList.innerHTML = '';

    total.innerHTML = totalGeneral();
}

function totalGeneral() {
    for (let i = 0; i < cartList.length; i++) {
        const item = cartList[i];
        total += item.price;
        console.log(item)
    }
}

function saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(carrito));
}


let itemsCart = localStorage.getItem("cart");
// console.log(itemsCart)
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    // console.log(key);
    let valor = localStorage.getItem(key);
    // console.log(valor);
    const itemCart = JSON.parse(valor).length;
    console.log(itemCart);
    if (itemCart == 0) {
        console.log("No hay items");
        
    }else{
        console.log("Hay items");
    }
    // for (let i = 0; i < itemCart.length; i++) {
    //     const el = itemCart[i];
    //     let itemId = el.id;
    //     // console.log(itemId);
    // }
}

