import { useState, useEffect } from 'react'
import { fetchImages, fetchTrendingTopic } from '../helpers/fetch';


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


export const useFavsGifs = ( ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        fetchTrendingTopic()
        .then( gifs => {
            setState({
                data: gifs,
                loading: false
            });
        })
    }, [])

    return state;
}