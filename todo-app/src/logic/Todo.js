import { nanoid } from "nanoid";

export default class Todo {
  constructor(
    id = nanoid(),
    projectName = "",
    title = "",
    description = "",
    dueDate = "",
    priority = ""
  ) {
    this.id = id;
    this.projectName = projectName;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getProjectName() {
    return this.projectName;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }
}
