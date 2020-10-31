import { useState, useEffect } from 'react'
import { fetchImages } from '../helpers/fetch';


export const useFetchedGifs = ( topic ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        fetchImages(topic)
        .then( gifs => {
            setState({
                data: gifs,
                loading: false
            });
        })
    }, [topic])

    return state;
}