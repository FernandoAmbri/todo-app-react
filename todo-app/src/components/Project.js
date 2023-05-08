import React from "react";
import { FaFile, FaTrashRestore } from "react-icons/fa";

function Project({ project, deleteProject, setCurrentProject }) {
  return (
    <>
      <div className="project-row section">
        <div
          onClick={() => {
            setCurrentProject(project.getName());
          }}
        >
          <FaFile className="project-icon" />
          <span id="name-project">{project.getName()}</span>
        </div>
        <button
          className="btn-delete-project"
          onClick={() => {
            deleteProject(project.getId());
          }}
        >
          <FaTrashRestore />
        </button>
      </div>
    </>
  );
}

export default Project;
