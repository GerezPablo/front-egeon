import { useEffect, useState } from 'react';
import {getImages} from '../helpers/getImages';


export const useFetchImages = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true 
    });

    useEffect(() => { 
        getImages(category)
        .then (img => {
            setstate({
                data: img,
                loading:false
            });    
        });
    }, [category]);

    return state;
}