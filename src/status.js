import updateStorage from './storage';

function Status(sortList, e) {
  const item = e.target.parentNode.parentNode;
  const index = Array.prototype.indexOf.call(item.parentNode.children, item);
  sortList[index].completed = e.target.checked;
  localStorage.clear();
  for (let i = 0; i < sortList.length; i += 1) {
    updateStorage(sortList[i]);
  }
}

export default Status;
