import React, { useState, useEffect } from "react"
import styled, {css} from "styled-components"
import {UnstyledLink} from "../page-elements"
import Image from "../header/image"
import {Link} from "gatsby"

const NavigationContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;   
    height: 6vw; 
    background-color: ${({ theme }) => theme.colours.deepBlue};
`
const NavigationDiv = styled.div` 
    display: flex;
    z-index: 2;
    flex: 0;
    position: absolute;
    padding-bottom: 0px;
    padding-right: 4vw;
    padding-left: 120px;
    align-items: flex-end;
    justify-content: flex-end;
    border-bottom: 0px;
    height: 100px;
    background-color: ${({ theme }) => theme.colours.transparent};
    transition: border-bottom 0.1s;
    transition-delay: ${props => (props.active ? "0s" : "0.4s")};
    top: 0px;
    width: 100vw;
    ${({ theme }) => theme.tabletPortrait`
        position: ${props => props.location.pathname === "/" ? "absolute":"fixed"};
        flex: 0;
        height: 60px;
        align-items: center;
        justify-content: flex-start;
        padding-left: 18px;
        background-color: ${({ theme }) => theme.colours.deepBlue};
        border-bottom: ${props => (props.active ? "0px" : "1px solid #FFFFFF")};
        z-index: 4;
    `};
`

const NavigationBar = styled.ul`
   

    border-bottom: 0px;
    overflow: visible;
    padding-top: 0px;
    right: 80px;
    top: 5vw;
    opacity: 1;
    width: auto;
    max-width: 500px;
    height: 36px;
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;
    padding-left: 0vw;
    margin-right: 80px;
   
    position: absolute;
    list-style: none;
    

    ${({ theme }) => theme.tabletPortrait`
        max-width: 100vw;
        max-height: 100vh;
        width: 100vw;
        left: 0;
        z-index: 4;
        background-color: ${({ theme }) => theme.colours.deepBlue};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        padding-left: 15vw;
        padding-top: 11px;
        height: auto;
        top: 49px;
        max-height: ${props => (props.active ? "100vh" : "0.1px")};
        -webkit-transition: max-height 0.6s cubic-bezier(.17,.67,.66,1.06); 
        -moz-transition: max-height 0.6s cubic-bezier(.17,.67,.66,1.06); 
        -ms-transition: max-height 0.6s cubic-bezier(.17,.67,.66,1.06); 
        -o-transition: max-height 0.6s cubic-bezier(.17,.67,.66,1.06); 
        transition: max-height 0.6s cubic-bezier(.17,.67,.66,1.06);
        overflow: hidden;
        position: ${props => props.location.pathname === "/" ? "absolute":"fixed"};
        
    `};

`

const NavigationPaddingDiv = styled.div`
   
    //height: 0px;
    

    ${({ theme }) => theme.tabletPortrait`
        top:350px;
        background-color: ${({ theme }) => theme.colours.deepBlue};
        width:100vw;
        display: inline-block;
        height: 100vh;
    `}
`

const NavigationLi = styled.li`
    border-bottom: 0;
    width: initial;
    text-align: center;
    justify-content: center;
    height: 27px;
    margin: 0 ${({ theme }) => theme.spacing["2"]};
    display: flex;
    position: static;
    background: ${props => (props.location.pathname === props.to || props.location.pathname === props.to + "/") ? ({ theme }) => theme.colours.yellow:({ theme }) => theme.colours.transparent};
    border-radius: 3px;
    :first-child {
        height: ${props => props.location.pathname === "/" ? "0px":"27px"}
    }
    font-size: 18px;
    
    ${({ theme }) => theme.tabletPortrait`
        border-radius: 0px;
        background: ${({ theme }) => theme.colours.transparent};
        position: static;
        height: 50px;
        display: flex;
        flex-basis: 50px;
        flex-grow: 0;
        flex-shrink: 0;
        text-align: left;
        flex-direction: column;
        justify-content: center;
        text-align: left;
        align-items: flex-start;
        width: 70vw;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
        :nth-last-child(2) {
             border-bottom: 0;
        }
        
        margin: ${({ theme }) => theme.spacing["2"] } 0;
        :first-child() {
            margin: calc(${({ theme }) => theme.spacing["2"] } + 11px) 0;
        }
        padding-bottom: calc(${({ theme }) => theme.spacing["1"] } + 18px); 
        
    `};

    
`
const NavigationLink = styled(UnstyledLink)`

    padding-top: 4px;
    padding-bottom: 0px;
    margin-left: 6px;
    margin-right: 6px;
    display: flex;
    text-align: center;
    justify-content: center;
    
    color: ${props => (props.location.pathname === props.to || props.location.pathname === props.to + "/") ? ({ theme }) => theme.colours.deepBlue:({ theme }) => theme.colours.black};
    font-weight: ${props => (props.location.pathname === props.to || props.location.pathname === props.to + "/") ? ({ theme }) => theme.fontWeight.bold :({ theme }) => theme.fontWeight.semibold};
    opacity: ${props => (props.location.pathname === props.to || props.location.pathname === props.to + "/") ? 1.0:0.5};
    
 ${({ theme }) => theme.tabletPortrait`
        color: ${({ theme }) => theme.colours.white};
        opacity: 1;
        margin-left: 6px;
        margin-right: 6px;
        display: flex;
        text-align: left;
        justify-content: flex-start;
`};

// &:hover{
//     font-weight: ${props => props.location.pathname === props.to ? ({ theme }) => theme.fontWeight.bold :({ theme }) => theme.fontWeight.regular};
// }

`

const Hamburger = styled.div`
    
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    height: 12px;
    width: 36px;
    right: 18px;
    top: 24px;
    z-index: 4;
    display: none;
    
    ${({ theme }) => theme.tabletPortrait`
        display: flex;
        ${props => props.position && css` position: fixed`}
        position: ${props => props.location.pathname === "/" ? "absolute":"fixed"};
    `};

`

const HamburgerLine = styled.span`
    height: 2px;
    width: 22px;
    position: absolute;
    background-color: ${({ theme }) => theme.colours.white};
    border-radius: 2px;
    top: 0px;
    transition: transform 0.4s cubic-bezier(.17,.67,.66,1.06),
    opacity 0.4s ease;
    transform-origin: center;
    ${props => props.active && css` transform: translateY(5px) rotate(45deg)`};
`

const HamburgerLineTwo = styled.span`
    height: 2px;
    width: 22px;
    position: absolute;
    background-color: ${({ theme }) => theme.colours.white};
    border-radius: 2px;
    bottom: 0px;
    transition: transform 0.4s cubic-bezier(.17,.67,.66,1.06),
    opacity 0.4s ease;
    transform-origin: center;
    ${props => props.active && css`transform: translateY(-5px) rotate(-45deg)`};
`

const NavigationItem = props => (
    <NavigationLi location = {props.location} to = {props.to}>
        <NavigationLink location = {props.location} to={props.to} onClick = {props.clicked}>
            {props.children}
        </NavigationLink>
    </NavigationLi>
)

const ImageDiv = styled.div`
    height: 40px;
    width: 40px;
    position: absolute;
    display: none;
    ${({ theme }) => theme.tabletPortrait`
        display: inline-block;
    `}
`

const ImageLink = styled(UnstyledLink)`
    height: 40px;
    width: 40px;
    position: absolute;
    margin-top: -40px;
    display: none;
    ${({ theme }) => theme.tabletPortrait`
        display: inline-block;
    `}
`

export default function Navigation({location, data}){

    const [mobileMenuActive, setMobileMenuActive] = useState(false)

    const allowScroll = () => {
        if (window !== undefined){
            document.body.classList.remove("no-overflow")
        }
    }

    const allowScrollPREPMUNLogo= () => {
        if (window !== undefined){
            document.body.classList.remove("no-overflow")
            if (mobileMenuActive){
                setMobileMenuActive(mobileMenuActive => !mobileMenuActive)
            }
        }
    }

    const toggleMobileDropdown = () => {
        if (window !== undefined) {
            const bodyClasses = document.body.classList
            if (mobileMenuActive) {
              bodyClasses.remove("no-overflow")
            } else {
              bodyClasses.add("no-overflow")
            }
          }
        setMobileMenuActive(mobileMenuActive => !mobileMenuActive)
    }

    return <NavigationContainer> 
    <NavigationDiv location = {location} active={mobileMenuActive}>
        <ImageDiv>
            <Image alt={"PREPMUN"} filename={"navigationBarLogo.png"}> </Image>
            <ImageLink to="/" onClick = {allowScrollPREPMUNLogo}></ImageLink>
        </ImageDiv>
    </NavigationDiv>
    <NavigationBar location = {location} active={mobileMenuActive}>
        <NavigationItem location = {location} to= "/" clicked = {allowScroll}>Home</NavigationItem>
        <NavigationItem location = {location} to= "/about" clicked = {allowScroll}>About</NavigationItem>
        <NavigationItem location = {location} to= "/programmes" clicked = {allowScroll}>Programmes</NavigationItem>
        <NavigationItem location = {location} to= "/weekly" clicked = {allowScroll}>Weekly</NavigationItem>
        <NavigationItem location = {location} to= "/contact" clicked = {allowScroll}>Contact</NavigationItem>
        <NavigationItem location = {location} to="/resources" clicked = {allowScroll}>Resources</NavigationItem>
        <NavigationPaddingDiv></NavigationPaddingDiv>
    </NavigationBar>
    <Hamburger location = {location} onClick = {toggleMobileDropdown} position={mobileMenuActive}>
        <HamburgerLine active = {mobileMenuActive}/>
        <HamburgerLineTwo active = {mobileMenuActive}/>
    </Hamburger>
</NavigationContainer>
}

