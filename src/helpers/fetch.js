const baseUrl = process.env.REACT_APP_API_URL;

export const fetchWoToken = ( endpoint, data, method) => {

  const url = `${ baseUrl }/${ endpoint }`;

  if ( method === 'GET' ) { return fetch( url ); }
  else {
      return fetch( url, {
        method,
        headers: { 
          'Content-type': 'application/json'
        },
        body: JSON.stringify( data )
      });
  }
}

export const fetchWToken = ( endpoint, data, method = 'GET') => {

  const url = `${ baseUrl }/${ endpoint }`;
  const token = localStorage.getItem('token') || '';

  if ( method === 'GET' ) { return fetch( url, {headers:{'x-token': token}} ); }
  else {
    return fetch( url, {
      method,
      headers: { 
        'Content-type': 'application/json',
        'x-token': token 
      }, body: JSON.stringify( data )
    });
  }
}

export const fetchImages = async(topic, limit, offset) => {

  const url = `${ baseUrl}/img?topic=${topic}&limit=${limit}&offset=${offset}`;
  const res = await fetch(url);

  return res.json().then (res => res.results);
}
