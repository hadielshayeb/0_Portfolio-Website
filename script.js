const projectList = document.getElementById("project-list");

function addProject() {
  const input = document.getElementById("projectInput").value;
  if (input.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input;
  projectList.appendChild(li);

  document.getElementById("projectInput").value = "";
}

function updateProject() {
  const index = parseInt(document.getElementById("updateIndex").value);
  const newName = document.getElementById("newProjectName").value;

  const items = projectList.getElementsByTagName("li");
  if (index >= 0 && index < items.length && newName.trim() !== "") {
    items[index].textContent = newName;
  }
}

const messages = [
  "You're building something legendary 🚀",
  "CTO energy levels: MAX 💡",
  "Another 1% better today ⚙️",
  "Your stack is sleek and scalable 💻",
  "Ship fast. Learn faster. 🚢"
];

function showMessage() {
  const output = document.getElementById("messageOutput");
  const randomIndex = Math.floor(Math.random() * messages.length);
  output.textContent = messages[randomIndex];
}