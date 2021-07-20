import './style.css';

const list = [
  {
    description: 'test',
    completed: false,
    index: 0,
  },
  {
    description: 'test 2',
    completed: false,
    index: 1,
  },
  {
    description: 'test 3',
    completed: false,
    index: 2,
  },
];

function listShow() {
  const sortList = list.sort((a, b) => a.index - b.index);

  for (let i = 0; i < sortList.length; i += 1) {
    document.getElementById('list').insertAdjacentHTML('beforeend', `
    <div class="listItem">
    <div>
      <input class="checkbox" id="item-${i}" type="checkbox">  
      <p>${sortList[i].description}</p>
    </div>
    <button type="button">
      <img src="https://static.thenounproject.com/png/2854151-200.png" width="12" alt="Dots">
    </button>
  </div>`);
  }
}

window.onload = listShow();
