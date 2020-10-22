import { fetchWoToken } from '../helpers/fetch';
import {types} from '../types/types'
import Swal from 'sweetalert2';

export const startLogin = ( email, password ) => {
    
    return async(dispatch) => {

        const res = await fetchWoToken( 'auth', { email, password }, 'POST' );
        const body = await res.json();
        const {errors} = body;
        console.log(res.status);

        if(res.status === 400) {
            if(errors !== undefined) {

                //Show validations for email input
                if (errors.email !== undefined) {  return Swal.fire('Something gone wrong', errors.email.msg, 'error'); }
                
                //Show validations for password input
                if(errors.password !== undefined) { return Swal.fire('Something gone wrong', errors.password.msg, 'error');}

            } else { Swal.fire('Something gone wrong', body.msg, 'error')}

        } else {
            Swal.fire('Logged In','' ,'success') 
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-imit-date', new Date().getTime())
            dispatch( 
                login( { mail: body.mail, uid: body.uid }) 
            );
        }
    }
}

const login = (user) =>(
    {
        type: types.authLogin,
        payload:user
    }
)