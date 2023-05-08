import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import FormTodo from "./FormTodo";
import Todo from "./Todo";

function Content({
  title,
  todoList,
  handleAddTodo,
  handleUpdateTodo,
  handleDeleteTodo,
}) {
  const [showForm, setShowForm] = useState(false);

  function addTodo(todo) {
    handleAddTodo(title, todo);
  }

  function deleteTodo(id) {
    handleDeleteTodo(title, id);
  }

  function updateTodo(id, todo) {
    handleUpdateTodo(title, id, todo);
  }

  return (
    <>
      <div className="content">
        <h1>{title}</h1>
        <div className="task-list">
          {todoList.map((item) => {
            return (
              <Todo
                key={item.getId()}
                todoInfo={item}
                handleUpdateTodo={updateTodo}
                handleDeleteTodo={deleteTodo}
              />
            );
          })}
        </div>
        <button
          className="add-task"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          <FaPlus /> Agregar tarea
        </button>
        {showForm && (
          <FormTodo
            todo={false}
            setShowForm={setShowForm}
            handleActionTodo={addTodo}
          />
        )}
      </div>
    </>
  );
}

export default Content;
