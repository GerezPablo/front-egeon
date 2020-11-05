import React from 'react';
import { Navbar } from '../ui/Navbar';
import { Footer } from '../ui/Footer';
import { FavsGrid } from '../Gifs/FavsGrid';
import { useFavsGifs } from '../../hooks/useFetchedGifs';


export const FavsScreen = () => {
    
    const {data: gifs, loading} = useFavsGifs();

    return (
        <>
            <Navbar />
            <FavsGrid />
            <Footer />
        </>
    )
}


export default FavsScreen;