import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchedGifs } from '../../hooks/useFetchedGifs';

export const GifGrid = ({ topic }) => {

    const {data: gifs, loading} = useFetchedGifs(topic);

    return (
        <>
            <h3 style={{'marginLeft':'1vw', 'marginBottom':'5vh',  'color': '#022CD6' }}>Results of: {topic}</h3>
            
            
            {
                loading && 
                <div classname="purple lighten-1" style={{display: 'flex', 'justify-content':'center'}}> 
                    <div className="spinner-border text-primary " style={{"width": "6rem", "height": "6rem"}} role="status"/>
                </div>
            }


            <div className='text-primary flexbox'>
                { gifs.map( gif => ( <GifGridItem key = { gif.id } { ...gif } /> ) ) } 
            </div>
        </>
    )
}