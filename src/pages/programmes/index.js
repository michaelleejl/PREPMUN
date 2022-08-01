import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layouts/layout"
import Image from "../../components/header/image"
import ProgrammeContainer from "../../components/programmes/programme-container"
import SEO from "../../components/seo"

const ProgrammesDiv = styled.div`
   
    width: 100vw;
    background-color: ${({theme})=>theme.colours.deepBlue};
    flex-direction: column;
    align-content: center;
    text-align: center;
    padding-bottom: 7rem;
    
`

const ProgrammesHeader = styled.h2`
    padding-top: 7rem;
    color:  ${({theme})=>theme.colours.white};
    font-size: 4rem;
    //height: 4rem;
    ${({ theme }) => theme.tabletLandscape`
        font-size: 3rem;
        padding-top: 7rem;
        height: 3rem;
        margin-bottom: 4rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 2.5rem;
        padding-top: 8rem;
        margin-bottom: 0;
        height: 2.5rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        margin-bottom: 4rem;
    `};
`

const ImageDiv = styled.div`
    //position: relative;
    width: 100vw;
    height: 77.2945vw;
    overflow: hidden;
    background-color: ${({theme})=>theme.colours.deepBlue};
    ${({ theme }) => theme.tabletPortrait`
        height: 275vw;
    `};

`

const openLink = (link) => {
    window.open(link, "_self")
}

const NavBarDiv = styled.div`
    width: 100vw;
    height: 4.5rem;
    background-color: ${({ theme }) => theme.colours.grey.polarBear};
    padding-left: 6vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    ${({ theme }) => theme.tabletPortrait`
        padding-left: 12vw;
        height: 3rem;
    `};
`
const NavItemDiv = styled.div`
    height: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${({ theme }) => theme.tabletPortrait`
        height: 1rem;
    `};
`


const NavItemText = styled.a`
    text-decoration: none;
    color: ${({theme})=>theme.colours.grey.light};
    font-size: 1.3rem;
    font-weight: ${({theme})=>theme.fontWeight.bold};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 0.8rem;
    `};
`
const YellowText = styled.span`
    color: ${({theme})=>theme.colours.yellow};
`

const LogoDiv = styled.div`
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    ${({ theme }) => theme.tabletPortrait`
        display: none;
    `};
`

const guestSpeakerDescriptionBody = `These sessions will be open for all participants, where they will learn from experienced professionals. 
The sessions will also feature a question and answer (Q&A) segment, allowing participants to engage the speakers directly.
Guest Speaker Dialogues will be held on Thursdays in December.`

const focusGroupDiscussionsBody = `These sessions are intended to be a continuation from the guest speaker dialogues, where participants will be split into small groups to share their perspectives with each other, with the guest speaker’s dialogue acting as a springboard for discussion.`

const munSimplifiedBody = `These sessions will introduce absolute beginners to MUN and various basic concepts associated with MUN. Participants will be able to have common misconceptions and fears associated with MUN addressed. MUN Simplified sessions are scheduled for 5th and 19th December.`

const diplomacySimplifiedBody = `This is a content series that will provide an in-depth exploration of various themes and concepts related to international relations and geopolitics. Articles and videos prepared by our very own Secretariat will be uploaded throughout December.`

const onlineCrisisSimulationBody = `This is intended for experienced MUN participants, who will be thrown back in time into the Xinhai Revolution as a member of the Qing Dynasty, a local official, or a revolutionary in a crisis which will stretch the very limits of their skills. The Crisis will be held between 12th and 15th December.`

//const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//const calendarImgSource;

export default function Programmes(props){
    const [calenderImgSrc, setImgSrc] = useState("programmesCalendarIcon.jpg")
       
    useEffect(() => {
        if (window === undefined) {
            return
        }
        const mql = window.matchMedia('(max-width: 768px)')
        const mediaListener = media => {
        if (media.matches) {
                setImgSrc("programmesCalendarIconMobile.jpg")
            } else {
                setImgSrc("programmesCalendarIcon.jpg")
            }
          }
      
          mediaListener(mql)
          mql.addListener(mediaListener)
          return () => {
            mql.removeListener(mediaListener)
            };
    }, []);

    return <Layout location={props.location} subtitle = "Four weeks. Five Programmes. Ten years in the making. Sign up now.">
        <SEO image="programmesThumbnail.png" title="Programmes" autoRotate = "enabled" description = "This December, we're kicking off our the bulk of our Road to 10 Campaign, with 5 different programmes that will cater to participants of all experiences and leave you in good stead for our 10th iteration."/>
        <NavBarDiv>
            <NavItemDiv>
                <LogoDiv>
                    <Image alt={"Crisis Tab"} filename = {"CrisisLogoSmall.png"}/>
                </LogoDiv>
                <NavItemText href='/programmes/crisis'>Find Out More About Our Online Crisis</NavItemText>
            </NavItemDiv>
        </NavBarDiv>
        <ImageDiv>
            <Image alt={"PREPMUN Calendar"} filename={calenderImgSrc}></Image>
        </ImageDiv>
        
        <ProgrammesDiv>
            <ProgrammesHeader>
                Meet the 
                <YellowText> Programmes</YellowText>
                </ProgrammesHeader>
                <ProgrammeContainer 
                    imageLink = {"guestSpeakerDialogues.png"} 
                    imageAlternate={"Guest Speaker Dialogues"} 
                    descriptionHeaderWhite = {"Guest Speaker"} 
                    descriptionHeaderYellow = {"Dialogues"} 
                    descriptionBody = {guestSpeakerDescriptionBody}
                    link={""}
                />
                <ProgrammeContainer 
                    imageLink = {"focusGroupDiscussions.png"} 
                    imageAlternate={"Focus Group Discussions"} 
                    descriptionHeaderWhite = {"Focus Group"} 
                    descriptionHeaderYellow = {"Discussions"} 
                    descriptionBody = {focusGroupDiscussionsBody}
                    link = {""}
                />
                <ProgrammeContainer 
                    imageLink = {"munSimplified.png"} 
                    imageAlternate={"MUN Simplified"} 
                    descriptionHeaderWhite = {"MUN"} 
                    descriptionHeaderYellow = {"Simplified"} 
                    descriptionBody = {munSimplifiedBody}
                    link={""}
                />
                <ProgrammeContainer 
                    imageLink = {"diplomacyExplained.png"} 
                    imageAlternate={"Diplomacy Explained"} 
                    descriptionHeaderWhite = {"Diplomacy"} 
                    descriptionHeaderYellow = {"Explained"} 
                    descriptionBody = {diplomacySimplifiedBody}
                    link={""}
                />
                <ProgrammeContainer 
                    imageLink = {"onlineCrisisSimulation.png"} 
                    imageAlternate={"Online Crisis Simulation"} 
                    descriptionHeaderWhite = {"Online Crisis"} 
                    descriptionHeaderYellow = {"Simulation"} 
                    descriptionBody = {onlineCrisisSimulationBody}
                    link={"/programmes/crisis"}
                />
        </ProgrammesDiv>
        
    </Layout>
}