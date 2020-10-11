import React from 'react'
import { Navbar } from '../ui/Navbar'
import { HomeModal } from './HomeModal'
import { ImagesViewer } from './ImagesViewer'

function HomeScreen() {
    return (
        <div className="imagesScreen">
            <Navbar />
            <ImagesViewer />
            <HomeModal />
        </div>
    )
}

export default HomeScreen
