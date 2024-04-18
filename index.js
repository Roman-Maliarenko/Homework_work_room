const formElement = document.getElementById('todo-form');
const listElement = document.getElementById('todo-list');

const tasks = [];
const addTask = (event)=>{
    event.preventDefault();

const title = event.target.title.value;
const description = event.target.description.value;
event.target.title.value ="";
event.target.description.value ="";

tasks.push({title, description, done:false})
console.log(tasks);

renderTasks();
};
function renderTasks(){

while(listElement.hasChildNodes()){
    listElement.firstChild.remove();
}
tasks.forEach((task)=>{
const li = document.createElement('li');
const checkbox = document.createElement('input'); 
checkbox.type="checkbox";
checkbox.checked = task.done 
checkbox.onclick =()=>{
    task.done = !task.done
};
li.append(checkbox)
const textNode = document.createTextNode(
    `${task.title} ${task.description}`
);
li.append(textNode)
listElement.append(li)
});
}
formElement.addEventListener('submit',addTask)