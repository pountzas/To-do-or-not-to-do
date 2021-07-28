import updateStorage from './storage';
// eslint-disable-next-line import/no-cycle
import sortList from './sortList';

export default function addTask(e) {
  const taskInput = document.querySelector('#taskInput');
  e.preventDefault();

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
  return sortList;
}