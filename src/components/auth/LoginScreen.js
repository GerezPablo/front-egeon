import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useForm } from '../../hooks/useForm';
import { startLogin} from '../../actions/auth';
import { NavLink} from 'react-router-dom';
import './login.css';


import imagotype from '../../img/imagotype.png';

export const LoginScreen = () => {
    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange]  = useForm({
        loginEmail: '',
        loginPassword: ''
    });

    const {loginEmail, loginPassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();    
        dispatch(startLogin(loginEmail, loginPassword));
    }


    return (
        <>
            <nav className="mb-1 navbar navbar-expand-lg purple navbar-dark darken-4">
                <a className="navbar-brand"/>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <NavLink  className="nav-link" to="/register">Sign up</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container login-container">
                <img src={imagotype} style={{width:'40vh',display:"block", marginLeft:"auto", marginRight:"auto"}}/>
                <div className="login-form">
                    <h3>Login </h3>  
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Login" 
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen  