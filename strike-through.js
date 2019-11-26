

const strike = function(){
    document.querySelectorAll('li').style.textDecoration = 'line-through'
}

const firstList = document.querySelectorAll('ul li')
for(let i = 0; i < firstList.length; i++){
    firstList[i].addEventListener('click',strike)
}