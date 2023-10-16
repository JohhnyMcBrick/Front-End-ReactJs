import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-white">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon">&#9733;</span> {/* Agregar el icono de hamburguesa */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/genre">
                ❖ Módulo de Género
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/director">
                ❖ Módulo de Director
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/productioncompany">
                ❖ Módulo Productora
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/mediatype">
                ❖ Módulo Tipo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/media">
                ❖ Módulo de Media (Películas y series)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
