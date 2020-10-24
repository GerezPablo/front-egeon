import { fetchWoToken, fetchWToken } from '../helpers/fetch';
import {types} from '../types/types'
import Swal from 'sweetalert2';

export const startLogin = ( email, password ) => {
    
    return async(dispatch) => {

        const res = await fetchWoToken( 'auth', { email, password }, 'POST' );
        const {username, uid, token, msg, status, errors} = await res.json();

        if(status === 400) {
            if(errors !== undefined) {

                //Show validations for email input
                if (errors.email !== undefined) {  return Swal.fire('Something gone wrong', errors.email.msg, 'error'); }
                
                //Show validations for password input
                if(errors.password !== undefined) { return Swal.fire('Something gone wrong', errors.password.msg, 'error');}

            } else { Swal.fire('Something gone wrong', msg, 'error')}

        } else {
            Swal.fire({ icon: 'success', text: 'Logged in',showConfirmButton: false, timer:1000})
            localStorage.setItem('token', token);
            localStorage.setItem('token-imit-date', new Date().getTime());
            dispatch( 
                login( { username: username, uid: uid })
            );
        }
    }
}


export const startRegister = ( uname, email, password ) => {
    
    return async(dispatch) => {

        const res = await fetchWoToken( 'auth/register', { uname, email, password }, 'POST' );
        const {username, uid, token, msg, status, errors} = await res.json();
        

        if(status === 400) {
            if(errors !== undefined) {

                //Show validations for username input
                if (errors.username !== undefined) {  return Swal.fire('Something gone wrong', errors.username.msg, 'error'); }

                //Show validations for email input
                if (errors.email !== undefined) {  return Swal.fire('Something gone wrong', errors.email.msg, 'error'); }
                
                //Show validations for password input
                if(errors.password !== undefined) { return Swal.fire('Something gone wrong', errors.password.msg, 'error');}

            } else { Swal.fire('Something gone wrong', msg, 'error')}

        } else {
            localStorage.setItem('token', token)
            localStorage.setItem('token-imit-date', new Date().getTime())
            dispatch( 
                login( { username: username, uid: uid }) 
            );
        }
    }
}


export const startChecking = () => {
    
    return async(dispatch) => {

        const res = await fetchWToken( 'auth/renew');
        const body = await res.json();

        if(res.status === 400) { 
            Swal.fire('Something gone wrong', body.msg, 'error');
            dispatch(finishChecking());
        } 
        else {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-imit-date', new Date().getTime());
            dispatch( login( { username: body.username, uid: body.uid }) );
        }
    }
}

const finishChecking = () => ({ type: types.authCheckingFinished });


export const startLogout = () => {
    return (dispatch) => {
        localStorage.clear();
        dispatch( logout() );
    }
};

const login = (user) =>(
    {
        type: types.authLogin,
        payload:user
    }
);

const logout = () => { return ({ type:types.authLogout }) }