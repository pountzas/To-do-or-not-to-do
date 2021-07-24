/* eslint-disable import/no-cycle */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import './style.css';
import loadCheckboxes from './status';
import dragStart from './drag';
import dragEnd from './drag';
import dragOver from './drag';
import drop from './drag';
import addTask from './add';
import updateStorage from './storage';
import onClickClear from './delete';
import onClickDelete from './delete';
import onClickEdit from './edit';

// Define UI vars
const listDiv = document.getElementById('list');
const addList = document.querySelector('.addList');

// eslint-disable-next-line no-unused-expressions
dragStart; dragEnd; dragOver; drop; onClickEdit;

// eslint-disable-next-line import/no-mutable-exports
const descr = localStorage.getItem('description') ? localStorage.getItem('description').split(',') : [];
const completed = localStorage.getItem('completed') ? localStorage.getItem('completed').split(',') : [];
const sortList = [];
for (let i = 0; i < completed.length; i += 1) {
  const obj = {
    description: descr[i],
    completed: completed[i],
    index: i,
  };
  sortList.push(obj);
}

export function listShow() {
  const container = document.getElementById('list');
  container.innerHTML = '';
  for (let i = 0; i < sortList.length; i += 1) {
    const checked = sortList[i].completed === 'true' ? 'checked' : '';
    listDiv.insertAdjacentHTML('beforeend', `
    <div class="listItem" draggable="true">
      <div>
        <input class="checkbox" ${checked} id="${i}" type="checkbox">  
        <p contenteditable="true" class="editable" content>${sortList[i].description}</p>
      </div>
      <button type="button" class="edit">
        <img src="https://static.thenounproject.com/png/2854151-200.png" width="12" alt="Dots">
      </button>
      <button type="button" class="trash" hidden="true">
        <img src="https://w7.pngwing.com/pngs/228/54/png-transparent-logo-trademark-brand-delete-button-miscellaneous-text-trademark-thumbnail.png" width="24" alt="Dots">
      </button>
    </div>`);
  }
}

window.onload = listShow();

listDiv.addEventListener('click', onClickEdit);

// Add Task
addList.addEventListener('change', addTask);

loadCheckboxes();

export default sortList;
