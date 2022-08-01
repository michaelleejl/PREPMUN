import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layouts/home-layout"
import SEO from "../components/seo"

const HomePageContainer = styled.html`
  flex: 1;
  display: flex;
  flex-direction: column
  align-items: center;
  justify-content: center;
  overflow: visible;
  //position: absolute;
  z-index: 2;
  background: ${({ theme }) => theme.colours.white};
`
const HomePageHeader = styled.div`
  background: ${({ theme }) => theme.colours.deepBlue};
  width: 100%;
  height: 50vw;
  margin-top: ${({ theme }) => theme.spacing["0"]};
  font-family: ${({ theme }) => theme.bodyFont.sans};
  justify-content: center;
  align-items: center;
  ${({theme}) => theme.tabletPortrait`
    height: 70vw;
  `}
`

const HomePageCeiling = styled.div`
  background: ${({ theme }) => theme.colours.deepBlue};
  width:100%;
  height:10vw;
  margin-top: 0vw;
  position: fixed;
  ${({ theme }) => theme.tabletPortrait`
    height:20vw;
    margin-top: 0vw;
  `};
`

const HomePageRoof = styled.div`
  background: ${({ theme }) => theme.colours.deepBlue};
  width:100%;
  
  height:100vw;
  margin-top: -100vw;
  position: absolute;
  ${({ theme }) => theme.tabletPortrait`
      height:100vw;
      margin-top: -100vw;
  `};
`

const HomePageLogo = styled.div`
  //background: ${({ theme }) => theme.colours.white};
  height: 40%;
  width: 60%;
  top: 10vw;
  margin:0 auto;
  position: relative;
  align-items: center;
  text-align:center;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.tabletPortrait`
    top: 20vw;
    height: 50%;
    width: 75%;
  `};

`

const PreventSelection = styled.div`
    height: 100%;
    width: 100%;
    margin:0 auto;
    position: relative;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`
const HomePageTagline = styled.h2`
  width: 100%;
  height: 60%;    
  opacity: 0.8;
  white-space: pre-line;
  padding:0px;
  margin:0px;
  background: ${({ theme }) => theme.colours.transparent};
  color: ${({ theme }) => theme.colours.white};
  font-size: 3vw;
  ${({ theme }) => theme.tabletPortrait`
    font-size: 4vw;
  `};
`

const HomePageAnnouncement = styled.div`
  background: ${({ theme }) => theme.colours.white};
  font-family: ${({ theme }) => theme.bodyFont.sans};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 5px 60px rgba(0, 0, 0, 0.5);
  padding-right: 20px;
  
  ${({ theme }) => theme.tabletPortrait`
    border-radius: 4px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    padding-right: 20px;
  `};

  ${({ theme }) => theme.mobileLandscape`
    border-radius: 4px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
    padding-right: 20px;
  `};
`

const HomePageAnnouncementPadding = styled.div`
    //background: ${({ theme }) => theme.colours.white};
    position: absolute;
    
    width: 75%;
    margin-top: 35vw;
    overflow: visible;
    display: inline-block;
    padding-bottom: 10vw;

    ${({ theme }) => theme.tabletLandscape`
      margin-top: 35vw;
      width: 80%;
    `};
    
    ${({ theme }) => theme.tabletPortrait`
        margin-top: 55vw;
        width: 85%;
    `};

    ${({ theme }) => theme.mobileLandscape`
        margin-top: 55vw;
        width: 90%;
    `};

`
const HomePageBodyContainer = styled.div`
  text-align: justify;
  text-align-last:left;
  padding-top: 14%;
  padding-bottom: 14%;
  padding-left: 16%;
  padding-right: 14%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
  //background: ${({ theme }) => theme.colours.white};
  ${({ theme }) => theme.mobileLandscape`
    text-align: left;
    font-size: 2rem;
  `};
  //width: 100vw;
`
const HeaderParagrah = styled.h4`
  margin-bottom: 30px;
  text-align: left;
  font-size: ${({ theme }) => theme.fontSize["2xl"]};
  ${({ theme }) => theme.tabletPortrait`
    font-size: ${({ theme }) => theme.fontSize.xl};
  `};
  ${({ theme }) => theme.mobileLandscape`
    font-size: 4.2vw;
  `};
  
`
const BodyParagraph = styled.p`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSize.lg};
  
  ${({ theme }) => theme.tabletPortrait`
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.reg};
  `};
  ${({ theme }) => theme.mobileLandscape`
    font-size: 3.2vw;
  `};
`

const tagLine = "Where Socially and Globally\n Aware Leaders are Born"

export default function Home({data, location}) {
  return <Layout location={location}>
    <SEO image="homeThumbnail.png" title="Our New Home" autoRotate = "enabled" description = "PREPMUN is one of the largest simulation conferences in Singapore. Explore our exciting line up of programmes, events, and more here at our website."/>
  <HomePageContainer className="blue-on-white">
    <HomePageRoof/>
    <HomePageCeiling/>
    <HomePageHeader className="blue-on-white">
      <HomePageLogo className="blue-on-white">
        <Img className="blue-on-white" fluid = {data.file.childImageSharp.fluid} alt="PREPMUN Logo"/>
        <HomePageTagline className="blue-on-white">{tagLine}</HomePageTagline>
      </HomePageLogo>
      <PreventSelection/>
    </HomePageHeader>
    <HomePageAnnouncementPadding> 
    <HomePageAnnouncement>
      <HomePageBodyContainer>
        <HeaderParagrah className="white-on-blue">
          To all our prospective delegates,
        </HeaderParagrah>
        <BodyParagraph className="white-on-blue">
          We are saddened to announce that we will not be organising a physical conference this year. 
          This decision was not taken lightly. We know how much our conference means to you. It means a lot to us, too. 
          This was supposed to be our 10th iteration of the conference, and we were dedicated to making it bigger and better than it’s ever been. 
          We still are — those fantastic plans we’ve penned down over the past months are still there, 
          and we’ll hold on to them until we feel a conference can be held without compromising your safety or peace of mind.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
          This decision hinged on several carefully considered factors. 
          Organising the largest MUN in Singapore requires a tremendous amount of forward planning, much of which can’t be done during a pandemic. 
          We do not know which venue could commit to host us, even after the circuit breaker ends. 
          Further, we foresee attendance figures falling: some may be unwilling to commit to a conference in advance, 
          especially after seeing so many events and activities cancelled at the last minute. 
          Ultimately, even if we could proceed, we could not guarantee the quality that we have become synonymous with, and that you as a delegate deserve.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
          So, what are we doing instead? As for now, nothing is fixed. We’re leaning away from running a full online conference. 
          Instead, we’re looking towards extending our 10th iteration into a longer programme that will start in December and end in 2021. 
          Whilst an online conference isn’t completely off the table, we're concerned about the technical issues that may arise from large scale online 
          interactions. We're thus actively exploring the possibility of alternative programmes. These include Dialogues with Guest Speakers, "MUN 101" 
          Information Sessions for our Category A Delegates, and a Current Affairs Content Series.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        The truth is, we don’t know what appeals to you. PREPMUN 2020 was taken away from you, and the last thing we want is to pile on to that 
        misery by unilaterally deciding on an alternative that doesn’t appeal to you. Thus, whilst we have plans in mind, we’ll be spending some time 
        conducting polls to determine what exactly the PREPMUN community would like to see instead. What you would like to see this December. Starting with what 
        topics you’d like prospective guest speakers to cover. At the end of polling, we’ll aggregate your requests and suggestions, design a programme based on your input, and 
        execute that as best we can.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        We can’t promise that we’ll be able to achieve exactly what you guys suggest. This is unchartered territory, and we may run into unexpected difficulties
        along the way. Unfortunately, we may have to veto some requests. 
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        However, if we do, we will tell you exactly why we weren’t able to go through with it, 
        and what we’re planning on doing instead. We believe that, through constant communication and total transparency, 
        you can help us shape the organisational process, help us shape PREPMUN 2020 into something that you will love, and we can deliver. 
        A programme designed by the community, for the community.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        Polling will commence soon, so we encourage all of you to think about the specifics of what you’d like to see in December. 
        Discuss it amongst yourselves, speak out when you have an idea, and, when the polls open, vote for the ideas you love. 
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        We’ve built an incredible community in the past decade. A community that, time and time again, has worked together to produce amazing ideas. 
        To achieve incredible feats. That will continue do so.
        </BodyParagraph>
        <BodyParagraph className="white-on-blue">
        Even in these uncertain times, that’s something we know we can count on.
        </BodyParagraph>
      </HomePageBodyContainer>
    </HomePageAnnouncement>
    </HomePageAnnouncementPadding>
    </HomePageContainer>
    </Layout>
}

export const query = graphql`
    query {
      file(relativePath: {eq: "images/homeScreenLogo.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
`
