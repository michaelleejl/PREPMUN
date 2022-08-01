import React from "React"
import Image from "../components/header/image"
import styled from "styled-components"
import Tilt from "react-tilt"
import SEO from "../components/seo"

const pages = [
    {
        filename: "homeThumbnail.png",
        link: "/",
        title: "Home"
    },
    {
        filename: "aboutThumbnail.png",
        link: "/about",
        title: "About"
    },
    {
        filename: "programmesThumbnail.png",
        link: "/programmes",
        title: "Programmes"
    },
    {
        filename: "weeklyThumbnail.png",
        link: "/weekly",
        title: "Weekly"
    },
    {
        filename: "contactThumbnail.png",
        link: "/contact",
        title: "Contact"
    },
    {
        filename: "resourcesThumbnail.png",
        link: "/resources",
        title: "Resources"
    },

]
const ZoinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ZoinksDiv = styled.div`
    background-color: ${({ theme }) => theme.colours.deepBlue};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    min-height: 100vh;
    padding-top: 4rem;
    padding-bottom: 4rem;
`
const ZoinksBackground = styled.div`
    background-color: ${({ theme }) => theme.colours.deepBlue};
    height: 700vh;
    width: 100%;
    top: -300vh;
    left: 0;
    position: fixed;
    //z-index: -1;
`

const TitleDiv = styled.div`
    width: 40rem;
    text-align: center;
    ${({ theme }) => theme.tabletLandscape`
        width: 30rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        width: 20rem;
    `};
`

const Title = styled.h2`
    font-size: 4rem;
    color: ${({ theme }) => theme.colours.white};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    ${({ theme }) => theme.tabletLandscape`
        font-size: 3rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        font-size: 2rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 1.6rem;
    `};
`

const Subtitle = styled.h3`
    font-size: 2rem;
    color: ${({ theme }) => theme.colours.yellow};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    padding-top: 2.6rem;
    ${({ theme }) => theme.tabletLandscape`
    font-size: 2.2rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        padding-top: 1.2rem;
        font-size: 1.4rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 1.2rem;
    `};
`

const PagesGrid = styled.div`
    padding-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    //padding-bottom: 6rem;
    width: 60rem;
    ${({ theme }) => theme.tabletLandscape`
        grid-template-columns: 1fr 1fr;
        width: 30rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        grid-template-columns: 1fr;
        width: 12rem;
        padding-top: 4rem;
    `};
    
`

const PagesDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    //background-color: ${({ theme }) => theme.colours.grey.light};
    padding-left:4rem;
    padding-right:4rem;
    padding-top: 2rem;
    
    ${({ theme }) => theme.tabletLandscape`
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        padding-left: 0rem;
        padding-right: 0rem;
        padding-bottom: 1rem;
    `};

   
`

const PagesTitle = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    line-height: ${({ theme }) => theme.lineHeight.tight};
    color: ${({ theme }) => theme.colours.white};
`

const PagesTilt = styled(Tilt)`
  display: flex;
  align-items: stretch;
  border: 1px solid ${({ theme }) => theme.colours.grey.veryLight};
  border-radius: 0.2rem;
  overflow: hidden;
  margin-bottom: 1.5rem;

`

const PagesLink = styled.a`

  position: absolute;
  top: 0;
  left: 0;
  width: 12rem;
  height: calc(0.5422619 * 12rem);
  
`

const ImageDiv = styled.div`
    width: 12rem;
`
const Pages = ({filename, title, link})=>{
    return <PagesDiv>
        <PagesTilt options = {{ scale: 1.05, perspective:2600, max:15}} >
            <ImageDiv>
                <Image alt={filename} filename = {filename}></Image>
            </ImageDiv>
            <PagesLink href={link}/>
        </PagesTilt>
        <PagesTitle>{title}</PagesTitle>
    </PagesDiv>
}

export default () => {
    return <ZoinksContainer>
        <SEO title="404" autoRotate = "enabled"/>
        <ZoinksDiv>
        <TitleDiv>
            <Title> This is not the page you're looking for. </Title>
            <Subtitle>Try one of these instead. </Subtitle>
        </TitleDiv>
        <PagesGrid>
            {pages.map(({filename, title, link}) => <Pages link = {link} filename = {filename} title = {title}/>)}
        </PagesGrid>
        </ZoinksDiv>
       
        
        
    </ZoinksContainer>
}