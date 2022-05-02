// Filter JS //

//***********   Filter by button type *************//


// Variables

let itemCard = document.getElementsByClassName('containerBurguers-box');
let itemCards = document.getElementsByClassName('containerBurguers');
let btnFilter = document.getElementsByClassName('filter_cat');

for (let i = 0; i < btnFilter.length; i++) {
    let prod = btnFilter[i];
    prod.addEventListener('click', (e)=>{
        e.preventDefault();
        const dataType = e.target.dataset.filter;
        Array.from(itemCard).forEach((product)=> {
            console.log(product);
            if (dataType == "all"){
                product.style.display = 'block';
            }else if (product.classList.contains(dataType)) {
                product.style.display = 'block';
            }else{
                product.style.display = 'none';
            }
        });
    })
}

//***********  Filter by price type *************//

// Variables

let btnPrice = document.querySelectorAll('.filter_price');
let cardValue = document.querySelectorAll('.delivery_price');

for (let i = 0; i < btnPrice.length; i++) {
    let btnElement = btnPrice[i];
    // Devuelve valor del atributo
    btnElement.addEventListener('click', (e)=>{
        e.preventDefault();
        let dataValue = e.target.dataset.value;
        for (let i = 0; i < cardValue.length; i++) {
            const el = cardValue[i];
            let card = el.parentElement.parentElement.parentElement;
            let value = el.innerText.replace("$", "");
            if (dataValue >= value) {
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }
        }
    })
}


//***********  Filter by texting *************//

// Variables

let searchBar = document.querySelector('.filter__input_title');
let titlesElement = document.querySelectorAll('.menu_title');


searchBar.addEventListener('keyup', function(e) {
    // let inputCode = e.keyCode;
    // searchBar.innerHTML = inputCode;
    // console.log(inputCode)
    if (e.keyCode == 13) {
        let valueSearch = searchBar.value.toUpperCase().trim();
        console.log(valueSearch);
        for (let i = 0; i < titlesElement.length; i++) {
            const el = titlesElement[i];
            let titleValue = el.textContent;
            let cardTitle = el.parentElement.parentElement.parentElement;
            let titleFilter = titleValue.includes(valueSearch);
            if (titleFilter) {
                cardTitle.style.display = 'block';
            }else if (valueSearch == ""){
                titlesElement.style.display = 'block';
            }else{
                cardTitle.style.display = 'none';
            }
        }
    }
})