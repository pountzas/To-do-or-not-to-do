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

