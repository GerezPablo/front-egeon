import React from 'react'
import { Navbar } from '../ui/Navbar'
import { HomeEvent } from './HomeEvent'
import { HomeModal } from './HomeModal'
import { ImagesViewer } from './ImagesViewer'

export const  HomeScreen = () => {
    const eventStyleGetter = (event, isSelected) => {
        console.log(event, isSelected);
    }
    return (
        <div className="imagesScreen">
            <Navbar />
            <ImagesViewer
            components={{event:HomeEvent}}
             />
            <HomeModal />
        </div>
    )
}

export default HomeScreen
