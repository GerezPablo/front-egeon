import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                PixaBay Web
            </span>

            <button className="btn btn-danger">
                <i className="fas fa-sign-out-alt"/>
                <span> Log out</span>
            </button>
        </div>
    )
}
