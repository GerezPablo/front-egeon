import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';
import { NavLink} from 'react-router-dom';
import isotype from '../../img/isotype.png'


export const Navbar = () => {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.auth);
    
    const handleLogOut = () => { dispatch (startLogout() ) };

    return (
        <nav className="mb-1 navbar navbar-expand-lg grey navbar-dark darken-4">

            <a className="navbar-brand" href="!#"> <img src={isotype} style={{width:'5vh'}} alt="nav-bar brand"/> </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                <ul className="navbar-nav mr-auto">
                    
                    <li className="nav-item" href="!#">
                        <NavLink  className="nav-link" to="/home">Home</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto nav-flex-icons">

                    <li className="nav-item" href="!#">
                        <a className="nav-link waves-effect waves-light" href="https://twitter.com/P4BL1SK1">
                        <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    
                    <li className="nav-item" href="!#">
                        <a className="nav-link waves-effect waves-light" href="https://github.com/GerezPablo">
                        <i className="fab fa-github"></i>
                        </a>
                    </li>
                    
                    <li className="nav-item dropdown" >
                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            href="!#" aria-expanded="false" > {username} </a>

                        <div className="dropdown-menu dropdown-menu-right dropdown-default"
                            aria-labelledby="navbarDropdownMenuLink-333">
                            <a className="dropdown-item" onClick={handleLogOut} href="!#">Log out</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}