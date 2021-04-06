'use strict'

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const openModalBtns = document.querySelectorAll('.show-modal-btn');
const container = document.querySelector('.container');
const closeContainerBtn = document.querySelector('.close');

for (let i = 0; i < openModalBtns.length; i++) {
    openModalBtns[i].addEventListener('click', function() {
        // openModalBtns[i].classList.toggle('color');
        modal.classList.remove('hidden');
    })
    closeModalBtn.addEventListener('click', function() {
        modal.classList.add('hidden');
    })
}



closeContainerBtn.addEventListener('click', function() {
    container.classList.add('hidden')
})