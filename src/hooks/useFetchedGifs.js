import { useState, useEffect } from 'react'
import { fetchImages, fetchTrendingTopic } from '../helpers/fetch';


export const useFetchedGifs = ( topic, page ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect ( () => {
        fetchImages(topic, 5, page)
        .then( gifs => {
            setState({
                data: gifs,
                loading: false
            });
        })
    }, [topic, page])

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