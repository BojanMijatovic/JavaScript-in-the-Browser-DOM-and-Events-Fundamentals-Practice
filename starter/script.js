'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});



//  Selecting, Creating, and Deleting Elements
// console.log(document.documentElement); all document



// SELECT ELEMENT
const allSections = document.querySelectorAll('.section');
const allBtns = document.getElementsByTagName('button');
const header = document.querySelector('.header');



// CREATE ELEMENT
const message = document.createElement('div');
message.textContent = `Here is message from js`;
message.classList.add('cookie-message');
header.append(message);



//  REMOVE ELEMENT
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(item => item.addEventListener('click', () => item.remove()))



// Styles, Attributes and Classes

//  Classes
/*
classList.add()
classList.remove()
classList.toggle()
classList.contains()
*/

// Attributes
const logo = document.querySelector('.nav__logo');
/*
logo.className
logo.src
logo.id

all attributes are strings
console.log(typeof logo.src);
console.log(typeof logo.id);
console.log(typeof logo.className);
*/

//  Change attribute
logo.setAttribute('id', 'newID');