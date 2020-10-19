import React from 'react'
import pixabayLogo from './pixabay-logo.png'


export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                <img src={pixabayLogo} alt="pixabay logo" className="logo-navbar"></img>
            </span>

            <button className="btn btn-danger">
                <i className="fas fa-sign-out-alt"/>
                <span> Log out</span>
            </button>
        </div>
    )
}
