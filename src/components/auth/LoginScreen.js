import React from 'react';
import './login.css';
import pixabayLogo from '../ui/pixabay-logo.png'; 
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [formLoginValues, handleLoginInputChange]  = useForm({
        loginEmail: 'pablo@gmail.com',
        loginPassword: '1234567'
    });
    
    const {loginEmail, loginPassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(loginEmail, loginPassword));
    }
    


    return (
        <>
        <img src={pixabayLogo} alt="pixabay logo" />
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Login </h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email or Username"
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
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>Register</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password" 
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
        </div>
        </>
    )
}

export default LoginScreen
