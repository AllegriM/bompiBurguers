// Filter JS


// let burgerContainer = document.getElementById('hamburguer');
// let extrasContainer = document.getElementById('extras');
// let saladContainer = document.getElementById('salads');
// let bebsalcContainer = document.getElementById('bebsalc');
// let bebcalcContainer = document.getElementById('bebcalc');

let menuItem = document.getElementsByClassName('delivery__menuOrders');
console.log(menuItem);
let btnFilter = document.getElementsByClassName('filter_cat');
for (let i = 0; i < btnFilter.length; i++) {
    let prod = btnFilter[i];
    prod.addEventListener('click', (e)=>{
        e.preventDefault();
        const filter = e.target.dataset.filter;

        Array.from(menuItem).forEach((product)=> {
            if (filter == "all"){
                product.style.display = 'block';
            }else if (product.classList.contains(filter)) {
                product.style.display = 'block';
            }else{
                product.style.display = 'none';
            }
            console.log(product);
        });
    })
}


//      // Botones //
// let btnBurguer = document.getElementById('Aburguer');
// let btnExtras = document.getElementById('Aextras');
// let btnSalad = document.getElementById('Asalad');
// let btnBsalc = document.getElementById('Absalc');
// let btnBcalc = document.getElementById('Abcalc');

// btnBurguer.addEventListener('click', (e) => {
//     e.preventDefault
// // adding style when clicked
//     btnBurguer.classList.add('active');
//     btnExtras.classList.remove('active');
//     btnSalad.classList.remove('active');
//     btnBsalc.classList.remove('active');
//     btnBcalc.classList.remove('active');

//     let erase = extrasContainer.style.display  = 'none';
//     saladContainer.style.display = 'none';
//     bebsalcContainer.style.display = 'none';
//     bebcalcContainer.style.display = 'none';
// })



// btnExtras.addEventListener('click', (e) => {
//     e.preventDefault
//     //adding style when clicked 
//     btnBurguer.classList.remove('active');
//     btnExtras.classList.add('active');
//     btnSalad.classList.remove('active');
//     btnBsalc.classList.remove('active');
//     btnBcalc.classList.remove('active');

//     let erase = burgerContainer.style.display  = 'none';
//     saladContainer.style.display = 'none';
//     bebsalcContainer.style.display = 'none';
//     bebcalcContainer.style.display = 'none';
// })

// btnSalad.addEventListener('click', (e) => {
//     e.preventDefault

//     //adding style when clicked 
//     btnBurguer.classList.remove('active');
//     btnExtras.classList.remove('active');
//     btnSalad.classList.add('active');
//     btnBsalc.classList.remove('active');
//     btnBcalc.classList.remove('active');

//     let erase = extrasContainer.style.display  = 'none';
//     burgerContainer.style.display = 'none';
//     bebsalcContainer.style.display = 'none';
//     bebcalcContainer.style.display = 'none';
// })

// btnBsalc.addEventListener('click', (e) => {
//     e.preventDefault
// // adding style when clicked
//     btnBurguer.classList.remove('active');
//     btnExtras.classList.remove('active');
//     btnSalad.classList.remove('active');
//     btnBsalc.classList.add('active');
//     btnBcalc.classList.remove('active');


//     let erase = extrasContainer.style.display  = 'none';
//     saladContainer.style.display = 'none';
//     burgerContainer.style.display = 'none';
//     bebcalcContainer.style.display = 'none';
// })
// btnBcalc.addEventListener('click', (e) => {
//     e.preventDefault
//     //adding style when clicked 
//     btnBurguer.classList.remove('active');
//     btnExtras.classList.remove('active');
//     btnSalad.classList.remove('active');
//     btnBsalc.classList.remove('active');
//     btnBcalc.classList.add('active');

//     let erase = extrasContainer.style.display  = 'none';
//     saladContainer.style.display = 'none';
//     bebsalcContainer.style.display = 'none';
//     burgerContainer.style.display = 'none';
// })