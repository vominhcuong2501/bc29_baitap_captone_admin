import React from "react";
import { NavLink } from "react-router-dom";
import './sideBar.scss'

export default function SideBar() {
  return (
    <div className="side-bar">
      <nav >
        <div>
          <ul style={{listStyle: 'none'}}>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                Users
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/filmlist">
                Films
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/showtime">
                Show-times
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
