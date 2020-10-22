import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { ImageGrid } from './ImageGrid';

export const PixaBayApp = () => {

    const [category, setCategory] = useState("homes");

    return (
        <div>
            <AddCategory setCategory={setCategory}/>

            <hr />
            <ol> 
                <ImageGrid category={category} />
            </ol>
        </div>
    )
}
