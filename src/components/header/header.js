import React from "react"
import styled from "styled-components"
import Image from "./image"

const TitleDiv = styled.div`
    background: ${({ theme }) => theme.colours.deepBlue};
    width:100vw;
    margin-top: 6vw;
    flex-basis: 25vw;
    display: flex;
    align-items: space-between;
    padding-top: 5vw;
    justify-content: space-between;
    padding-left: 7vw;
    flex-shrink: 1;
    flex-grow: 0;
    flex-direction: row;
    overflow: hidden;
    position: relative;
    z-index: 2;
    ${({ theme }) => theme.tabletPortrait`
    margin-top: 60px;

    flex-basis: 60vw;
    display: flex;
    padding-top: 12vw;
    //padding-left: 12vw;
    flex-shrink: 1;
    flex-grow: 0;
    flex-direction: row;
    overflow: hidden;
    position: relative;
        
    `}
`

const HeaderDiv = styled.div`
    z-index: 3;
    margin-left: 0;
    margin-top: 0;
    flex-direction: column;
    ${({ theme }) => theme.tabletPortrait`
        margin-left: 6vw;
        margin-top: 1vw;
    `}
    //background: ${({ theme }) => theme.colours.grey.veryLight};
    height: 16vw;
    
`

const TitleHeader = styled.h1`
    display: inline-block;
    position: static;
    color: ${({ theme }) => theme.colours.white};
    font-size: 5vw;
    
    ${({ theme }) => theme.tabletPortrait`
    font-size: 7.6vw;
    `}
`
const TitleUnderline = styled.div`
    background: ${({ theme }) => theme.colours.yellow};
    width: 4vw;
    height: 0.8vw;
    margin-top: 15px;
`

const TitleImage = styled.div`
    overflow: visible;
    width: 56vw;
    margin-top: -7.6vw;
    margin-right: -90px;
    position: static;
    background: ${({ theme }) => theme.colours.transparent};
    height: 100px;
    right: -60px;
    top: 24vw;
    display: inline-block;
    flex: 1 0 100;
    z-index:1;

    ${({ theme }) => theme.tabletPortrait`
        margin-top: 1vw;
        margin-right: -30px;
        width: 70vw;
        position: absolute;
    `}

    ${({ theme }) => theme.mobileLandscape`
        margin-top: -0.1vw;
        margin-right: 10px;
        width: 70vw;
        position: absolute;
    `}


`

const TitleSubtitle = styled.h3`
   
    display: inline-block;
    position: static;
    color: ${({ theme }) => theme.colours.white};   
    font-size: 1.70vw;
    width: 35vw;
    margin-top: 2vw;
    opacity: 0.8;
    line-height: ${({ theme }) => theme.lineHeight.normal};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 2.9vw;
        width: 38vw;
    
    `}

`

export default function Header({ location, subtitle }){

    return <TitleDiv location={location}>
        <HeaderDiv>
            <TitleHeader>
                 {location.pathname[location.pathname.length - 1] === "/" ? location.pathname.slice(1, location.pathname.length - 1).toUpperCase() : location.pathname.slice(1).toUpperCase()}
            </TitleHeader>
            <TitleUnderline/>
            <TitleSubtitle>
                {subtitle}
            </TitleSubtitle>
        </HeaderDiv>
        <TitleImage>
            <Image 
            alt={location.pathname[location.pathname.length - 1] === "/" ? location.pathname.slice(1, location.pathname.length - 1) + " Logo" : location.pathname.slice(1)+ " Logo"} 
            filename= {location.pathname[location.pathname.length - 1] === "/" ? location.pathname.slice(1, location.pathname.length - 1) + "PageLogo.png": location.pathname.slice(1) + "PageLogo.png"}>
            </Image>
        </TitleImage>
    </TitleDiv>
}

