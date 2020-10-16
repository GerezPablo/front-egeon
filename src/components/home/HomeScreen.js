import React from 'react'
import { Navbar } from '../ui/Navbar'
import { HomeModal } from './HomeModal'
import { PixaBayApp } from '../imageGrid/PixaBayApp'

export const  HomeScreen = () => {

    return (
        <>
            <Navbar />
            <PixaBayApp />
            <HomeModal />
        </>
    )
}

export default HomeScreen
