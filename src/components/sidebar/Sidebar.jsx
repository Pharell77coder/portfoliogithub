import React from 'react';
import './sidebar.css';
import Logo from "../../assets/logo.svg"

const Sidebar = () => {
  return (
    <aside className='aside'>
      <a>
        <img src={Logo} alt="" />
      </a>
      <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">

            <li className="nav_item">
              <a href="#home" className="nav__link">
                <i className="icon-home"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#about" className="nav__link">
                <i className="icon-user-following"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#resume" className="nav__link">
                <i className="icon-graduation"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#portfolio" className="nav__link">
                <i className="icon-layers"></i>
              </a>
            </li>

            <li className="nav_item">
              <a href="#" className="nav__link">
                <i className="icon-"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
    </aside>
  )
}

export default Sidebar;