
// To DO list project 

let input = document.querySelector('.input');
let sumbit = document.querySelector('.add');
let tasksContainer = document.querySelector('.tasks');

sumbit.addEventListener('click', add_Tasks)
function add_Tasks(){
  if(input.value !== ""){
    let newTask = document.createElement('div');
    let taskName = document.createElement('h2');
    let del = document.createElement('input');
    taskName.innerHTML=`${input.value}`;
    del.setAttribute('type', 'submit');
    del.setAttribute('value', 'delete');
 //styling
    del.style.cssText = 'color:white; padding:10px; border:none; border-radius:5px; background-color:red;'
    taskName.style.cssText = 'font-family: Courier New, Courier, monospace; '
    newTask.style.cssText ='margin:20px; background-color:aliceblue;  border-radius: 10px; border: none; padding:10px 10px; display: flex; justify-content: space-between;'
    window.localStorage.setItem('tasks',input.value);
    
    newTask.appendChild(taskName)
      newTask.appendChild(del)
      tasksContainer.appendChild(newTask);
    
      input.value = "";
      del.addEventListener("click",   function(){
        newTask.remove();
        window.localStorage.removeItem('tasks')
      })
    }
}






