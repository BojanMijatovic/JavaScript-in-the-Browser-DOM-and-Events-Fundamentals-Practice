'use strict';



// const users = [{
//         name: 'michel',
//         lastName: 'paint',
//         userName: 'admin'
//     },
//     {
//         name: 'ana',
//         lastName: 'nixon',
//         userName: 'nix'
//     },
//     {
//         name: 'sawn',
//         lastName: 'forest',
//         userName: 'gum'
//     },
//     {
//         name: 'ted',
//         lastName: 'readd',
//         userName: 'g'
//     }
// ]

const notes = [];

const note = document.querySelector('.note');
const addNotesBtn = document.querySelector('.add-note');
const showNotes = document.querySelector('.show-notes');
const search = document.querySelector('.search');
const searchNote = document.querySelector('.search-notes');
const searchBtn = document.querySelector('.btn-search');

addNotesBtn.addEventListener('click', function() {
    notes.push(note.value);
    note.value = '';


    if (notes.length > 0) {
        search.classList.remove('search');
    }

    //  show notes
    showNotes.innerHTML = '';
    notes.forEach((note, id) => {
        const noteText = document.createElement('p');
        noteText.textContent = `${id + 1}  ${note}`;
        showNotes.append(noteText);
    });
})





searchBtn.addEventListener('click', function() {
    //  search notes 
    const searchNotes = (notes, text) => {
        return notes.filter(note => note < text);
    }
    const searchArr = searchNotes(notes, searchNote.value);
    searchArr.map(note => {
        const test = document.createElement('p');
        test.textContent = `You find ${note}`;
        search.append(test);
    });
})