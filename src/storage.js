function updateStorage(obj) {
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    const key = Object.keys(obj)[i];
    const arr = localStorage.getItem(key) ? localStorage.getItem(key).split(',') : [];
    arr.push(obj[key]);
    localStorage.setItem(key, arr);
  }
}
export default updateStorage;
