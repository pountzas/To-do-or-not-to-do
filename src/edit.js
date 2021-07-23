import updateStorage from './storage';
// eslint-disable-next-line import/no-cycle
import sortList from './index';

function onClickEdit() {
  let val = this.value;
  console.log(val);
}

function onClickExit() {
  let val = this.value;
}

const edit = document.querySelector('.edit').addEventListener('click', onClickEdit);

export default { onClickEdit, onClickExit }