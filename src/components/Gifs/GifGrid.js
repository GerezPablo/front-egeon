import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchedGifs } from '../../hooks/useFetchedGifs';

export const GifGrid = ({ topic }) => {

    const {data: gifs, loading} = useFetchedGifs(topic);

    return (
        <div className='text-primary'>
            <h3>Results of: {topic}</h3>

            { loading && <p className="spinner-border text-danger" style={{'width':'30px'}}> </p> }    
        
            <div className="cardGrid"> 
                { gifs.map( gif => ( <GifGridItem key = { gif.id } { ...gif } /> ) ) } 
            </div>
            
        </div>
    )
}
