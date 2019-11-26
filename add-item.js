const todoArr = [];

document.querySelector(".add-todo").addEventListener('click',function(){
let addedValue = document.querySelector('.todo-input').value
newLi('.todo-input')
todoArr.push(addedValue);
clearSearch('.todo-input');
})

