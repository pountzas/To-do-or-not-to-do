import updateStorage from './storage';
// eslint-disable-next-line import/no-cycle
import sortList from './index';

const taskInput = document.querySelector('#taskInput');

export default function addTask(e) {
  e.preventDefault();
  if (taskInput.value === '') {
    MessageEvent('Add a task');
  }

  const obj = {
    description: taskInput.value,
    completed: 'false',
    index: sortList.length,
  };

  sortList.push(obj);
  updateStorage(obj);
  taskInput.value = '';
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}