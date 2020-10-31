import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { SearchTopic } from '../ui/SearchTopic';
import { GifGrid } from '../Gifs/GifGrid';
import { Footer } from '../ui/Footer';

export const  HomeScreen = () => {
    const [topic, setTopic] = useState('random');
    return (
        <>
            <Navbar />
            <SearchTopic setTopic={ setTopic } />
            <GifGrid 
                    key={ topic }
                    topic={ topic }
                />
                <Footer />
        </>
    )
}

export default HomeScreen;