import React, { useState } from "react"
import styled from "styled-components"
import Header from "../header/header"
import Navigation from "../navigation-bar/navigation-bar"

const Container = styled.div`
  flex: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  //overflow: hidden;
  position: relative;
  //background: ${({ theme })=> theme.colours.grey.veryLight};
`

const HiddenDiv = styled.div`
  width: 100%;
  height: 600vh;
  position: fixed;
  left: 0;
  top: -580vh;
  z-index: -1;
  background: ${({ theme })=> theme.colours.deepBlue};
`

const Content = styled.div`
    //position: absolute;
    left: 0;
    //margin-top: 0vw;
    flex: 1 1 auto;
    //background: ${({ theme })=> theme.colours.white};
    width: 100vw;
    //height: auto;
    z-index: 2;

`

export default ({ location, children }) => {
    return (
        <Container>
            <HiddenDiv></HiddenDiv>
            <Navigation location = {location}/>
            <Content>{children}</Content>
        </Container>
    )
}