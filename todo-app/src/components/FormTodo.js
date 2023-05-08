import React, { useState } from "react";

function FormTodo({ todo, setShowForm, handleActionTodo }) {
  const [taskInfo, setTaskInfo] = useState({
    name: todo ? todo.getTitle() : "",
    description: todo ? todo.getDescription() : "",
    date: todo ? todo.getDueDate() : "",
    priority: todo ? todo.getPriority() : "",
  });

  function clearFields() {
    setTaskInfo({ name: "", description: "", date: "", priority: "" });
  }

  function handleAction() {
    if (todo) {
      handleActionTodo(todo.getId(), [...Object.values(taskInfo)]);
    } else {
      handleActionTodo([...Object.values(taskInfo)]);
    }
  }

  return (
    <>
      <form
        className="form-task-card"
        onSubmit={(e) => {
          e.preventDefault();
          handleAction();
          clearFields();
          setShowForm(false);
        }}
      >
        <div className="task-card">
          <input
            type="text"
            id="task-name"
            placeholder="Nombre"
            minLength="1"
            maxLength="150"
            required
            value={taskInfo.name}
            onChange={(e) => {
              setTaskInfo({ ...taskInfo, name: e.target.value });
            }}
          />
          <textarea
            name="description"
            id="task-description"
            placeholder="Descripción"
            cols="30"
            rows="10"
            value={taskInfo.description}
            onChange={(e) => {
              setTaskInfo({ ...taskInfo, description: e.target.value });
            }}
          ></textarea>
          <div className="selectors">
            <div>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                autoComplete="true"
                value={taskInfo.date}
                onChange={(e) => {
                  setTaskInfo({ ...taskInfo, date: e.target.value });
                }}
              />
            </div>
            <select
              name="priority"
              id="task-priority"
              value={taskInfo.priority}
              onChange={(e) => {
                setTaskInfo({ ...taskInfo, priority: e.target.value });
              }}
            >
              <option value="" hidden>
                Prioridad
              </option>
              <option value="red">Muy importante</option>
              <option value="orange">Importante</option>
              <option value="yellow">Normal</option>
              <option value="blue">Posponer</option>
            </select>
          </div>
        </div>
        <div className="buttons-card">
          <button
            type="button"
            className="btn-cancel cancel"
            onClick={() => {
              setShowForm(false);
            }}
          >
            Cancelar
          </button>
          <button type="submit" className="btn-add">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTodo;
