import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchedGifs } from '../../hooks/useFetchedGifs';

export const GifGrid = ( {topic, page}) => {

    const {data: gifs, loading} = useFetchedGifs(topic, page);
    const spinner = () => {
        return (
        <div className="purple-lighten-1" style={{display: 'flex', 'justifyContent':'center'}}> 
            <div className="spinner-border text-primary " style={{"width": "6rem", "height": "6rem"}} role="status"/>
        </div>)
    }

    return (
        <>
            <h3 style={{'marginLeft':'2vw', 'marginBottom':'5vh',  'color': 'lightBlue'}}>Results of: {topic}</h3>
            
            
            { loading && spinner() }

            <div className='text-primary flexbox'>
                { 
                    gifs.map( gif => ( <GifGridItem key = { gifs.id } { ...gif } /> ) ) } 
            </div>
        </>
    )
}