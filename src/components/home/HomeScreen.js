import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { SearchTopic } from '../ui/SearchTopic';
import { GifGrid } from '../Gifs/GifGrid';

export const  HomeScreen = () => {
    const [topic, setTopic] = useState(['Dragon Ball']);
    return (
        <>
            <Navbar />
            <SearchTopic setTopic={ setTopic } />
            <GifGrid 
                    key={ topic }
                    topic={ topic }
                />
        </>
    )
}

export default HomeScreen;