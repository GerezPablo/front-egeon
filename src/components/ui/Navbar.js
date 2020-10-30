import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.auth);
    
    const handleLogOut = () => { dispatch (startLogout() ) };


    return (    
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">{username}</span>
            <h1>Egeon</h1> 
            <button className="btn btn-danger" onClick={handleLogOut}>
                <i className="fas fa-sign-out-alt"/>
                <span> Log out</span>
            </button>
        </div>
    )
}
