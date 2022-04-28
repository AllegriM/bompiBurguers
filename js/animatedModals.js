// MODAL ANIMATION WHEN ADD & REMOVE ITEM!

// ADD BUTTON

// Variables
let modalAdd = document.querySelector('.alert');
let modalClose = document.querySelector('.close-btn')
let windowHeight = ` ${window.screen.height / 2}px`;
console.log(window.screen.height);

for (let i = 0; i < plusBtn.length; i++) {
    const btns = plusBtn[i];
    btns.addEventListener('click', function(){
        // modalAdd.style.top = windowHeight;
        modalAdd.classList.add('show');
        modalAdd.classList.remove('hide');
        modalAdd.classList.add('showAlert');
        // modalAdd.style.top += '90px';
        setTimeout(function(){
            modalAdd.classList.remove("show");
            modalAdd.classList.add("hide");
        },800);
    })
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

