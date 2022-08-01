import React from "react"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
//import {Link} from "gatsby"
import Tilt from "react-tilt"
import Image from "../components/header/image"
import SEO from "../components/seo"

const generalDocuments = [
    {filename: "roadto10.jpg",
     title: "Road to 10 Campaign",
     resourceDate: "19 June 2020",
     document: `/roadto10.pdf`
    },
    {filename: "crisisStoffRegistrations.jpg",
    title: "Crisis Stoff Registration",
    resourceDate: "20 June 2020",
    document: `/crisisStoffRegistrationForm.pdf`,
   },
   {filename: "crisisRegistrationForm.jpg",
    title: "Crisis Delegate Registration",
    resourceDate: "19 October 2020",
    document: `https://forms.gle/j4KGNQ6ZXBA1wdf3A`,
   },
]

const munSimplified = []
const diplomacyExplained = [
    {filename: "diplomacyExplained.jpg",
     title: "Diplomacy Explained",
     resourceDate: "27 December 2020",
     document: `/Diplomacy Explained.pdf`
    },
    {filename: "diplomacyExplainedAccessibility.jpg",
     title: "Diplomacy Explained Accessibility Edition",
     resourceDate: "27 December 2020",
     document: `/Diplomacy Explained Accessibility Edition.pdf`
    },
]
const onlineCrisis = [
    {filename: "studyGuide.jpg",
     title: "Study Guide",
     resourceDate: "29 November 2020",
     document: `/Study Guide.pdf`
    },
    {filename: "qingDossier.jpg",
    title: "Qing Dossier",
    resourceDate: "29 November 2020",
    document: `/Qing Dossier.pdf`,
   },
   {filename: "GovernorCallGroups.jpg",
    title: "Governor Call Sheet",
    resourceDate: "29 November 2020",
    document: `/Governor Call Sheet.pdf`,
   },
   {filename: "ROP.jpg",
    title: "Rules of Procedure",
    resourceDate: "7 December 2020",
    document: `/Rules of Procedure.pdf`,
   },
   {filename: "Schedule.jpg",
    title: "Crisis Schedule",
    resourceDate: "7 December 2020",
    document: `/Crisis Schedule.pdf`,
   },
]

const ResourceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    padding-bottom: 0rem;
    width: 60rem;
    ${({ theme }) => theme.tabletLandscape`
        grid-template-columns: 1fr 1fr;
        width: 30rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        grid-template-columns: 1fr;
        width: 12rem;
    `};
`

const ResourceContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 8rem;
    //justify-content: center;
    align-items: center;
    //background-color: ${({ theme }) => theme.colours.grey.light};
`

const ResourceDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    //background-color: ${({ theme }) => theme.colours.grey.light};
    padding-left:4rem;
    padding-right:4rem;
    ${({ theme }) => theme.tabletLandscape`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        padding-left: 0rem;
        padding-right: 0rem;
    `};
`

const ResourceTitle = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    line-height: ${({ theme }) => theme.lineHeight.tight};
    color: ${({ theme }) => theme.colours.grey.dark};
`

const ResourceDate = styled.h5`
    font-size: 0.8rem;
    margin-bottom: 3rem;
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    color: ${({ theme }) => theme.colours.grey.light};
`

const ResourceTilt = styled(Tilt)`
  display: flex;
  align-items: stretch;
  border: 1px solid ${({ theme }) => theme.colours.grey.veryLight};
  margin-bottom: 1.5rem;

   ${({ theme }) => theme.tabletPortrait`
        &:hover {
        }
    `};
  &:hover {
      box-shadow: 0px 5px 60px rgba(0, 0, 0, 0.2);
      -webkit-transition: box-shadow 0.6s cubic-bezier(.17,.67,.66,1.06); 
      -moz-transition: box-shadow 0.6s cubic-bezier(.17,.67,.66,1.06); 
      -ms-transition: box-shadow 0.6s cubic-bezier(.17,.67,.66,1.06); 
      -o-transition: box-shadow 0.6s cubic-bezier(.17,.67,.66,1.06); 
      transition: box-shadow 0.6s cubic-bezier(.17,.67,.66,1.06);
  }

`

const ResourceLink = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const ImageDiv = styled.div`
    width: 12rem;
`
const Resource = ({filename, title, resourceDate, document})=>{
    return <ResourceDiv>
        <ResourceTilt options = {{ scale: 1.05, perspective:2600, max:15}} >
            <ImageDiv>
                <Image alt={filename} filename = {filename}></Image>
            </ImageDiv>
            <ResourceLink href={document} rel="noopener noreferrer" target="_blank"/>
        </ResourceTilt>
        <ResourceTitle>{title}</ResourceTitle>
        <ResourceDate>{resourceDate}</ResourceDate>
    </ResourceDiv>
}

const TitleDiv = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${({ theme }) => theme.tabletLandscape`
        padding-top: 4rem;
        padding-bottom: 4rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        padding-top: 4rem;
        padding-bottom: 4rem;
    `  };

    ${({ theme }) => theme.mobilePortrait`
        padding-top: 2rem;
        padding-bottom: 2rem;
    `};

`
const TitleText = styled.h2`
    color: ${({theme}) => theme.colours.deepBlue};
    font-size: 3rem;

    ${({ theme }) => theme.tabletLandscape`
        font-size: 2.6rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 2.2rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        font-size: 1.6rem;
    `};

    ${({ theme }) => theme.mobilePortrait`
        font-size: 1.4rem;
    `};

`

const Title = ({titleText}) => {
    return <TitleDiv>
        <TitleText>{titleText}</TitleText>
    </TitleDiv>
}


export default function Resources(props){


    return <Layout location={props.location} subtitle = "From Slides to Documents to Guidelines, you can find all our documentation here." description = "Explore all the resources we've made available for you to peruse: from general documents like our Road to 10 Campaign document, to guidelines for our Online Crisis Simulation, to slides and articles from Diplomacy Explained.">
        <SEO image="resourcesThumbnail.png" title="Resources" autoRotate = "enabled"/>
        <ResourceContainer>
        <Title titleText = {"Diplomacy Explained"}>
        </Title>
        <ResourceGrid>
            {diplomacyExplained.map(({filename, title, resourceDate, document}) => <Resource document = {document} filename = {filename} title = {title} resourceDate = {resourceDate}/>)}
        </ResourceGrid>
        {/* <Title titleText = {"Crisis Documents"}>
        </Title>
        <ResourceGrid>
            {onlineCrisis.map(({filename, title, resourceDate, document}) => <Resource document = {document} filename = {filename} title = {title} resourceDate = {resourceDate}/>)}
        </ResourceGrid>
        <Title titleText = {"General Documents"}>
        </Title>
        <ResourceGrid>
            {generalDocuments.map(({filename, title, resourceDate, document}) => <Resource document = {document} filename = {filename} title = {title} resourceDate = {resourceDate}/>)}
        </ResourceGrid> */}
        </ResourceContainer>
    </Layout>
}