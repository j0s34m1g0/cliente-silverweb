import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <p className="navbar-brand">DASHBOARD</p>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">link prueba</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navigation;