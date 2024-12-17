
const inpBox = document.querySelector("#inp-box");
const listContainer = document.querySelector(".list-container");

console.log("connected");

function addTask() {
    if (inpBox.value == '') {
        alert("You must enter something!");
    }
    else {
        let tasks = document.querySelectorAll('.list-container li');
        let taskExists = Array.from(tasks).some(task => task.textContent.slice(0, -1).trim() === inpBox.value.trim());

        if (taskExists) {
            alert("Task already exists!");
        } else {
            let li = document.createElement("li");
            li.innerHTML = inpBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
        }
    }
    inpBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData();