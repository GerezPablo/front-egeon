import { fetchWoToken } from '../helpers/fetch';

export const startLogin = ( email, password ) => {
    return async() => {
        await fetchWoToken( 'auth', { email, password }, 'POST' );
    }
}
