import React from 'react'
import { useFetchImages } from '../../hooks/useFetchImages';
import { ImageGridItem } from './ImageGridItem';

export const ImageGrid = ({category}) => {

    const {data: images, loading} = useFetchImages(category);

    return (
        <div className="imageGrid">
            <h3>Results of {category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="cardGrid"> 
                { images.map( img => ( <ImageGridItem key = { img.id } { ...img } /> ) ) } 
            </div>
        </div>
    )
}
