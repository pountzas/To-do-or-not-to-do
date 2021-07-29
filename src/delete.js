/* eslint-disable no-restricted-globals */
import updateStorage from './storage';
import sortList from './sortList';

export default function onClickClear() {
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

  return sortList;
}
