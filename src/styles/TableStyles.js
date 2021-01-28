import styled from 'styled-components'
import { fontTheme, colors } from "./definitions"

export const TableContainer = styled.div`
    width: 100%;
    margin-right: 15px;
`

export const TableHeadContainer = styled.div`
    font-family: ${fontTheme.regular};
    background: ${colors.tHeadHue};
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;

    img{
        margin-left: 20px;
        height: 15px;
        width: 15px;
    }

    p{
        width: 150px; 
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: ${colors.tHeadText};
        text-transform: uppercase;
    }

    p:first-of-type{
        width: 200px;
        margin-left: 70px;
    }
    
`

export const TableItemContainer = styled.div`
    box-shadow: inset 0px -1px 0px rgba(183, 183, 183, 0.25);
    background: ${colors.white};
    height: 60px;
    display: flex;
    align-items: center;
    font-family: ${fontTheme.regular};
    .lefticon{
        width: 50px;
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
    }
    .name{
        width: 200px;
        margin-left: 35px;
        font-size: 14px;
        line-height: 18px;
        color: ${colors.tbodyMain}
    }
    .location{
        width: 150px;
        font-size: 12px;
        p:first-child{
            font-weight: 500;
            color: ${colors.tbodyMain};
        }
        p:last-child{
            color: ${colors.tbodySecondary}
        }
    }
    .entries{
        width: 150px;
        p{
            font-size: 12px;
            line-height: 15px;
        }
        
        p:first-child{
            color: ${colors.tbodyMain};
            span{
                margin-left: 5px;
            }
        }
        p:last-child{
            color: ${colors.tbodySecondary}
        }
    }
    

`
export const StatusColumn = styled.div`
    font-size: 14px;
        width: 150px;
        span{
            line-height: 18px;
            border-radius: 20px;
            background-color: ${props => props.bgColor};
            color: ${props => props.color};
            font-weight: bold;
            padding: 5px 16px;
        }
`

export const RiskColumn = styled.div`
    font-size: 14px;
    line-height: 18px;
    width: 150px;
    color: ${props => props.color};
    display: flex;
    align-items: center;
    
    span{
        margin-left: 5px;
    }
`