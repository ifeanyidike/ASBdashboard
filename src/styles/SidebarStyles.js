import styled from 'styled-components'
import { fontTheme, colors } from "./definitions"

export const TopSideCardContainer = styled.div`
    box-shadow: 0px 4px 30px #EDF6FF;
    padding: 10px 25px 15px 5px;
    width: 240px;   
`

export const BottomSideCardContainer = styled.div`
    padding: 10px 25px 15px 5px;
    margin-top: 15px;
    width: 240px;
    .sidebar__items{
        margin-top: 15px;
    }
`

export const SidebarHeading = styled.div`
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    font-family: ${fontTheme.medium};
    color: ${colors.black};
    display: flex;
    align-items: center;
    span{
        margin-left: 15px;
    }
`

export const TopSidebarItemContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 15px 0;
    cursor: pointer;
    span{
        font-family: ${fontTheme.medium};
        font-size: 14px;
        line-height: 19.6px;
        color: ${props => props.special ? colors.pinkishBlue : colors.darkBlue};
        margin-left: 15px;
        border-bottom: ${props => props.special && `1px solid ${colors.pinkishBlue}`}
    }
`

export const BottomSidebarItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: ${fontTheme.regular};
    .iconline{
       display: flex;
       flex-direction: column;
       justify-content: center;
       .icon{
           margin: 0;
           padding: 0;
            img{
               width: 100%;
               height: 9px;
            }
       }
        .line{
            height: 60px;
            color: ${colors.lineHue};
        }
    }
    .content{
        display: flex;
        flex-direction: column;
        font-size: 12px;
        line-height: 140%;
        margin-left: 15px;
        
        span{
            color: ${colors.lightDark}
        }
        small{
            margin-top: 5px;
            color: ${colors.lightGray};
            display: flex;
            align-items: center;
            img{
                margin: 0 5px;
            }
        }
    }

`

export const SidebarContainer = styled.div`
    padding: 15px;
    padding-top: 0;
`