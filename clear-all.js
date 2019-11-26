function removeFromList() {
    const inputBox = document.querySelector('.index-input');
    const userInput = inputBox.value;
  
    removeTodo(userInput);
    
    clearList();
    printList();
  }

function clearList() {
    const list = document.querySelector('.todo-list');
    
    while (list.hasChildNodes()) {
      list.firstChild.remove();
    }
  }

const removeButton = document.querySelector('.remove-todo');
removeButton.onclick = removeFromList;
let newLi = document.querySelectorAll('li');
const clearCompleted = function (){
  for (let i = 0; i<newLi.length; i++){
    if (newLi[i].textDecoration ='line-through'){
        newLi[i].style.display= 'none'
    }
    }
}


document.querySelector('.clear-all').addEventListener('click', clearList)
document.querySelector('.remove-all-todo').addEventListener('click', clearCompleted)


