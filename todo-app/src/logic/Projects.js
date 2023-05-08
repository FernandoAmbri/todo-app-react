import Project from "./Project";

export default class Projects {
  constructor() {
    this.projects = [new Project("Inbox"), new Project("Actuales")];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projectsArray) {
    this.projects = projectsArray;
  }

  getProject(name) {
    return this.projects.find((item) => item.getName() === name);
  }

  getProjectIndex(projectName) {
    return this.projects.findIndex(
      (project) => project.getName() === projectName
    );
  }

  addProject(name) {
    if (this.getProject(name)) return;
    this.projects = this.projects.concat(new Project(name));
  }

  deleteProject(id) {
    this.projects = this.projects.filter((item) => item.getId() !== id);
  }
}
