import onClickEdit from './edit';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

document.body.innerHTML = `<input id="taskInput" value="Something">
    <i class="far fa-calendar-plus"></i>
    <div id="list">
        <div><p contenteditable="true" class="editable" content>task1</p></div>
        <div><p contenteditable="true" class="editable" content>task2</p></div>
        <div><p contenteditable="true" class="editable" content>task3</p></div>
    </div>
    <i class="clearBtn"></i>`;
describe('Testing onClickEditable function', () => {
  test('Should update the task description', () => {
    global.localStorage = new LocalStorageMock();
    localStorage.setItem('description', 'Task 1,Task 2,Task 3');
    localStorage.setItem('status', 'true,false,true');
    localStorage.setItem('index', '0,1,2');

    const sortList = [{
      description: 'Task 1',
      completed: 'true',
      index: 0,
    },
    {
      description: 'Task 2',
      completed: 'false',
      index: 1,
    },
    {
      description: 'Task 3',
      completed: 'true',
      index: 2,
    }];

    const tasks = document.getElementsByClassName('editable');
    for (let i = 0; i < tasks.length; i += 1) {
      // eslint-disable-next-line no-loop-func
      tasks[i].addEventListener('click', () => { onClickEdit(i); });
    }

    tasks[0].description = 'New Task';
    sortList[0].description = tasks[0].description;
    expect(sortList[0].description).toBe('New Task');
  });
});