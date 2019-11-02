//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks)
  // Add tasks event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task evetn
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);

}

// Get tasks form LS
function getTasks() {
  let tasks;

  //check if there are any tasks
  if(localStorage.getItem('tasks') === null){

    //there is nothing, so we can set it to an empty array
    tasks = [];

  } else {

    // local storage can only store strings, and you have to parse it as JSON
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
     // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to the li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  })
}

// Add Task
function addTask(e){
  if(taskInput.value == ''){
    alert('Add a task')
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to the li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);
  
  // Store in local storage
  storeTaskInLocalStorage(taskInput.value);
    
  // Clear input
  taskInput.value = '';

  e.preventDefault()
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;

  //check if there are any tasks
  if(localStorage.getItem('tasks') === null){

    //there is nothing, so we can set it to an empty array
    tasks = [];

  } else {

    // local storage can only store strings, and you have to parse it as JSON
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  //add new task to array
  tasks.push(task);

  //turn JSON into string to save it to local storage
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Remove task
function removeTask(e){
  //Target all the card for event delegation since there are multiple and new ones are added
  // Click gives us the i tag but we want the a tag, the parent
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')){
      //get the parent li tag from the parent a tag of the i element
      e.target.parentElement.parentElement.remove();

      // Remove from LS, no id, so we pass in the actual element
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  //Check LS and put it in a variable
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// Clear tasks
function clearTasks(e) {
  // One easy way to do it
  ///taskList.innerHTML = '';

  // Faster way to do it
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear all from LS
  clearTasksFromLocalStorage();
}

// Clear tasks from lS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter taks
function filterTasks(e) {
  const text = e.target.value.toLowerCase()
  // Query selector returns node list, get elements by class returns html collection wich we would have to convert to an array
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;

      //equals -1 when there is no match
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
}