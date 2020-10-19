import {apiRequest} from './baseURL'

export const fetchWoToken = (endpoint, {email, password}, method) => {

  if ( method === 'GET' ) {
    return apiRequest.get(endpoint)
    .then(res => {
      console.log(res);
    });
  } 
  else {
    return apiRequest.post(endpoint, {
      email: email,
      password: password
    })
    .then(response =>  {
      console.log(response.data);
    });
  };
};