import React from 'react'
import { MenuItemContainer } from "../styles/HeaderStyles"

const MenuItem = ({ icon, title, color }) => {
    return (
        <MenuItemContainer color={color}>
            <img src={`/assets/${icon}.svg`} alt={`${icon} icon`} />
            <span>{title}</span>
        </MenuItemContainer>
    )
}

export default MenuItem
