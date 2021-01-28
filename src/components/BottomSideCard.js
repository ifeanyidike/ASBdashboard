import React from 'react'
import { BottomSideCardContainer, SidebarHeading } from '../styles/SidebarStyles'
import BottomSidebarItem from './BottomSidebarItem'

const BottomSideCard = () => {
    return (
        <BottomSideCardContainer>
            <SidebarHeading>
                <img src='/assets/trumpet.svg' alt='trumpet icon' />
                <span>Module History</span>
            </SidebarHeading>
            <div className="sidebar__items">
                <BottomSidebarItem
                    showLine={true}
                    entry_header='Searched “Journal Entries” on Division module'
                    entry_date='22:10 15/09/2020'
                />
                <BottomSidebarItem
                    showLine={true}
                    entry_header='Searched “Fingerprint record” on Division module'
                    entry_date='22:10 15/09/2020'
                />
                <BottomSidebarItem
                    entry_header='Searched ““Journal Entries” on Division module'
                    entry_date='22:10 15/09/2020'
                />
            </div>

        </BottomSideCardContainer>
    )
}

export default BottomSideCard
