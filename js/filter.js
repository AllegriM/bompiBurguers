// Filter JS

// Filter by button type
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