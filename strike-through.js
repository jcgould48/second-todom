const firstList = document.querySelector('.todo-list')

const strike = function(){
    firstList.style.textDecoration = 'line-through'
}

for(let i = 0; i < firstList.length; i++){
    firstList[i].addEventListener('click',strike)
}