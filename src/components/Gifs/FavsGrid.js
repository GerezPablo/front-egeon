import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFavsGifs } from '../../hooks/useFetchedGifs';

export const FavsGrid = () => {

    const {data: gifs, loading} = useFavsGifs();

    return (
        <>
            <h3 style={{'marginLeft':'1vw', 'marginBottom':'5vh',  'color': '#022CD6' }}>The most searched</h3>
            
            
            {
                loading && 
                <div className="purple-lighten-1" style={{display: 'flex', 'justifyContent':'center'}}> 
                    <div className="spinner-border text-primary " style={{"width": "6rem", "height": "6rem"}} role="status"/>
                </div>
            }


            <div className='text-primary flexbox'>
                { gifs.map( gif => ( <GifGridItem key = { gif._id } { ...gif } /> ) ) } 
            </div>
        </>
    )
}