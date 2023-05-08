import { nanoid } from "nanoid";
import Todo from "./Todo";

export default class Project {
  constructor(name) {
    this.id = nanoid();
    this.name = name;
    this.todos = [];
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getTodos() {
    return this.todos;
  }

  setTodos(todos) {
    this.todos = todos;
  }

  getTodo(id) {
    return this.todos.find((item) => item.id === id);
  }

  getIndexTodo(id) {
    return this.todos.findIndex((item) => item.getId() === id);
  }

  addTodo(todo) {
    this.todos = this.todos.concat(new Todo(nanoid(), this.name, ...todo));
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(id, task) {
    this.todos = this.todos.map((todo) =>
      todo.getId() === id ? new Todo(id, this.name, ...task) : todo
    );
  }
}
