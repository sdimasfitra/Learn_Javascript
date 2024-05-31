// Greeting all required elements
const inputField = document.querySelector(".input-field textarea"),
todoList = document.querySelector(".todoList"),
pendingNum = document.querySelector(".pending-num"),
clearButton = document.querySelector(".clear-button");

// we will call this function while adding, delecting n checking unchecking the task
function allTasks(){
    let tasks = document.querySelectorAll(".pending")
    //if tasks' length is 0 than pending num text content will be no. if not then pending num value will be no. if not then pending num value will be task's length
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length

    let allLists = document.querySelector(".list")
    if(allLists.length > 0){
        todoList.style.marginTop = "20px"
        clearButton.style.pointerEvents = "auto"
        return
    }
    todoList.style.marginTop = "0px"
    // console.log(tasks)
}

// add task while we put value in text area and press enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim() //trim: function removes space of front n back of the inputed value
    
    // if enter button is clicked n inputed value length is greated than 0
    if(e.key === "Enter" && inputVal.length > 0){
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
                <input type="checkbox">
                <span class="task">${inputVal}</span>
                <i class="uil uil-trash" onclick="deleteTask(this)"></i>
            </li>`;

        todoList.insertAdjacentHTML("beforeend", liTag);
        inputField.value = ""; //removing value from input field
        allTasks()
    }
})

//checking n unchecking the checkbox while we click on  the task
function handleStatus(e){
    const checkbox = e.querySelector("input") //getting checkbox
    checkbox.checked = checkbox.checked ? false : true
    e.classList.toggle("pending")
    allTasks()
    // console.log(checkbox)
}

// deleting task while we click on the delete icon
function deleteTask(e){
    e.parentElement.remove() //getting parent element n remove it
    allTasks()
    // console.log(e.parentElement)
}

// Deleting all the tasks while we click on the clear button
clearButton.addEventListener("click", () => {
    todoList.innerHTML = ""
    allTasks()
})













