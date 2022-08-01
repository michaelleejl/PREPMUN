import React, { useState } from "react"
import styled from "styled-components"
import Header from "../header/header"
import Navigation from "../navigation-bar/crisis-navigation-bar"

const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
  position: relative;
  //background: ${({ theme })=> theme.colours.grey.veryLight};
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
`

const HiddenDiv = styled.div`
  width: 100%;
  height: 600vh;
  position: fixed;
  left: 0;
  top: ${props => props.location.pathname === "/programmes" ? "-300vh" : "-550vh"};
  background: ${({ theme })=> theme.colours.white};
`

const Content = styled.div`
    //overflow: hidden;

    //margin-top: 0vw;
    flex: 1 1 auto;
    background: ${({ theme })=> theme.colours.white};
    z-index: 1;
    //padding-top: 40px;
`

export default ({ location, subtitle, children }) => {
    return (
        <Container className = 'body-container'>
            <HiddenDiv location = {location}></HiddenDiv>
            <Navigation location = {location}/>
            <Content>{children}</Content>
        </Container>
    )
}