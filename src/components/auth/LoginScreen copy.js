import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useForm } from '../../hooks/useForm';
import { startLogin} from '../../actions/auth';
import { NavLink} from 'react-router-dom';
import './login.css';

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
                <a class="navbar-brand">
                    <img src="https://github.com/GerezPablo/front-egeon/blob/main/public/favicon.png" width="30" height="30" alt="" />
                     Egeon
                </a>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link">
                                <NavLink  className="nav-link" to="/register">Sign up</NavLink>
                            </a> 
                        </li>
                    </ul>
                </div> */}
            </nav>

            <div className="container login-container">
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
                                autoComplete='off'  
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