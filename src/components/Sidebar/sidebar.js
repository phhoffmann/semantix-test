import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Page1 from "../Page1/page1"
import Page2 from "../Page2/page2"
import "../../App.scss"
import "../Sidebar/sidebar.scss"

const Sidebar = () => {
  return (
    <div className="content">
      <Router>
        <section className="sidebar-big" id="sidebar">
          <h1 className="sidebar-big_title">Semantix</h1>
          <nav className="nav-group">
            <div>
              <NavLink to="/page1" className="nav-link" activeClassName="active">
                <span id="page1-icon" className="icon" />
                Page 1
                </NavLink>
            </div>
            <div>
              <NavLink to="/page2" className="nav-link" activeClassName="active">
                <span id="page2-icon" className="icon" />
                Page 2
          </NavLink>
            </div>
          </nav>
        </section>

        <Route path="/page1/" component={Page1} />
        <Route path="/page2/" component={Page2} />
      </Router>
    </div>
  );
}

export default Sidebar;
