import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchedGifs } from '../../hooks/useFetchedGifs';

export const GifGrid = ({ topic }) => {

    const {data: gifs, loading} = useFetchedGifs(topic);

    return (
        <div className="imageGrid">
            <h3>Results of: {topic}</h3>

            { loading && <p className="animate__animated animate__flash" id="loading">Loading...</p> }

        
            <div className="cardGrid"> 
                { gifs.map( gif => ( <GifGridItem key = { gif.id } { ...gif } /> ) ) } 
            </div>
        </div>
    )
}
