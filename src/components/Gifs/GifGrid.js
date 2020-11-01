import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchedGifs } from '../../hooks/useFetchedGifs';
import './styles.css';

export const GifGrid = ({ topic }) => {

    const {data: gifs, loading} = useFetchedGifs(topic);

    return (
        <>
            <h3 style={{'marginLeft':'1vw', 'marginBottom':'5vh'}}>Results of: {topic}</h3>
            
            {
                loading && 
                <div style={{display: 'flex', 'justify-content':'center'}}> 
                    <div className="spinner-border text-primary " style={{"width": "8rem", "height": "8rem"}} role="status"/>
                </div>
            }

            {/* GifGrid */}
            <div className='text-primary flexbox'>
                { gifs.map( gif => ( <GifGridItem key = { gif.id } { ...gif } /> ) ) } 
            </div>
        </>
    )
}