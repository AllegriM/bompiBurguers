// Variables

// ========================================================//
//*********************** Clases **************************//
// ========================================================//


// 0) Creacion de clase Producto con info de card

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
}

// 1) Traigo datos de un data.json para traer info de la card.

async function getInfoProducts(){
    try{
        const result = await fetch ("/data.json");
        const data  = await result.json();
        crearProducto(data);
        
        callEventListeners();
    }
    catch (error){
        console.log(error);
    }
}



// 3) Crea un producto por cada producto del data.json

function crearProducto(prodData) {
    prodData.forEach(el => {
        let newProd = new Producto(el.id, el.name, el.type, el.img, el.price, el.desc);
        renderData(newProd)
    });
}


// 4) Funcion que renderiza los productos en el HTML.

function renderData(prod) {
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
    itemsList[0].append(item);
}
getInfoProducts()


// 5) Declaracion de variables post creado de productos

// Nav Bar

let cartQty = document.querySelector('.cartQuantity');

// Card Menu

let addBtn = document.getElementsByClassName('plus');
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

let itemsCart = localStorage.getItem("cart");

//********** Filter by product type **********//

let itemCard = document.getElementsByClassName('containerBurguers-box');
let itemCards = document.getElementsByClassName('containerBurguers');
let btnFilter = document.getElementsByClassName('filter_cat');

//***********  Filter by texting *************//

let searchBar = document.querySelector('.filter__input_title');


//***********  Filter by price type *************//

let btnPrice = document.querySelectorAll('.filter_price');

// ========================================================//
//*****  Agregado y quitado de productos al carrito *******//
// ========================================================//

// 1) Funcion que contiene todos los Event listeners
// Event Listeners 

// Cuando cargue el DOM actualiza si hay items en el LS o esta vacio y renderiza.-
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('cart')) || [];
    addHTMLCart();
})

function callEventListeners(){

    // * Obtiene el precio de la card y devuelve la funcion filterByPrice-
    for (let i = 0; i < btnPrice.length; i++) {
        let btnElement = btnPrice[i];
        // Devuelve valor del atributo
        btnElement.addEventListener('click', filterByPrice)
    }

    // * Obtiene lo ingresado en el input y devuelve la funcion filterByText-
    searchBar.addEventListener('keyup', filterByText);

    // * Al apretar el boton + en la card, devuelve la funcion addProduct-
    for (let i = 0; i < addBtn.length; i++) {
        let addButton = addBtn[i];
        addButton.addEventListener("click", addProduct);
    }
    
    // * Al apretar el boton - en el carrito, devuelve la funcion removeItem-
    cartList.addEventListener('click', removeItem);

    // * Al apretar el boton submit 1)vacia carrito 2)renderiza 3)aparece alert-
    submitBtn.addEventListener('click', (e) =>{
        carrito = JSON.parse(localStorage.getItem('cart'))
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
                icon: "success"
            });
        }
    })
}

// ========================================================//
//*******************  Funciones **************************//
// ========================================================//

function addProduct(e) {
    let plusBtn = document.querySelectorAll('.plus')
    if (e.target.classList.contains('plus')){
        const productSelected = e.target.parentElement;
        getProductInfo(productSelected);
        addModalItem();
    }else if (e.target.classList.contains('plus__liner')){
        const productSelected = e.target.parentElement.parentElement;
        getProductInfo(productSelected);
        addModalItem();
    }
}

function removeItem(e) {
    if (e.target.classList.contains('cart_item_remove')) {
        const productId = e.target.getAttribute('data-remove');
        carrito = carrito.filter(product => product.id != productId);
        addHTMLCart();
        removeModalItem();
    }else if (e.target.classList.contains('fa-xmark')){
        const productId = e.target.parentElement.getAttribute('data-remove');
        carrito = carrito.filter(product => product.id != productId);
        addHTMLCart();
        removeModalItem();
    }
}


// Obtengo la info de la card producto y agrego al carrito //
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

// Renderizado de carrito //
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

// Cuando compro VACIA el carrito //
function purchaseCart() {
    carrito = [];
}

// Limpia el HTML //
function cleanHTML() {
    cartList.innerHTML = '';
}

// Guarda los items en el LS //
function saveLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(carrito));
}

// Actualiza los items en el icono del carrito //
function itemIconCart() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let valor = localStorage.getItem(key);
        const itemCart = JSON.parse(valor).length;
        if (itemCart === 0) {
            cartQty.textContent = 0;
            qtySubmit.textContent = "(" + 0 + ")";
        }else{
            cartQty.textContent = itemCart;
            qtySubmit.textContent = `(${itemCart})`;
        }
    }
}

// Actualiza el valor total del carrito //
function totalGeneral() {
    let itemValues = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let valor = localStorage.getItem(key);
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
