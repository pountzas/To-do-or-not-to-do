/* eslint-disable import/no-cycle */
import sortList from './index';
import onClickDelete from './delete';

export default function onClickEdit(e) {
  if (e.target.classList.contains('editable')) {
    e.target.setAttribute('contenteditable', true);
    const edit = e.target.parentElement.nextElementSibling;
    const trash = e.target.parentElement.nextElementSibling.nextElementSibling;
    edit.setAttribute('hidden', true);
    trash.removeAttribute('hidden', true);

    const index = e.target.parentElement.firstElementChild.id;
    trash.addEventListener('click', () => { onClickDelete(index); });
    e.target.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const newInput = e.target.textContent;
        const index = e.target.parentElement.firstElementChild.id;
        sortList[index].description = newInput;
        e.target.removeAttribute('contenteditable');
        edit.removeAttribute('hidden', true);
        trash.setAttribute('hidden', true);
        const description = [];
        for (let j = 0; j < sortList.length; j += 1) {
          description.push(sortList[j].description);
          localStorage.setItem('description', description);
        }
      }
    });
  }
}
