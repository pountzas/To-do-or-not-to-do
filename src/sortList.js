const descr = localStorage.getItem('description') ? localStorage.getItem('description').split(',') : [];
const completed = localStorage.getItem('completed') ? localStorage.getItem('completed').split(',') : [];
const sortList = [];
for (let i = 0; i < completed.length; i += 1) {
  const obj = {
    description: descr[i],
    completed: completed[i],
    index: i,
  };
  sortList.push(obj);
}

export default sortList;