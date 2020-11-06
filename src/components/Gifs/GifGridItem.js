import React from 'react'
import './styles.css';

export const GifGridItem = ({ title, url }) => {


    const faved = () => {
        console.log("faved");
    }

    const unFaved = () => {
        console.log("unfaved");
    }

    return (
        <div className="card animate__animated animate__fadeIn" 
            style={ {'width': '18rem','marginBottom':'4%', 'align':'center'} }>

            <span class="border border-dark rounded-top">
                <img src={url} className="card-img-top " alt={title} />
                <p className="card-text">{title}</p>      
            </span>
         
        </div>
    )
}