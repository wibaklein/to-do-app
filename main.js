function updateCounters() {
    // declare a variable that contains the "Total" counter element
    // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
    // update the HTML inside the counter element with the number of todos
    const totalCount = document.getElementById("total_count");
    const totalTodos = document.getElementsByClassName("todo_item").length;
    totalCount.innerHTML = " Total "+totalTodos;    
    
    //total of done items in summary
    const totalDone = document.getElementById("completed_count");
    const completedCount = document.getElementsByClassName("completed").length;
    totalDone.innerHTML = " Done "+completedCount; 
    //total of uncompleted items in summary
    
    const uncompletedCount = document.getElementById("uncompleted_count");
    const uncompletedTodos = totalTodos - completedCount;
    uncompletedCount.innerHTML = " Todo "+ uncompletedTodos;
   
}
updateCounters();

function toggleDone(event) {
    // get the checkbox from the event object
  const checkbox = event.currentTarget;
    if (checkbox.checked) {
      // change the checkbox so that it shows up as completed
      checkbox.parentElement.parentElement.className = "todo_item completed";
    } 
    else {
      // change the checkbox so that it shows up as todo
      checkbox.parentElement.parentElement.className = "todo_item";
    }
    updateCounters();
    // update the counters, now that we have updated the checkbox
  }

  const checkboxes = document.querySelectorAll(".todo_item input");
  for (var i = 0; i < checkboxes.length; i++){
  // add a "change" event listener to every checkbox,
  checkboxes[i].addEventListener("change", toggleDone);
}
  // and use the "toggleDone" function as the callback

/// MAANDAG ///// /// MAANDAG ///// /// MAANDAG ///// 

/*   document.querySelector("form").addEventListener("submit",function addNewTodo(event) { // ?? addNEwtodo moet zijn createTodo? 
    event.preventDefault();
   console.log("i got clicked");
  }); */


  function createTodo(title) {
    // create a label, create a checkbox  
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = false;
  
    // add the "change" event listener to the checkbox
  checkbox.addEventListener("change", toggleDone); // waarom moet dit hier nog een keer? en wwaarom zonder loop?
    // and append the checkbox to the label
    label.appendChild(checkbox);   // ? wel en niet tussen haakjes?? why?
  
    // create a text node with the given title
    const labelText = document.createTextNode(" " + title); // ? wat is een textNode? hoe weet ik dat?
    
    // and append the text node to the label
    label.appendChild(labelText); // ?wel en niet tussen haakjes?? why? iig onthouden
    
    // create a list item
    const listItem = document.createElement("li") //? kan ik de list item ook als eerste aanmaken?
    listItem.className = "todo_item";
    // add label to list item
    listItem.appendChild(label);
    
    // append the list item to the todo list
    const list = document.getElementById("todolist");
    
    list.appendChild(listItem);
  }
  document.querySelector("form").addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();

    const inputField = document.querySelector("#new-todo");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle);

    // reset the value of the inputField to make it empty and
    // ready to create new todos
    inputField.value = null;

    updateCounters();
  });
  