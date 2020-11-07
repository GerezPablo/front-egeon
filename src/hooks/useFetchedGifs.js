import { useState, useEffect } from 'react'
import { fetchImages } from '../helpers/fetch';


export const useFetchedGifs = ( topic, page ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        fetchImages(topic, 30, page)
        .then( gifs => {
            setState({
                data: gifs,
                loading: false
            });
        })
    }, [topic, page])

    return state;
}