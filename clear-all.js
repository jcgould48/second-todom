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
 document.querySelectorAll('ul li');
const clearCompleted = function (){
  for (let i = 0; i<document.querySelectorAll('ul li').length; i++){
    if (document.querySelectorAll('ul li')[i].style.textDecoration ==='line-through'){
      document.querySelectorAll('ul li')[i].style.color='white'
    }
    }
}


document.querySelector('.clear-all').addEventListener('click', clearList)
document.querySelector('.remove-all-todo').addEventListener('click', clearCompleted)


