function updateCounters() {
    // declare a variable that contains the "Total" counter element
    // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
    // update the HTML inside the counter element with the number of todos
    const totalCount = document.getElementById("total_count");
    const totalTodos = document.getElementsByClassName("todo_item").length;
    totalCount.innerHTML = " Total "+totalTodos;    
}
updateCounters();
