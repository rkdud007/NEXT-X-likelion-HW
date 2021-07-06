let $ulElement = document.querySelector('ul');
const body = document.querySelector('body');
const close = document.querySelector('.close');
const modal = document.querySelector('#myModal');
const total = document.querySelector('#total');
const myBar = document.querySelector('#myBar');
const header = document.querySelector('.header');
let check = 0;
let totalnum = 0;
const theme =document.querySelector('.theme');
theme.addEventListener("click",(e)=>{
    header.classList.toggle('darkmodeheader');
    if(header.classList.contains('darkmodeheader')){
        header.style.background = " #f44336";
        header.style.color = "white";
    }else{
        header.style.background = " #555";
        header.style.color = "#f44336";
    }
    
})

$ulElement.addEventListener("click",(event)=>{
    let $target = event.target;
    let $parentTarget = $target.parentElement;
    if($target.classList.contains('close')){
        $parentTarget.style.display = "none";
        totalnum -= 1;
        if($parentTarget.classList.contains('checked')){
            check-=1;
        }
        progressbar(check,totalnum);
    }
    else{$target.classList.toggle('checked');
    if ($target.classList.contains('checked')){
        check ++;
        
    }else{check--; }}
        
    
    progressbar(check,totalnum);
    deleteTodoList('todoList',$target.previousSibling.innerText);
})
let clickbtn  = document.querySelector('.clickbtn');
clickbtn.addEventListener("click",(e)=>{
    modal.style.display = "flex";
    total.classList.add('modal');
})
close.addEventListener("click",(e)=>{
    let target = e.target;
    let parentTarget = target.parentElement.parentElement;
    parentTarget.style.display = "none";
    total.classList.remove('modal');
})
function progressbar(check, totalnum){
    let percent = check /totalnum *100;
    myBar.style.width = percent + '%';
}

function newElement() {
    let inputValue = document.getElementById("myInput").value;
    $ulElement.insertAdjacentHTML('beforeEnd', '<li></li>');
    let num = document.querySelectorAll('li').length;
    let $liElement = document.querySelectorAll('li')[num-1];

    
    $liElement.insertAdjacentHTML('beforeEnd', `<span>${inputValue}</span>`);

    let $closeText = document.createTextNode("\u00D7");

    $liElement.insertAdjacentHTML('beforeEnd', `<span class = "close">&#215;</span>`);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        totalnum ++;
        progressbar(check,totalnum);
        $ulElement.appendChild($liElement);
        let list = getTodoList('todoList');
        list.push($liElement.firstChild.innerText);
        localStorage.setItem('todoList',list);
    }
    document.getElementById("myInput").value = "";
}

// 두번째 실습


function init() {
    check = 0;
    progressbar(check,totalnum);
    let list  = getTodoList('todoList');
    let listnum = list.length;
    totalnum = listnum
    
    progressbar(check,totalnum);
    let $liElement = "";
    for(let i=0 ; i<listnum; i++){
        let Value = list[i];
        $liElement = `<li><span>${Value}</span><span class="close">&#215;</span></li>`
        $ulElement.insertAdjacentHTML('beforeend', $liElement);
    }
    
}

function getTodoList(key) {
    return localStorage.getItem(key).split(',') ? localStorage.getItem(key).split(',') : [];
}

function addTodoList(key, value) {
    localStorage.setItem(key, value);
}

function deleteTodoList(key,value) {
    let list  = getTodoList(key);
    let newlist = [];
    let listnum = list.length;
    localStorage.removeItem(key)
    for(let i=0 ; i<listnum; i++){
        if(list[i] !== value){
            newlist.push(list[i]);
        }
    }
    localStorage.setItem(key,newlist);
}


init()

