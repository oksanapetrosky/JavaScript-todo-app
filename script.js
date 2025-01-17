const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Allow pressing "Enter" to add tasks
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

let saveDataDebounce;
function saveData() {
  clearTimeout(saveDataDebounce);
  saveDataDebounce = setTimeout(() => {
    localStorage.setItem("data", listContainer.innerHTML);
  }, 300);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
  if (storedData) {
    listContainer.innerHTML = storedData;
  }
}
showTask();
