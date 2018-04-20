import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Expensify</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Expense Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="#">Travel Expenses (Gas, Lodging, Travel Dining, etc...)</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Food Expenses (Groceries for home, Lunch, Charity, etc...)</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Home (Repairs, Utilities, Landscape, etc...)</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="#">Auto (Repairs, Service Checkups, Insurance, etc...)</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/team" activeClassName="active" className="nav-link">Meet the Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/careers" activeClassName="active" className="nav-link">Careers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" activeClassName="active" className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Expenses..." aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
}
export default Navbar;