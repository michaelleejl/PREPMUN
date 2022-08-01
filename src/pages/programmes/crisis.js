import styled from "styled-components"
import Layout from "../../components/layouts/crisis-layout"
import Image from "../../components/header/image"
import React, { useState, useEffect } from "react"
import AboutContainer from "../../components/about/about-container"
import SEO from "../../components/seo"

const signUpLink = 'https://forms.gle/j4KGNQ6ZXBA1wdf3A'

const aboutCrisisParagraphs = ["PREPMUN’s Crisis Team has developed a concept we call the Floating Room Structure (FRS). Given that logistical and physical constraints no longer bound us, we are prepared to create additional council rooms based on the real-world concerns of diplomacy and partisanship, allowing delegates to move between rooms freely given appropriate directives.", "We are also looking to maximise fluidity by heavily amending the typical MUN Rules of Procedure. With PREPMUN Crisis now going fully online, we are seeking to emphasise informal diplomacy just as heavily, if not more so, meaning that many Rules of Procedure will be adapted to guarantee that diplomacy feels fluid through its informality. By tailoring the Crisis Experience, we plan to turn the lack of physical interaction into our foremost strength."] 
const historicalParagraphs = ["In the early 20th century, the ruling Manchu Qing Dynasty of China was plagued with cries for constitutional reforms, struggles to deal with colonial powers, and a nascent Han Chinese nationalist movement. Forced to contend with the various domestic and international pressures, the ailing Qing bureaucracy was humiliated in the Boxer Uprising.", "On 9 October 1911, a bomb made by revolutionaries was unexpectedly set off, forcing the revolutionaries to instigate the Wuchang Uprising. The incumbent Qing were taken aback by the sudden uprising, which shocked even the revolutionary leaders who had not planned for it. In a matter of weeks, China was swept into uprisings across the country as provinces declared their independence from the Empire to forge a new Republic. Eventually, then-Qing Emperor — Emperor Puyi — abdicated on 12 February 1912, and the Republic of China was established."]
const councilParagraphs = [
    "The crisis simulation will involve 3 main types of councils:  Qing Court, Local Officials and Revolutionaries. Delegates will represent various figures that played significant roles during the Revolution.",
    "The Qing Court is the centre of China’s political organisation. As China’s highest governing body, officials in the Qing Court will represent the ruling Manchu interests.",
    "The local officials play an extremely pertinent role in Qing China, as the sheer size of the country means that day-to-day governance of various regions is in their hands. In 1911, Qing China was divided into provinces, each run by its own civilian governor. Given the unique system of governance in the Qing China, local administrators are given the liberty to pledge allegiance to either the Qing or the new Republic, as the Revolution unfolds.",
    "Revolutionaries had been actively calling for reforms and the voices for revolution grew louder as the efficiency of the Qing court waned. However, given the sheer size of China, many individual revolutionary organisations were formed, with different objectives, leaders and tactics, and not all were on good terms. Revolutionary leaders must, therefore, find common ground, against their conflicting interests, to see the revolution through."
]
const CrisisHeader = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: calc(0.65 * 0.5580222 * 110rem);
    overflow: hidden;
    height: calc(0.5580222 * 110rem);
   
    ${({ theme }) => theme.tabletLandscape`
        margin-bottom: 0;
        padding-bottom: 0;
        padding-top: 70vh;
        height: calc(0.5580222 * 120rem);
    `};

    ${({ theme }) => theme.tabletPortrait`
        padding-top: 80vh;
        height: calc(0.5580222 * 120rem)
        
    `};
    ${({ theme }) => theme.mobileWideLandscape`
        padding-top: 70vh;
        height: 100vh;
    `};
`
const CrisisHeaderText = styled.h1`
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    color: white;
    opacity: 1;
    font-size: 5rem;
    position: relative; 
    ${({ theme }) => theme.tabletLandscape`
        font-size: 4rem;
    `};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 3rem;
    `};
    ${({ theme }) => theme.mobileWideLandscape`
        font-size: 1.8rem;
    `};
`

const CrisisSubtitle = styled.h2`
    padding-top: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.heavy};
    font-size: 2rem;
    opacity: 0.8;
    color: white;
    text-align: center;
    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.6rem;
    `};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 1.2rem;
    `};
    ${({ theme }) => theme.mobileWideLandscape`
        font-size: 1rem;
    `};
`

const ImageContainer = styled.div`
    width: 110rem;
    height: calc(0.5580222 * 110rem);
    position: absolute;
    margin-left: calc(50vw - 55rem);
    padding-top: -10rem;
    y: 0;
    
    
    overflow: hidden;
    ${({ theme }) => theme.tabletLandscape`
        width: 120rem;
        margin-left: calc(50vw - 60rem);
        height: calc(0.5580222 * 120rem);
        //height: 80vh;
    `};
    ${({ theme }) => theme.mobileWideLandscape`
        width: 40rem;
        margin-left: calc(50vw - 20rem);
        height: calc(1.38349515*40rem);
        //height: 80vh;
        margin-top: calc(100vh - 1.38349515*40rem);
    `};
    
`

const ImageOverallContainer = styled.div`
    //height: 100vh;
    //width: 100vh;
    overflow: hidden;
    position: relative;
`

const ContentDiv = styled.div`
    width: 100vw;
    margin-top: 10rem;
    ${({ theme }) => theme.tabletLandscape`
        margin-top: 5rem;
    `};
    ${({ theme }) => theme.tabletPortrait`
        margin-top: 5rem;
    `};
    ${({ theme }) => theme.mobileWideLandscape`
        margin-top: 2rem;
    `};
`

const RegisterDiv = styled.div`
    background-color: ${({ theme }) => theme.colours.deepYellow};
    width: 100vw;
    height: 25rem;
    margin-bottom: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.tabletPortrait`
        flex-direction: column;
        height: 30rem;
    `};
`

const RegisterButton = styled.button`
    width: 100vw;
    height: 25rem;
    position: absolute;
    opacity: 0;
`

const CrisisLogoImageDiv = styled.div`
    width: 15rem;
    height: 15rem;
    ${({ theme }) => theme.tabletPortrait`
        width: 12rem;
        height: 12rem;
    `};
`

const SignUpContainerDiv = styled.div`
    width: 20rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ theme }) => theme.tabletPortrait`
        padding-top: 2rem;
        align-items: center;
        height: auto;
    `};
`
const SignUpHeader = styled.h1`
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colours.white};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 2rem;
    `};
`

const SignUpSubtitle = styled.h2`
    font-size: 1.8rem;
    line-height: 2.2rem;
    padding-top: 1rem;
    opacity: 1;
    color: ${({ theme }) => theme.colours.white};
    ${({ theme }) => theme.tabletPortrait`
        display: none;
        font-size: 1.2rem;
        line-height: 1.4rem;
        padding-top: 0.6rem;
    `};
`

const SeparatorDiv = styled.div`
    width: 0.1rem;
    height: 15rem;
    background-color: ${({ theme }) => theme.colours.white};
    margin-left: 3rem;
    margin-right: 3rem;
    ${({ theme }) => theme.tabletPortrait`
        display: none;
    `};
`

const openLink = (link) => {
    window.open(link)
}

export default function Crisis(props){
    let [isMobile, setIsMobile] = useState(true)
    let registerTitle = isMobile ? "REGISTER HERE" : "REGISTER"
    let imageLink = isMobile ? "prepmunCrisisCoverMobile.jpg" : "prepmunCrisisCover.jpg"
    useEffect(() => {
        if (window === undefined) {
            return
        }
        const mql = window.matchMedia('(max-width: 540px)')
        const mediaListener = media => {
        if (media.matches) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
          }
      
          mediaListener(mql)
          mql.addListener(mediaListener)
          return () => {
            mql.removeListener(mediaListener)
            };
    }, []);
    

    return <Layout location={props.location}>
        <SEO title="Crisis" autoRotate = "enabled" description = "A Revolutionary Crisis"/>
        <ImageOverallContainer>
        <ImageContainer>
            <Image alt="Crisis Cover Page" filename = {imageLink}></Image>
        </ImageContainer>
        <CrisisHeader>
            <CrisisHeaderText>
                PREPMUN CRISIS
            </CrisisHeaderText>
            <CrisisSubtitle>
                <p>Revolution of Our Time</p>
                <p>12 - 15 Dec 2020</p>
            </CrisisSubtitle>
        </CrisisHeader>
        </ImageOverallContainer>
        <ContentDiv>
            <AboutContainer
                titleText = "About Crisis"
                bodyTexts = {
                    [
                        {header: "Revolutionary New Features", paragraphs:aboutCrisisParagraphs},
                        {header: "Historical Background", paragraphs:historicalParagraphs},
                        {header: "Councils", paragraphs:councilParagraphs}
                    ]}

            />
        </ContentDiv>
        
        <RegisterDiv>
            <CrisisLogoImageDiv>
                <Image alt="Crisis Logo" filename = "CrisisLogo.png"/>
            </CrisisLogoImageDiv>
            <SeparatorDiv />
            <SignUpContainerDiv>
                <SignUpHeader>{registerTitle}</SignUpHeader>
                <SignUpSubtitle>Click Here to Sign Up. Register by 14 Nov. </SignUpSubtitle>
            </SignUpContainerDiv>
            <RegisterButton onClick = {()=>openLink(signUpLink)} />
        </RegisterDiv>

    </Layout>
}