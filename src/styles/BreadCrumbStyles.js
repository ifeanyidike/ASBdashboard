import styled from 'styled-components'
import { fontTheme, colors } from "./definitions"

export const BreadCrumbContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: ${fontTheme.regular};
    color: ${colors.dimBlue};
    margin: 10px 0 0 33px;
   
    span{
        font-size: 14px;
        line-height: 22px;
    }
    img{
        margin: 0 5px;
    }

`