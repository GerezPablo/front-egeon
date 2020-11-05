import React from 'react';
import { useDispatch } from 'react-redux'; 
import { useForm } from '../../hooks/useForm';
import { startRegister} from '../../actions/auth';
import { NavLink} from 'react-router-dom';
import './login.css';
import Swal from 'sweetalert2';

import isotype from '../../img/isotype.png';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    
    const [formRegisterValues, handleRegisterInputChange]  = useForm({
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',
        registerPassword2: ''
    });

    const {registerUsername, registerEmail, registerPassword, registerPassword2} = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(registerPassword !==  registerPassword2) { 
            return Swal.fire("Something gone wrong", "The passwords must be the same", "error");
        }
        
        dispatch(startRegister(registerUsername, registerEmail, registerPassword));
    }


    return (

        <>
            <nav className="mb-1 navbar navbar-expand-lg purple navbar-dark darken-4">
                <a className="navbar-brand" >
                    <img src={isotype} style={{width:'5vh'}}/>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
                    <ul className="navbar-nav ml-auto nav-flex-icons">
                        <li className="nav-item">
                            <a className="nav-link">
                                <NavLink  className="nav-link" to="/login">Sign In</NavLink>
                            </a> 
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container login-container">
                <div className="login-form">
                    <h3>Register</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="registerUsername"
                                value={registerUsername}
                                onChange={handleRegisterInputChange} 
                                autoComplete='off'
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={handleRegisterInputChange} 
                                autoComplete='off'
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                                name="registerPassword"
                                value={registerPassword}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password" 
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={handleRegisterInputChange} 
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Sign up" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default RegisterScreen;  