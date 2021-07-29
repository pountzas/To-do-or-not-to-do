/* eslint-disable no-restricted-globals */
import updateStorage from './storage';
import sortList from './sortList';

export default function onClickDelete(index) {
  sortList.splice(index, 1);
  localStorage.clear();
  for (let i = 0; i < sortList.length; i += 1) {
    sortList[i].index = i;
    updateStorage(sortList[i]);
  }

  return sortList;
}