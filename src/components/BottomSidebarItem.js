import React from 'react'
import { BottomSidebarItemContainer } from '../styles/SidebarStyles'

const BottomSidebarItem = ({ showLine, entry_header, entry_date }) => {
    return (
        <BottomSidebarItemContainer>
            <div className='iconline'>
                <div className="icon">
                    <img className='dot' src="/assets/dot.svg" alt="dot icon" />

                </div>
                <img className='line' src="/assets/line.svg" alt="dot icon" style={{ opacity: showLine ? 1 : 0 }} />
            </div>
            <div className='content'>
                <span>{entry_header}</span>
                <small> {entry_date} <img src='/assets/smalldot.svg' alt='smalldot' /> Web</small>
            </div>
        </BottomSidebarItemContainer>
    )
}

export default BottomSidebarItem
