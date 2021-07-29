/**
 * @jest-environment jsdom
 */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */

import onClickClear from './delete';
import onClickDelete from './deleteOne';

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
    <div id="list"></div>
    <i class="clearBtn"></i>`;

describe('Testing the onClickClear function', () => {
  test('it sould remove the completed tasks from the sortList', () => {
    global.localStorage = new LocalStorageMock();
    localStorage.setItem('completed', 'true,false,true');
    localStorage.setItem('index', '0,1,2');
    localStorage.setItem('description', 'Task 1,Task 2,Task 3');

    const taskInput = document.querySelector('.clearBtn');

    let sortList = [{
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

    taskInput.addEventListener('click', () => {
      sortList = onClickClear();
    });

    taskInput.click();
    expect(onClickClear().length).not.toBe(2);
  });
});

describe('Testing the onClickDelete function', () => {
  test('it sould remove the completed tasks from the sortList', () => {
    global.localStorage = new LocalStorageMock();
    localStorage.setItem('completed', 'true,false,true');
    localStorage.setItem('index', '0,1,2');
    localStorage.setItem('description', 'Task 1,Task 2,Task 3');
    const taskInput = document.querySelector('.clearBtn');

    let sortList = [{
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

    taskInput.addEventListener('click', () => {
      sortList = onClickDelete();
    });

    taskInput.click();

    expect(onClickDelete().length).not.toBe(2);
  });
});