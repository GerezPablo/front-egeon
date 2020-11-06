import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { SearchBar } from '../ui/SearchBar';
import { GifGrid } from '../Gifs/GifGrid';
import { Footer } from '../ui/Footer';
import { Pagination } from '../ui/Pagination';


export const  HomeScreen = () => {
    const [topic, setTopic] = useState('Broly');
    const [page, setPage] = useState(1);   

    return (
        <>
            <Navbar />
            <SearchBar setTopic={ setTopic } />
            <Pagination page={page} setPage={ setPage } /> 
            <GifGrid key={ topic } topic={ topic } page={page}/>
            <Footer /> 
        </>
    )
}

export default HomeScreen;