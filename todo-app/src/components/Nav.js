import React, { useState } from "react";
import { FaHome, FaBars, FaSearch } from "react-icons/fa";

function Navbar({ showSidebar, setShowSidebar, handleSearchTodo }) {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <nav>
        <div className="menu-container">
          <ul className="menu">
            <li>
              <button
                className="btn-nav-icon"
                onClick={() => {
                  setShowSidebar(!showSidebar);
                }}
              >
                <FaBars />
              </button>
            </li>
            <li>
              <button className="btn-nav-icon">
                <FaHome />
              </button>
            </li>
            <li>
              <div className="search-container">
                <FaSearch />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSearchTodo(searchText);
                    setSearchText("");
                  }}
                >
                  <input
                    type="text"
                    placeholder="Buscar tarea..."
                    id="search-todo"
                    className="search-todo"
                    value={searchText}
                    onChange={(e) => {
                      setSearchText(e.target.value);
                    }}
                  />
                  <button type="submit" className="btn-search">
                    Buscar
                  </button>
                </form>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
