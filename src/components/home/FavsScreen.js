import React, {useState} from 'react';
import { Navbar } from '../ui/Navbar';
import { GifGrid } from '../Gifs/GifGrid';
import { Footer } from '../ui/Footer';
import { Pagination } from '../ui/Pagination';
import { fetchTrendingTopic } from '../../helpers/fetch';


export const  FavScreen = () => {
    const topic = fetchTrendingTopic().then(async(res) => {return await res});
    const [page, setPage] = useState(1);   

    console.log(topic);
    return (
        <>
            <Navbar />
            <Pagination page={page} setPage={ setPage } /> 
            <GifGrid key={ topic } topic={ topic } page={page}/>
            <Footer />  
        </>
    )
}

export default FavScreen;