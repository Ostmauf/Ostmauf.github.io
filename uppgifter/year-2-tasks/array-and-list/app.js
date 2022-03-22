const input = document.getElementById("todo");
const button = document.getElementById("add");
const list = document.getElementById('list');

const todos = [
  { text: "Hej på dig!", done: false },
  { text: "Programmera", done: true },
  { text: "Gå hem", done: false },
];

button.addEventListener("click", onButtonClicked);

updateView()

function onButtonClicked() {

  todos.push({
    text: input.value,
    done: false
  });
  
  updateView();
}

function updateView() {
  list.innerHTML = ""
  for(let i = 0; i < todos.length; i++) {
    const li = document.createElement('li');
    li.dataset.index = 1;
    li.textContent = todos[i].text;
    if (todos[i].done) {
      li.style.textDecoration = "line-through"
    }
    list.appendChild(li);
    li.addEventListener('click', onItemClicked);
  }
}

function onItemClicked(e) {
  
  todos[e.target.dataset.index].done = !todos[e.target.dataset.index].done;

  updateView();
}