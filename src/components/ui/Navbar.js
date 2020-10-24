import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';

import pixabayLogo from './pixabay-logo.png'


export const Navbar = () => {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.auth);
    
    const handleLogOut = () => { dispatch (startLogout() ) };


    return (    

        <div className="navbar navbar-dark bg-dark mb-4">
            <h3>{username}</h3> 
            <span className="navbar-brand">
                <img src={pixabayLogo} alt="pixabay logo" className="logo-navbar"></img>
            </span>

            <button className="btn btn-danger" onClick={handleLogOut}>
                <i className="fas fa-sign-out-alt"/>
                <span> Log out</span>
            </button>
        </div>
    )
}
