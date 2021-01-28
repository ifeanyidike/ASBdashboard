import { createGlobalStyle } from 'styled-components'
import { fontTheme } from "./definitions"

export const GlobalStyle = createGlobalStyle`
    

    body{
        font-family: ${fontTheme.black};
    }

`