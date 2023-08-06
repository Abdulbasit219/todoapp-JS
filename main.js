const deletetodo = (todoid) => {
    const TodoElement = document.getElementById(`todo-${todoid}`);
    TodoElement.remove()
}

let id = 1;
let editid = null;

const addnewtask = () => {
    const name = document.getElementById('todo-task').value;
    const todolist = document.getElementsByClassName('todo-list');
    const todoElement = document.createElement('div');
    todoElement.id = `todo-${id}`;
    todoElement.className='todo-item';
    if(!name){
        return
    }else if(editid!==null){
        const editedTodoElement = document.getElementById(`todo-${editid}`);
        const para = editedTodoElement.getElementsByTagName('p')[0];
        para.textContent = name;
        editid = null;
        document.getElementById('todo-task').value = '';
        return;
    }
    else{ 
    todoElement.innerHTML = `
    <p class="todo-task">${name}</p>
    <div class="icons">
    <i class="fas fa-pen fa-pens" title=Update onclick='editTask(${id})'></i>
    <i class="fas fa-trash" title=delete onclick='deletetodo(${id})'></i>
    </div>
    `
    todolist[0].appendChild(todoElement);
    document.getElementById('todo-task').value = '';
    id++;
    }
}

const editTask = (todoid) => {
    editid = todoid
    const taskid = document.getElementById(`todo-${todoid}`);
    const para = taskid.getElementsByTagName('p')[0].textContent;
    const todoinput = document.getElementById('todo-task')
    todoinput.value = para;  
    const plusIcon = document.getElementById('plus-icon');
    plusIcon.innerHTML = '<i class="fas fa-pen"></i>';  
}

document.addEventListener('DOMContentLoaded', () => {
const plusIcon = document.getElementById('plus-icon');
plusIcon.addEventListener('click', () => {
    if( editid === null){
        plusIcon.innerHTML = `<i class="fas fa-plus"></i>`
    }
});
});