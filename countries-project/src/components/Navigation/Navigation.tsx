import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div className="navigation-wrapper">
      <nav className="project-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" to={"countries"} end>
              {" "}
              All world Countries
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"continents"} end>
              {" "}
              All World Continents
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
