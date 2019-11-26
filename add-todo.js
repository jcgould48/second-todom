const addButton = document.querySelector('.add-todo');
addButton.onclick = addToList;


function addToList() {
  const inputBox = document.querySelector('.todo-input');
  const userInput = inputBox.value;
  
  addTodo(userInput);
  printTodo(userInput);
  inputBox.value = '';
  
//Strike Through
const firstUlLi = document.querySelectorAll('ul li')
for (let i = 0; i < firstUlLi.length; i++) {
    firstUlLi[i].addEventListener('click', olFunc);
  }
      function olFunc(element){
          element.target.style.textDecoration = 'line-through';
      }

}


