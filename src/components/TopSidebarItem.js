import React from 'react'
import { TopSidebarItemContainer } from '../styles/SidebarStyles'

const TopSidebarItem = ({ icon, text, special }) => {
    return (
        <TopSidebarItemContainer special={special}>
            <img src={`/assets/${icon}.svg`} alt="icon" />
            <span>{text}</span>
        </TopSidebarItemContainer>
    )
}

export default TopSidebarItem
