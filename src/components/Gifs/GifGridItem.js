import React from 'react'
import { startDownload } from '../../actions/img'
import './styles.css';

export const GifGridItem = ({ title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn" 
        style={ {'width': '18rem','marginBottom':'4%', 'align':'center'} } id={title}>
            <img src={url} className="card-img-top" alt={title} />
                <div className="card-body">
                    <p className="card-text">{title}</p> 
                    <a className="btn btn-secondary" onClick={startDownload}>
                        <i className="fas fa-download"></i>
                    </a>
                </div>
        </div>
    )
}