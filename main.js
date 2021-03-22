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

  
  document.querySelector("form").addEventListener("submit",function addNewTodo(event) {
    event.preventDefault();
   // console.log("i got clicked");
  });
