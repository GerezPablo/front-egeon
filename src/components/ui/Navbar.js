import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.auth);
    
    const handleLogOut = () => { dispatch (startLogout() ) };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark indigo mb-4" style={{'background-color':'#0273F7'}}>

        <a className="navbar-brand" style={{'color':'white'}}>{username}</a>

        <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/home" className="nav-link" style={{'color':'white'}}>Home</Link>
                </li>

                <li className="nav-item active">
                    <Link to="/home" className="nav-link" style={{'color':'white'}}>Favorites</Link>
                </li> 

            </ul>

            <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item">
                <a className="waves-effect waves-light">
                    <button className="btn btn-unique" onClick={handleLogOut}>
                        <span>Log out​​​​  </span>
                        <i className="fas fa-sign-out-alt"/>
                    </button>
                </a>
            </li>
            
            </ul>
        </div>
        </nav>

    )
}