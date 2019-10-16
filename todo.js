const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODOS_LS = "todos";
let todos = [];

function deleteTodo(event){
    const clickedBtn = event.target;
    const clickedLi = clickedBtn.parentNode;
    
    todoList.removeChild(clickedLi);

    //foreach와 비슷하게 인덱스를 돌면서 인자로 받은 함수가 true를 리턴 할 경우에 cleanTodos에 추가함
    const cleanTodos = todos.filter(function(todo){
        return todo.id !== parseInt(clickedLi.id);
    })
    todos = cleanTodos;
    saveTodo();
}

function paintTodo(text){
    //console.log(text);
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    const newId = todos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj = {
        text : text,
        id : newId
    };
    todos.push(todoObj);
}

function saveTodo(){
    //localStorage 는 저장할 때 string을 저장함.
    //stringify는 object 타입을 string으로 바꿔주는 역할
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function loadTodo(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if (loadedTodos !== null){
        const parsedTodos = JSON.parse(loadedTodos);
        parsedTodos.forEach(function(todo){
            //console.log(todo.text);
            paintTodo(todo.text);
        })
    } 
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    saveTodo();
    todoInput.value = "";
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();