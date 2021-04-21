'use strict';

const notes = [];
const title = document.querySelector('.title');
const text = document.querySelector('.note');
const addNotesBtn = document.querySelector('.add-note');
const showNotes = document.querySelector('.show-notes');
const search = document.querySelector('.search');
const searchNote = document.querySelector('.search-notes');
const searchBtn = document.querySelector('.btn-search');

addNotesBtn.addEventListener('click', function() {
    const note = {
        title: title.value,
        text: text.value
    }
    notes.push(note);
    title.value = '';
    text.value = '';


    if (notes.length > 0) search.classList.remove('search');

    showNotes.innerHTML = '';
    notes.forEach((note, id) => {
        const noteText = document.createElement('div');
        noteText.classList.add('test1');
        noteText.innerHTML = `
        <div class="test">
          <p class="id">${id + 1}</p> 
          <p class="title">${note.title}</p>
          <p class="text">${note.text}</p>
        </div>`;
        showNotes.append(noteText);
    });
})





searchBtn.addEventListener('click', function() {

    const searchNotes = (notes, text) => {
        return notes.filter(note => note.text.includes(text));
    }

    const searchArr = searchNotes(notes, searchNote.value);
    searchArr.map(note => {
        const test = document.createElement('p');
        test.textContent = `You find ${note.text}`;
        search.append(test);
    });
    searchNote.value = '';
})