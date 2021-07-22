/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import './style.css';
import Status from './status';
import dragStart from './drag';
import dragEnd from './drag';
import dragOver from './drag';
import drop from './drag';

// Define UI vars
const listDiv = document.getElementById('list');
const clearBtn = document.querySelector('.clearBtn');
const taskInput = document.querySelector('#taskInput');
const checkboxes = document.querySelectorAll('input[type=checkbox]');

// eslint-disable-next-line no-unused-expressions
dragStart; dragEnd; dragOver; drop;

const list = [
  {
    description: 'test',
    completed: false,
    index: 0,
  },
  {
    description: 'test 2',
    completed: false,
    index: 1,
  },
  {
    description: 'test 3',
    completed: false,
    index: 2,
  },
  {
    description: 'test 4',
    completed: false,
    index: 3,
  },
];

// eslint-disable-next-line import/no-mutable-exports
let sortList = list.sort((a, b) => a.index - b.index);

function listShow() {
  for (let i = 0; i < sortList.length; i += 1) {
    const checked = sortList[i].completed === 'true' ? 'checked' : '';
    listDiv.insertAdjacentHTML('beforeend', `
    <div class="listItem" draggable="true">
      <div>
        <input class="checkbox" ${checked} id="${i}" type="checkbox">  
        <p>${sortList[i].description}</p>
      </div>
      <button type="button">
        <img src="https://static.thenounproject.com/png/2854151-200.png" width="12" alt="Dots">
      </button>
    </div>`);
  }
}

if (localStorage.getItem('index') === null) {
  window.onload = listShow();
} else {
  const descr = localStorage.getItem('description') ? localStorage.getItem('description').split(',') : [];
  const completed = localStorage.getItem('completed') ? localStorage.getItem('completed').split(',') : [];
  sortList = [];
  for (let i = 0; i < completed.length; i += 1) {
    const obj = {
      description: descr[i],
      completed: completed[i],
      index: i,
    };
    sortList.push(obj);
  }
  window.onload = listShow();
}

function loadCheckboxes() {
  const checkboxes = document.querySelectorAll('.check');
  for (let i = 0; i < checkboxes.length; i += 1) {
    const status = new Status();
    checkboxes[i].addEventListener('click', (Status) => {
      const checked = checkboxes[i].checked ? 'true' : 'false';
      localStorage.setItem(`completed.${i}`, checked);
    }, false);
  }
}
document.addEventListener('DOMContentLoaded', loadCheckboxes);

export default sortList;