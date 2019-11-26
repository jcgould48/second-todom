const todos = [];
// {  name : 'gym',
//   date: new Date(), 
//   completed: false, 
// }

// const todo = {
//   name: inputBox.value,
//   date: new Date(),
//   complete: false
// }

// document.querySelector('.todo-list').innerText= todos.name


function printTodo(todo) {
  const li = document.createElement('li');
  li.innerText = todo + " " + new Date();
  const ul = document.querySelector('.todo-list');

  ul.appendChild(li);
}

function printList() {
  let i = 0;
  while (i < todos.length) {
    printTodo(todos[i]);
    i = i + 1;
  }
}

function addTodo(todo) {
  todos.push(todo);
}

function removeTodo(i) {
  todos.splice(i, 1);
}