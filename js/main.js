// HAMBURGUERS SCRIPT!!!!


const precioHamburguesa = 800;
const precioPapas = 500;
const combo = 1200;
// Mientras el valor sea null/Not a Number/ mayor a 4 y menor o igual a 0 volver a preguntar

const reorder = () =>{
    let reorder = parseInt(prompt("Le gustaria pedir algo mas? \n1:Si \n2:No"));
    while (reorder === null || reorder === NaN || reorder >= 3 || reorder <= 0) {
        alert("Esa opcion no es valida!");
        reorder = parseInt(prompt("Le gustaria volver a pedir? \n1:Si \n2:No"));
    }
    if(reorder == 1){
        pedidoMenu();
    }else if (reorder == 2) {
        return alert("No hay problema!! Vuelva pronto!!! \n\n Esta es su factura:");
    }else{
        alert("Opcion no valida! Las unicas respuestas validas son numericas: \n1:Si \n2:No ");
    }
}

const pedidoMenu = () => {
    let order = parseInt(prompt("Que te gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
    console.log(order);
    let quantity;
    let subtotal0 = 0;
    let subtotal1 = 0;
    let subtotal2 = 0;
    while (order === null || order === NaN || order >= 5 || order <= 0) {
        alert("Esa opcion no es valida!")
        order = parseInt(prompt("Que te gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
    }
    if (order == 1) {
        quantity = parseInt(prompt("Cuantas hamburguesas le gustaria pedir?"));
        alert(`Pidio ${quantity} hamburguesa/s, su costo es de $${quantity * precioHamburguesa}`);
        subtotal0 += (quantity * precioHamburguesa);
    } else if (order == 2) {
        quantity = parseInt(prompt("Cuantas papas le gustaria pedir?"));
        alert(`Pidio ${quantity} papa/s, su costo es de $${quantity * precioPapas}`);
        subtotal1 += (quantity * precioPapas);
    } else if (order == 3) {
        quantity = parseInt(prompt("Cuantos combos le gustaria pedir?"));
        alert(`Eligio ${quantity} combo/s, su costo es de $${quantity * (precioHamburguesa + precioPapas)}`);
        subtotal2 += (quantity * combo);
        // order = (prompt("Que mas le gustaria pedir? \n1:Hamburguesa \n2:Papas \n3:Ambos \n4:Salir"));
    } else if (order == 4){
        return alert("Gracias!! Vuelva pronto!!!");;
    } else {
        alert ("");
    } 
    reorder();
    let total = subtotal0 + subtotal1 + subtotal2;
    alert(`Total: \nHamburguesas: $${subtotal0}. \nPapas: $${subtotal1}.  \nCombos: $${subtotal2}. \n\nTotal: $${total}.`);
}


console.log(pedidoMenu());
// const buyBurguer = () =>{

// }