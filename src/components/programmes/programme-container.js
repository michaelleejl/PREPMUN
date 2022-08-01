import React from "react"
import styled from "styled-components"
import Image from "../header/image"

const ProgrammeDiv = styled.div`
   width: 100vw;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   display: flex;
   padding-top: 7rem;
   //argin: 5vw 0vw 5vw;
   background-color: ${({theme})=>theme.colours.deepBlue};

   ${({ theme }) => theme.tabletLandscape`
        padding-top: 7rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        flex-direction: column;
        text-align: center;
    `};

    ${({ theme }) => theme.mobileLandscape`
        padding-bottom: 0rem;
    `};


`

const ProgrammeImageContainer = styled.div`
    width: 50vw;
    height: 30rem;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 2.5vw;
    ${({ theme }) => theme.tabletLandscape`
        height: 25rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        align-items: center;
        text-align: center;
        padding-right: 0;
        width: 100vw;
    `};
    ${({ theme }) => theme.mobileLandscape`
        width: 15rem;
        height: 15rem;
    `};
`
const ProgrammeImageDiv = styled.div`
    height: 25rem;
    width: 25rem;
   
    ${({ theme }) => theme.tabletLandscape`
        width: 20rem;
        height: 20rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 15rem;
        height: 15rem;
    `};

    ${({ theme }) => theme.mobilePortrait`
        width: 10rem;
        height: 10rem;
    `};

`

const ProgrammeDescription = styled.div`
    width: 50vw;
    //height: 40rem;
    padding-left: 2.5vw;
    padding-top: 0rem;
    flex-direction: column;
    text-align: left;
    align-content: center;
    justify-content: flex-start;
    display: flex;
    ${({ theme }) => theme.tabletLandscape`
        //height: 25rem;
        justify-content: center;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 100vw;
        text-align: center;
        align-items: center;
        justify-content: flex-start;
        padding-left: 0;
        padding-right: 0;
    `};
    
`

const ProgrammeDescriptionHeader = styled.h2`
    //font-size: 2.5rem;
    
    font-size: 1.8rem;
    width: 16rem;
    color:  ${({theme})=>theme.colours.white};

    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.6rem;
        width: 20rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 2 rem;
        color:  ${({theme})=>theme.colours.white};
        width: 20rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        width: 15rem;
        font-size: 1.6rem;
    `};

`

const ProgrammeDescriptionBody = styled.p`
    font-size: 1rem;
    width: 25rem;
    padding-top: 1rem;
    line-height: ${({ theme }) => theme.lineHeight.normal};
    color: ${({theme})=>theme.colours.white};
    font-weight: ${({theme})=>theme.fontWeight.medium};
    

    //margin-bottom: 0.001 vw;

    ${({ theme }) => theme.tabletLandscape`
        font-size: 1rem;
        width: 20rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 22rem;
        line-height: ${({ theme }) => theme.lineHeight.loose};
        text-align: center;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 19rem;
        font-size: 0.9rem;
        line-height: ${({ theme }) => theme.lineHeight.loose};
    `};

    ${({ theme }) => theme.mobilePortrait`
        width: 15rem;
        font-size: 0.8rem;
    `};

`

const YellowText = styled.span`
    color: ${({theme})=>theme.colours.yellow};
`

const ProgrammeLink = ({ link }) => {
    if (link === ""){
        return(
            null
        )
    } else {
        return(
            <ProgrammeLinkStyled href={link}> Find Out More</ProgrammeLinkStyled>
        )
    }
}

const ProgrammeLinkStyled = styled.a`
    font-size: 1rem;
    width: 25rem;
    padding-top: 1rem;
    line-height: ${({ theme }) => theme.lineHeight.normal};
    color: ${({theme})=>theme.colours.yellow};
    font-weight: ${({theme})=>theme.fontWeight.bold};
    text-decoration: none;
`

export default function ProgrammeContainer(props) {
    return <ProgrammeDiv>
    <ProgrammeImageContainer>
        <ProgrammeImageDiv>
            <Image alt={props.imageAlternate} filename = {props.imageLink}></Image>
        </ProgrammeImageDiv>
    </ProgrammeImageContainer>
    <ProgrammeDescription>
    <ProgrammeDescriptionHeader>
        {props.descriptionHeaderWhite} <YellowText>{props.descriptionHeaderYellow}</YellowText>
        </ProgrammeDescriptionHeader>
        <ProgrammeDescriptionBody>
            {props.descriptionBody}
            <ProgrammeLink link={props.link} />
        </ProgrammeDescriptionBody>
        
    </ProgrammeDescription>
    </ProgrammeDiv>
}