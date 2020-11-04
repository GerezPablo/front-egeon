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
            <nav class="navbar navbar-dark primary-color">
                <a class="navbar-brand" href="#">
                    <img src="./imagotype.png" height="30" alt="mdb logo" />
                </a>
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