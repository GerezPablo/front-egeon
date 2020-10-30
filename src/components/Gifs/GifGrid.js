import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../../hooks/useFetchGifs';

export const GifGrid = ({ topic }) => {

     const gifs =  useFetchGifs(topic);
     const {data, loading} = gifs;

     return (
        <div className="imageGrid">
            <h3>Results of: {topic}</h3>

            { loading && <p className="animate__animated animate__flash" id="loading">Loading...</p> }

        <div>{console.log(data)}</div>
            <div className="cardGrid"> 
                { gifs.map( gif => ( <GifGridItem key = { gif.id } { ...gif } /> ) ) } 
            </div>
        </div>
    )
}
