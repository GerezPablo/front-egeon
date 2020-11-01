import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { SearchBar } from '../ui/SearchBar';
import { GifGrid } from '../Gifs/GifGrid';
import { Footer } from '../ui/Footer';

export const  HomeScreen = () => {
    const [topic, setTopic] = useState('Broly');
    return (
        <div>
            <Navbar />
            <SearchBar   setTopic={ setTopic } />
            <GifGrid key={ topic } topic={ topic } />
            <Footer />
        </div>
    )
}

export default HomeScreen;