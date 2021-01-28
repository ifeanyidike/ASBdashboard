import styled from 'styled-components'
import { fontTheme, colors } from "./definitions"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colors.white};
    box-shadow: inset 0px -1px 0px rgba(220, 225, 231, 0.572143);
    height: 52px;
    
    .menu__left{
        display: flex;
        align-items: center;
        .logo{
            display: flex;
            align-items: center;
            margin-left: 26px;
            img{
                width: 32px;
                height: 27.05px;
            }
            span{
               font-family: ${fontTheme.medium};
                color: ${colors.black};
                font-weight: normal;
                font-size: 14px;
               line-height: 22px;
            }
        }
        .menu__items{
            display: flex;
            align-items: center;
            margin-left: 40px;
        }
    }
    
    .menu__right{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 30%;

        .menu__rightEnd{
            display: flex;
            align-items: center;
        }
    }
`

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-family: ${fontTheme.medium};
    color: ${props => props.color};
    font-size: 14px;
    line-height: 22px;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid ${props => props.color}
    }
    span{
        margin-left: 5px;
    }
`

export const SearchBar = styled.div`
    width: 176px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid ${colors.lightOutline};
    position: relative;
    img{
        position: absolute;
        width: 16px;
        height: 16px;
        left: 16px;
        top: calc(50% - 16px/2);
    }
`

export const Avatar = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: ${colors.ovalGray};
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Bell = styled.div``

export const AngleDown = styled.div`
    margin-left: 5px;
    cursor: pointer;
`
