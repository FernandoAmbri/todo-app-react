import React, { useState } from "react";
import { FaPen } from "react-icons/fa";
import FormTodo from "./FormTodo";

function Todo({ todoInfo, handleUpdateTodo, handleDeleteTodo }) {
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <FormTodo
        todo={todoInfo}
        setShowForm={setShowForm}
        handleActionTodo={handleUpdateTodo}
      />
    );
  }

  return (
    <>
      <div
        className="task"
        style={{ borderLeft: `2px solid ${todoInfo.getPriority()}` }}
      >
        <input
          type="checkbox"
          id="task-finished"
          onChange={() => {
            handleDeleteTodo(todoInfo.getId());
          }}
        />
        <div>
          <span>{todoInfo.getTitle()}</span>
          <span>{todoInfo.getDescription()}</span>
          <span>{todoInfo.getDueDate()}</span>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          <FaPen />
        </button>
      </div>
    </>
  );
}

export default Todo;
