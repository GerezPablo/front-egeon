import { useState, useEffect } from 'react'
import { fetchImages } from '../helpers/fetch';


export const useFetchGifs = async( topic ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        fetchImages(topic)
        .then( gifs => {
            console.log('gifs', gifs);
            
            setState({
                data: gifs,
                loading: false
            });
        })
    }, [topic])

    return state;
}