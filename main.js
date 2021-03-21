function updateCounters() {
    // declare a variable that contains the "Total" counter element
    // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
    // update the HTML inside the counter element with the number of todos
    const totalCount = document.getElementById("total_count");
    const totalTodos = document.getElementsByClassName("todo_item").length;
    totalCount.innerHTML = " Total "+totalTodos;    
    
    //total of done items in summary
    const completedCount = document.getElementById("completed_count");
    const totalDone = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = " Done "+totalDone; 
    //total of uncompleted items in summary
    
    const uncompletedCount = document.getElementById("uncompleted_count");
    const uncompletedTodos = totalTodos - completedCount;
    uncompletedCount.innerHTML = " Todo "+ uncompletedTodos;
   
}
updateCounters();

