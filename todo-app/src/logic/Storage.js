import Project from "./Project";
import Projects from "./Projects";
import Todo from "./Todo";

export default class Storage {
  loadDataStorage() {
    if (!localStorage.length) {
      this.saveProjectsStorage(new Projects());
    }
  }

  saveProjectsStorage(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
  }

  getProjectsStorage() {
    const projects = Object.assign(
      new Projects(),
      JSON.parse(localStorage.getItem("projects"))
    );

    projects.setProjects(
      projects
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    projects.getProjects().forEach((project) => {
      project.setTodos(
        project.getTodos().map((todo) => Object.assign(new Todo(), todo))
      );
    });

    return projects;
  }

  getProjectStorage(name) {
    const projects = this.getProjectsStorage();
    return projects.getProject(name);
  }

  getAllProjects() {
    const projects = this.getProjectsStorage();
    return projects.getProjects();
  }

  getTodoStorage(name) {
    const projects = this.getProjectsStorage();
    let projectName = "";
    projects.getProjects().forEach((project) => {
      project.getTodos().forEach((todo) => {
        if (todo.getTitle() === name.trim()) {
          projectName = todo.getProjectName();
        }
      });
    });
    return projectName;
  }

  addProjectStorage(name) {
    const projects = this.getProjectsStorage();
    projects.addProject(name);
    this.saveProjectsStorage(projects);
  }

  removeProjectStorage(id) {
    const projects = this.getProjectsStorage();
    projects.deleteProject(id);
    this.saveProjectsStorage(projects);
  }

  addTodoStorage(name, todo) {
    const projects = this.getProjectsStorage();
    const project = projects.getProject(name);
    project.addTodo(todo);
    this.saveProjectsStorage(projects);
  }

  updateTodoStorage(name, todoId, todo) {
    const projects = this.getProjectsStorage();
    const project = projects.getProject(name);
    project.updateTodo(todoId, todo);
    this.saveProjectsStorage(projects);
  }

  deleteTodoStorage(name, todoId) {
    const projects = this.getProjectsStorage();
    const project = projects.getProject(name);
    project.deleteTodo(todoId);
    this.saveProjectsStorage(projects);
  }
}
