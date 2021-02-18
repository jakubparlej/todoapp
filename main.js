const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('task');
const addInput = document.querySelector('form input');
const searchInput = document.getElementById('search');

// Task array
let toDoList = [];

// functions

const renderList = () => {
  ul.textContent = "";
  toDoList.forEach((toDoElement, key) => {
    toDoElement.id = key;
    ul.appendChild(toDoElement);
  })
}

const removeTask = (e) => {

  const index = e.target.parentNode.id;
  toDoList.splice(index, 1);


  renderList();
  taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
  e.preventDefault();

  // get task name from input
  const taskName = addInput.value;

  if (taskName === "") return;

  // create li element (task)
  const task = document.createElement('li');
  task.classList = "task";
  task.innerHTML = taskName + `<button><img src="./images/delete.svg" alt="trash" width="10px"></button>`;

  // add task to array
  toDoList.push(task);
  renderList();

  // add task to ul list

  ul.appendChild(task);

  // reset input value
  addInput.value = "";

  // get number of tasks
  taskNumber.textContent = listItems.length;

  // add event to remove button
  task.querySelector('button').addEventListener('click', removeTask);
}

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  let searchList = toDoList;

  searchList = searchList.filter(li => li.textContent.toLowerCase().includes(searchText));

  ul.textContent = "";
  searchList.forEach(li => ul.appendChild(li));

}

form.addEventListener('submit', addTask);
searchInput.addEventListener('input', searchTask);