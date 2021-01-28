import React from 'react'
import TopSideCard from "./TopSideCard"
import { SidebarContainer } from '../styles/SidebarStyles'
import BottomSideCard from './BottomSideCard'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <TopSideCard />
            <BottomSideCard />
        </SidebarContainer>
    )
}

export default Sidebar
