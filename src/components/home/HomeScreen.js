import React from 'react'
import { Navbar } from '../ui/Navbar'
import { PixaBayApp } from '../imageGrid/PixaBayApp'

export const  HomeScreen = () => {

    return (
        <>
            <Navbar />
            <PixaBayApp />
        </>
    )
}

export default HomeScreen
