// MODAL ANIMATION WHEN ADD & REMOVE ITEM!

// Variables
let modalAdd = document.querySelector('.alert');
let modalClose = document.querySelector('.close-btn');
let height = 90;

function addModalItem() {
    let plusBtn = document.querySelectorAll('.plus')
    for (let i = 0; i < plusBtn.length; i++) {
        const btns = plusBtn[i];
        btns.addEventListener('click', function(){
            modalAdd.classList.add('show');
            modalAdd.classList.remove('hide');
            modalAdd.classList.add('showAlert');
            setTimeout(function(){
                modalAdd.classList.remove("show");
                modalAdd.classList.add("hide");
            },800);
        })
    }
}

modalClose.addEventListener('click', function() {
    modalAdd.classList.remove('show');
    modalAdd.classList.add('hide'); 
})

// REMOVE BUTTON

let modalRemove = document.querySelector('.removeAlert');
let removeModalClose = document.querySelector('.removeClose-btn')


function removeModalItem() {
    // modalAdd.style.top = windowHeight;
    modalRemove.classList.add('show');
    modalRemove.classList.remove('hide');
    modalRemove.classList.add('showAlert');
        // modalRemove.style.top += '90px';
        setTimeout(function(){
        modalRemove.classList.remove("show");
        modalRemove.classList.add("hide");
        },800);
}


