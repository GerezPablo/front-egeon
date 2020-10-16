import React from 'react'

export const ImageGridItem = ({url, name}) => {

    return (
        <div className="img card animate__animated animate__fadeIn">
            <img src={url} alt={name}></img>
        </div>
    )
}
