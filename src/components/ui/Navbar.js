import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {startLogout} from '../../actions/auth';

export const Navbar = () => {
    const dispatch = useDispatch();

    const { username } = useSelector(state => state.auth);
    
    const handleLogOut = () => { dispatch (startLogout() ) };

    return (
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
        <a class="navbar-brand">{username}</a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>

                <li class="nav-item active">
                    <a class="nav-link" href="favs">Favorites
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <a class="d-inline-flex p-2" style={{'aligncontent':'center'}}>Egeon</a>
            </ul>

            <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item">
                <a class="waves-effect waves-light">
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