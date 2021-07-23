/* eslint-disable no-unused-vars */
import updateStorage from './storage';
// eslint-disable-next-line import/no-cycle
import sortList from './index';

function onClickClear() {
  // let val = this.value;
  // console.log(sortList.completed);
  for (let i = 0; i < sortList.length; i += 1) {
    // console.log(sortList[i].completed);
    if (sortList[i].completed === 'true' || sortList[i].completed === true) {
      sortList.splice(i, 1);
      console.log('kill task }');

      localStorage.clear();
      for (let i = 0; i < sortList.length; i += 1) {
        sortList[i].index = i;
        // console.log(updateStorage);
        updateStorage(sortList[i]);
      }
    }
  }
  location.reload();
  console.log(sortList);
  // location.reload();
  // sortList.push(obj);
  // updateStorage(obj);
  // taskInput.value = '';
  // eslint-disable-next-line no-restricted-globals
  // 
}

function onClickDelete() {
  console.log('delete task');
}

const clearTasks = document.querySelector('.clearBtn').addEventListener('click', onClickClear);
const taskDel = document.querySelector('.clearBtn').addEventListener('click', onClickDelete);

export default { onClickClear, onClickDelete };
