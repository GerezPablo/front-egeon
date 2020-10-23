import React from 'react';
import './login.css';
import pixabayLogo from '../ui/pixabay-logo.png'; 
import { useDispatch } from 'react-redux'; 
import { useForm } from '../../hooks/useForm';
import { startLogin , startRegister} from '../../actions/auth';
import Swal from 'sweetalert2';

export const LoginScreen = () => {
    const dispatch = useDispatch()

    //Login 
    const [formLoginValues, handleLoginInputChange]  = useForm({
        loginEmail: '',
        loginPassword: ''
    });

    const {loginEmail, loginPassword} = formLoginValues;

    const handleLogin = (e) => {
        e.preventDefault();    
        dispatch(startLogin(loginEmail, loginPassword));
    }



    //Register
    const [formRegisterValues, handleRegisterInputChange]  = useForm({
        registerUsername: '',
        registerEmail: '',
        registerPassword: '',
        registerPassword2: ''
    });

    const {registerUsername, registerEmail, registerPassword, registerPassword2} = formRegisterValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if(registerPassword !==  registerPassword2) { return Swal.fire("Something gone wrong", "The passwords must be the same", "error");}
        dispatch(startRegister(registerUsername, registerEmail, registerPassword));
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
                    <form onSubmit={handleRegister}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                name="registerUsername"
                                value={registerUsername}
                                onChange={handleRegisterInputChange} 
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
        </div>
        </>
    )
}

export default LoginScreen  