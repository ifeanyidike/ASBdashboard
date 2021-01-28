import React from 'react'
import { TopSideCardContainer, SidebarHeading } from "../styles/SidebarStyles"
import TopSidebarItem from "./TopSidebarItem"

const TopSideCard = () => {
    return (
        <TopSideCardContainer>
            <SidebarHeading>
                <img src='/assets/castle.svg' alt='rook icon' />
                <span>Division Summary</span>
            </SidebarHeading>
            <TopSidebarItem icon='phone' text='08012345678' />
            <TopSidebarItem icon='envelope' text='asbfefr@gmail.com' />
            <TopSidebarItem icon='location' text='Mojidi, Lagos' />
            <TopSidebarItem icon='notebook' text='2 Journal entries' special />
            <TopSidebarItem icon='fingerprint' text='24 fingerprints enrolled' />

        </TopSideCardContainer>
    )
}

export default TopSideCard
