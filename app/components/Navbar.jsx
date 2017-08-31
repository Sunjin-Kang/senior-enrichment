import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <NavLink to='/' className="navbar-brand navbar-brand-center">
          <img src="../../images/Veritas_red.svg" width="41" height="41" className="d-inline-block align-top" alt=""/>
        </NavLink>

        <NavLink to='/' className="navbar-brand">
          <h3><font color='#a51c30'>Veritas</font></h3>
        </NavLink>


        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to='/planets' className="nav-link"><h4>Planets</h4></NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/students' className="nav-link"><h4>Students</h4></NavLink>
          </li>
        </ul>


        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search Student" aria-label="Search"/>
          <button className="btn btn-outline-light bg-danger my-2 my-sm-0" type="submit">Search</button>
        </form>

      </div>
    </nav>
  );
}


