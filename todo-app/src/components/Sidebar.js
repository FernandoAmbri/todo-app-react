import React, { useEffect, useState } from "react";
import {
  FaInbox,
  FaCalendarCheck,
  FaChevronRight,
  FaChevronDown,
  FaPlus,
} from "react-icons/fa";
import Project from "./Project";

function Sidebar({ setCurrentProject, projects, deleteProject, addProject }) {
  const [changeArrow, setchangeArrow] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <aside className="sidebar">
        <div className="sections">
          <div
            className="inbox section"
            onClick={() => {
              setCurrentProject("Inbox");
            }}
          >
            <div>
              <FaInbox />
              <h3>Inbox</h3>
            </div>
          </div>
          <div
            className="today section"
            onClick={() => {
              setCurrentProject("Actuales");
            }}
          >
            <div>
              <FaCalendarCheck />
              <h3>Actuales</h3>
            </div>
          </div>
        </div>
        <div className="projects">
          <div>
            <button
              className="show-projects sidebar-icon"
              onClick={() => {
                setchangeArrow(!changeArrow);
              }}
            >
              {changeArrow ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            <h3>Proyectos</h3>
            <button
              className="add-project sidebar-icon"
              onClick={() => {
                setShowForm(true);
              }}
            >
              <FaPlus id="add-project" />
            </button>
          </div>
          <div className="container-projects">
            {changeArrow && (
              <>
                {projects
                  .filter(
                    (item) =>
                      item.getName() !== "Inbox" &&
                      item.getName() !== "Actuales"
                  )
                  .map((item) => {
                    return (
                      <Project
                        key={item.getId()}
                        project={item}
                        deleteProject={deleteProject}
                        setCurrentProject={setCurrentProject}
                      />
                    );
                  })}
              </>
            )}
          </div>
        </div>
      </aside>
      {showForm && (
        <>
          <form
            className="form-add-project"
            onSubmit={(e) => {
              e.preventDefault();
              if (!projectName) return;
              addProject(projectName);
              setProjectName("");
              setShowForm(false);
            }}
          >
            <div>
              <label htmlFor="project-name">Nombre</label>
              <input
                type="text"
                id="project-name"
                name="project-name"
                value={projectName}
                onChange={(e) => {
                  setProjectName(e.target.value);
                }}
                required
              />
            </div>
            <div className="buttons-card">
              <button
                type="button"
                className="btn-cancel-project cancel"
                onClick={() => {
                  setShowForm(false);
                }}
              >
                Cancelar
              </button>
              <button type="submit" className="btn-add">
                Agregar
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default Sidebar;
