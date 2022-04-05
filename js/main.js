// HAMBURGUERS SCRIPT!!!!


const precioHamburguesa = 800;
const precioPapas  = 500;
const combo = 1200;
let order = parseInt(prompt("Que te gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
console.log(order);
let quantity;

// Mientras el valor sea null/Not a Number/ mayor a 4 y menor o igual a 0 volver a preguntar.

const pedidoMenu = () =>{
    let subtotal0 = 0;
    let subtotal1 = 0;
    let subtotal2= 0;
    while (order == null || isNaN(order) || order >= 5 || order <= 0){
        alert("Esa opcion no es valida!")
        order = (prompt("Que te gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
        if (order == 1){
            quantity = (prompt("Cuantas hamburguesas le gustaria pedir?"));
            alert(`Pidio ${quantity} hamburguesa/s, su costo es de $${quantity * precioHamburguesa}`);
            subtotal0 += (quantity * precioHamburguesa);
        }else if (order == 2){
            quantity = (prompt("Cuantas papas le gustaria pedir?"));
            alert(`Pidio ${quantity} papa/s, su costo es de $${quantity * precioPapas}`);
            subtotal1 += (quantity * precioPapas);
        }else if (order == 3){
            quantity = (prompt("Cuantos combos le gustaria pedir?"));
            alert(`Eligio ${quantity} combo/s, su costo es de $${quantity * (precioHamburguesa + precioPapas)}`);
            subtotal2 += (quantity * combo);
            // order = (prompt("Que mas le gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
        }else{
            alert("Gracias!! Vuelva pronto!!!");
        }
    }
    let total = subtotal0 + subtotal1 + subtotal2;
    alert(`Gastos: \nHamburguesas: $${subtotal0}. \nPapas: $${subtotal1}.  \nCombos: $${subtotal2}. \n\nTotal: $${total}.`);
}

console.log(pedidoMenu());

// const buyBurguer = () =>{

// }