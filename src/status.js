// eslint-disable-next-line import/no-cycle
import sortList from './sortList';

export default function loadCheckboxes() {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('click', () => {
      sortList[i].completed = checkboxes[i].checked;
      const status = [];
      for (let j = 0; j < checkboxes.length; j += 1) {
        status.push(checkboxes[j].checked);
      }
      localStorage.setItem('completed', status);
    }, false);
  }
}