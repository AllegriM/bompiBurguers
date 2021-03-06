// Variables 

let cartIcon = document.querySelector('.cartContainer');
let modalBg = document.querySelector('.modal-bg');
let closeBtn = document.querySelector('.circle');

cartIcon.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
})

closeBtn.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
})


modalBg.addEventListener('click', function(e){
    if (e.target.classList.contains('modal-bg')) {
        modalBg.classList.remove('bg-active');
    }
})