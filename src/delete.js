/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import updateStorage from './storage';
// eslint-disable-next-line import/no-cycle
import sortList from './index';

function onClickClear() {
  for (let i = sortList.length - 1; i >= 0; i -= 1) {
    if (sortList[i].completed === 'true') {
      sortList.splice(i, 1);
    }
  }
  localStorage.clear();
  for (let i = 0; i < sortList.length; i += 1) {
    sortList[i].index = i;
    updateStorage(sortList[i]);
  }
  location.reload();
}

export default function onClickDelete(index) {
  sortList.splice(index, 1);
  localStorage.clear();
  for (let i = 0; i < sortList.length; i += 1) {
    sortList[i].index = i;
    updateStorage(sortList[i]);
  }
  location.reload();
}

document.querySelector('.clearBtn').addEventListener('click', () => { onClickClear(); });
