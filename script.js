function addProject() {
    const projectList = document.getElementById("project-list");
    const project = document.createElement("div");
    project.innerText = "New Project " + (projectList.children.length + 1);
    projectList.appendChild(project);
  }
  