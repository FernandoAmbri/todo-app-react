import React, { useState, useEffect } from "react";

import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App({ storage }) {
  const [currentProject, setCurrentProject] = useState("Inbox");
  const [showSidebar, setShowSidebar] = useState(true);
  const [project, setProject] = useState(
    storage.getProjectStorage(currentProject)
  );
  const [todoList, setTodoList] = useState(project.getTodos());
  const [projects, setProjects] = useState(storage.getAllProjects());

  function addProject(name) {
    storage.addProjectStorage(name);
    setProjects(storage.getAllProjects());
  }

  function deleteProject(id) {
    storage.removeProjectStorage(id);
    setProjects(storage.getAllProjects());
  }

  function addTodo(name, todo) {
    storage.addTodoStorage(name, todo);
    setTodoList(storage.getProjectStorage(name).getTodos());
  }

  function updateTodo(name, idTodo, todo) {
    storage.updateTodoStorage(name, idTodo, todo);
    setTodoList(storage.getProjectStorage(name).getTodos());
  }

  function deleteTodo(name, idTodo) {
    storage.deleteTodoStorage(name, idTodo);
    setTodoList(storage.getProjectStorage(name).getTodos());
  }

  function searchTodo(todoName) {
    const projectName = storage.getTodoStorage(todoName);
    if (projectName) {
      setCurrentProject(projectName);
    }
  }

  useEffect(() => {
    const project = storage.getProjectStorage(currentProject);
    setProject(project);
    setTodoList(project.getTodos());
  }, [currentProject]);

  return (
    <>
      <Navbar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        handleSearchTodo={searchTodo}
      />
      <div className="main">
        {showSidebar && (
          <Sidebar
            projects={projects}
            addProject={addProject}
            deleteProject={deleteProject}
            setCurrentProject={setCurrentProject}
          />
        )}
        <Content
          title={currentProject}
          todoList={todoList}
          handleAddTodo={addTodo}
          handleUpdateTodo={updateTodo}
          handleDeleteTodo={deleteTodo}
        />
      </div>
    </>
  );
}

export default App;
