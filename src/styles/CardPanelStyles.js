import styled from 'styled-components'
import { fontTheme, colors } from "./definitions"

export const CardPanelContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    padding: 15px;
`

export const CardPaneContainer = styled.div`
    height: 129px;
    box-shadow: 0px 4px 30px rgba(192, 192, 192, 0.25);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    cursor: pointer;

    .topcontent{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h6{
        font-family: ${fontTheme.regular};
        font-weight: bold;
        font-size: 32px;
        line-height: 44px;
        color: ${colors.faintDark};
        height: 44px;
    }
    span{
        font-family: ${fontTheme.regular};
        font-weight: bold;
        font-size: 16px;
        line-height: 36px;
        color: ${colors.faintGray}
    }

    .icon{
        border: 2px solid ${colors.lightCircle};
        width: 22.8px;
        height: 22.8px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .item{
            display: grid;
            place-items: center;
            
        }
    }
`