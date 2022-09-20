const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const btnCheck = document.querySelector('.button')
const listtodo = document.querySelector('.list-todo')
const body = document.querySelector('body')
const mudar = document.querySelector('#mudar')


//funções

const saveTodo = (text) => {
const todo = document.createElement('div')//--------------->
todo.classList.add('formtoDo')//------------------------>
const divName = document.createElement('a')
divName.classList.add('name')
const todoTitle = document.createElement('h2')//----------->
todoTitle.innerText = text //------------>
todo.appendChild(todoTitle)//---------------------> 
divName.appendChild(todoTitle)
todo.appendChild(divName)
listtodo.appendChild(todo)

todoInput.value = ''
todoInput.focus()
const buttons = document.createElement('div')
buttons.classList.add('buttons')
const btn = document.createElement('button')
btn.classList.add('button')
btn.innerHTML =  '<i class="fa-solid fa-check"></i>'//------------>criamos o icone que vai dentro do botão

todo.appendChild(btn)//------------>dentro da div toDo inserimos o botão

const btnDone = document.createElement('button')
btnDone.classList.add('button')
btnDone.innerHTML =  '<i class="fa-solid fa-trash"></i>'//------------>criamos o icone que vai dentro do botão
todo.appendChild(btnDone)//------------>dentro da div toDo inserimos o 

btn.addEventListener('click',function() {
    todo.classList.toggle('check')
})
btnDone.addEventListener('click',function() {
    todo.classList.add('none')
})

}
 

//eventos
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault()
const inputValue = todoInput.value
if(inputValue){
    saveTodo(inputValue)
}
})
mudar.addEventListener('click',function(){
    body.classList.toggle('white')
})
