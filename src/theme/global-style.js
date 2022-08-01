import { createGlobalStyle } from "styled-components"
import { reset } from "styled-reset"
import mediaQueries from "../util/media-queries" 

export const theme = {
    headerFont:{
        serif: "serif",
        sans: "montserrat, sans-serif"
    },
    bodyFont:{
        serif: "serif",
        sans: "Helvetica Neue, sans-serif"
    },

    fontSize: {
        xxs: "0.6rem",
        xs: "0.75rem",
        sm: "0.875rem",
        reg: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem"
      },
      fontWeight: {
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      colours:{
          transparent: "transparent",
          deepBlue: "#1C1854",
          yellow: "#EFC100",
          deepYellow: '#FFBC00',
          grey: {
            extremeLight: "#FFFFFF",
            polarBear: "#F0F0F1",
            veryLight: "#DCDCDF",
            light: "#6E6E73",
            dark: "#323236",
          },
          white: "#FFFFFF",
          black: "#000000",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      spacing: {
        px: "1px",
        "0": "0",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "8": "2rem",
        "10": "2.5rem",
        "12": "3rem",
        "16": "4rem",
        "20": "5rem",
        "24": "6rem",
        "32": "8rem",
        "40": "10rem",
        "48": "12rem",
        "56": "14rem",
        "64": "16rem",
      },
      ...mediaQueries,
}

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        // Automatically includes spacing in element height and width
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        //scrolls on user scroll rather than automatically
        scroll-behavior: smooth

        //not sure which color this is setting
        color: ${({ theme }) => theme.colours.black}; 

        //font presets
        font-family: ${({ theme }) => theme.bodyFont.sans}; 
        font-size: ${({ theme }) => theme.fontSize.base};
        font-weight: ${({ theme }) => theme.fontWeight.reg};

        //makes text look better
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        //sets height of the html element
        height: 100%;
        overscroll-behavior: none;
        overflow-x: visible;
    }

    *, *:before, *:after {
        //for all elements, and directly before and after.
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
        box-sizing: inherit;
    }

    h1 {
        font-family: ${({ theme }) => theme.headerFont.sans};
        font-weight: ${({ theme }) => theme.fontWeight.black};
        //font-size: ${({ theme}) => theme.fontSize["7xl"]};
    }
    
    h2, h3, h4, h5, h6{
        font-family: ${({ theme }) => theme.bodyFont.sans};
    }

    h2 {
        font-weight: ${({ theme }) => theme.fontWeight.extrabold};
        //font-size: ${({ theme }) => theme.fontSize["5xl"]};
        line-height: ${({ theme }) => theme.lineHeight.tight};
    }

    h3{
        font-weight: ${({ theme }) => theme.fontWeight.extrabold};
        font-size: ${({ theme}) => theme.fontSize["3xl"]};
    }

    h4 {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    body {
        overflow: visible;
        height: 100%;
        overscroll-behavior: contain;
        overflow-x: hidden;
    }

    #___gatsby{
        height: 100%;
    }

    #gatsby-focus-wrapper{
        min-height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .no-overflow{
        overflow: hidden;
    }

    .position-fixed{
        position: fixed;
    }

    .strong{
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
    }

    .blue-on-white::selection{
        color: ${({ theme })=> theme.colours.deepBlue};
        background: ${({ theme })=> theme.colours.white};
    }

    .white-on-blue::selection{
        color: ${({ theme })=> theme.colours.white};
        background: ${({ theme })=> theme.colours.deepBlue};
    }

    .no-overflow{
        overflow: hidden;
    }

    .no-shadow{
        box-shadow: 0px 5px 60px rgba(0, 0, 0, 0);
    }

    .avatar-body-middle-block{
        display: none;
    }

`