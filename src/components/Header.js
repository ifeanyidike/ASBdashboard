import React from 'react'
import { HeaderContainer, SearchBar, Avatar, Bell, AngleDown } from "../styles/HeaderStyles"
import MenuItem from "./MenuItem"
import { fontTheme, colors } from "../styles/definitions"

const Header = () => {
    return (
        <HeaderContainer>
            <div className="menu__left">
                <div className="logo">
                    <img src='/assets/logo.svg' alt='logo asset' />
                    <span>FE Engineer Test 1</span>
                </div>
                <div className="menu__items">
                    <MenuItem icon='home' title='Home' color={colors.dimBlue} />
                    <MenuItem icon='entries' title='Entries' color={colors.dimBlue} />
                    <MenuItem icon='divisions' title='Divisions' color={colors.lightBlue} />
                </div>
            </div>

            <div className="menu__right">
                <SearchBar>
                    <img src='/assets/searchicon.svg' alt='search icon' />
                </SearchBar>
                <Bell>
                    <img src='/assets/bell.svg' alt='bell icon' />
                </Bell>
                <div className='menu__rightEnd'>
                    <Avatar>
                        <img src='/assets/customer.svg' alt='bell icon' />
                    </Avatar>
                    <AngleDown>
                        <img src='/assets/angledown.svg' alt='bell icon' />
                    </AngleDown>
                </div>
            </div>

        </HeaderContainer>
    )
}

export default Header
