const inputBox = document.querySelector("#textbox");
const tasks = document.querySelector(".items");

function addTasks() {
    if (inputBox.value === '') {
        alert("You have not added your task yet")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    storeData();
}
tasks.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
}, false);

function storeData() {
    localStorage.setItem("data", tasks.innerHTML);
}
function saveData() {
    tasks.innerHTML = localStorage.getItem("data");
}
saveData();