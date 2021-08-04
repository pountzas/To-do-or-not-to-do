/* eslint-disable no-unused-vars */
/* eslint-disable import/no-duplicates */
/**
 * @jest-environment jsdom
 */

import dragStart from './drag';
import dragEnd from './drag';
import dragOver from './drag';
import drop from './drag';

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

describe('Testing the drop function', () => {
  test('it sould swap index with the target', () => {
    global.localStorage = new LocalStorageMock();
    localStorage.setItem('completed', 'true,false,true');
    localStorage.setItem('index', '0,1,2');
    localStorage.setItem('description', 'Task 1,Task 2,Task 3');
    const sortList = [{
      description: 'Task 1',
      status: true,
      index: 0,
    },
    {
      description: 'Task 3',
      status: true,
      index: 1,
    },
    {
      description: 'Task 2',
      status: false,
      index: 2,
    },
    ];

    const localMock = [];
    for (let i = 0; i < sortList.length; i += 1) {
      localMock.push(sortList[i]);
      const taskInput = document.getElementById('taskInput');
      taskInput.addEventListener('click', (e) => {
        drop(e);
      });
    }

    expect(localMock[1].index).toBe(1);
    expect(localMock).toStrictEqual(sortList);
  });
});