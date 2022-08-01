import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import Image from "../components/header/image"
import SEO from "../components/seo"

const WeeklyContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row,
    align-items: flex-start;
    justify-content: flex-start;
    //overflow: hidden;
    overflow-bottom: visible;
    overflow-left: hidden;
    overflow-right: hidden;

    ${({ theme }) => theme.allPhones`
        flex-direction: column,
        align-items: center;
        justify-content: flex-start;
        //overflow: scroll;
        overflow: visible;
        display: inline-block;
        height: calc(8.36457143 * 23.7154149vh + (190/653) * 100vh)
        //margin-bottom: -44rem;
        //over-scroll: hidden;
        
    `};

`

const StickyContainer = styled.div`
    width: 50vw;
    height: 100vh;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    z-index: 3;
    ${({ theme }) => theme.allPhones`
        top: ${props => props.isLandscape ? "20px":"60px"};
        width: 100vw;
        height: 80vh;
        
    `};
`

const HiddenDivTop = styled.div`
    position: absolute;
    height: calc(50vh - 20.2833333rem);
    top: 0px;
    width: 100vw;
    background: ${({ theme }) => theme.colours.white};
    z-index: 3;

    ${({ theme }) => theme.allPhones`
        
        top: ${props => props.isLandscape ? "calc(-20px)" : "calc(-60px)"} ;
        height: ${props => props.isLandscape ? "calc(10vh + 20px)" : "calc(10vh + 60px)"} ;
    `};
    
`
const HiddenDivBottom = styled.div`
    position: absolute;
    height: calc(50vh - 10.626333rem);
    top: calc(50vh + 20.023333rem);
    width: 100vw;
    background: ${({ theme }) => theme.colours.white};
    z-index: 3; 
    ${({ theme }) => theme.allPhones`
        top: calc(60vh - 5px); 
        height: calc(40vh + 5px);
    `}
    
`

const HiddenDivLeft = styled.div`
    position: absolute;
    height: 100vh;
    left: 0;
    top: 0;
    width: calc(50vw - 23rem);
    background: ${({ theme }) => theme.colours.white};
    z-index: 2;
    ${({ theme }) => theme.allPhones`
        width: calc(50vw - 7.5rem);
        height: 60vh;
        padding: 0;        
    `};
`
const HiddenDivRight = styled.div`
    position: absolute;
    height: 100vh;
    right: 0;
    top: 0;
    width: calc(50vw + 3rem);
    background: ${({ theme }) => theme.colours.white};
    z-index: 2; 
    ${({ theme }) => theme.allPhones`
        width: calc(50vw - 7.5rem);
        padding: 0;        
    `};
`

const ImageContainer = styled.div`
    position: absolute;
    top: calc(50vh - 21.0833333rem);
    left: 0;
    display: ${props => props.isHidden ? "none":"flex"};
    flex-direction: row;
    width: 50vw;
    padding-right: 3rem;
    justify-content: flex-end;
    z-index: 4;
    -webkit-transition: position 0.2s; 
    -moz-transition: position 0.2s; 
    -ms-transition: position 0.2s; 
    -o-transition: position 0.2s; 
    transition: position 0.2s;

    ${({ theme }) => theme.allPhones`
        //background: ${({theme}) => theme.colours.yellow};
        top: calc(10vh);
        flex-direction: column;
        left: calc((100vw - 23.7154149vh)/2);
        width: 23.7154149vh;
        padding: 0;
        justify-content: center;
        align-items: center;
    `};

`
const ImageView = styled.div`
    width: 20rem;
    height: 42.1666666 rem;

    ${({ theme }) => theme.allPhones`
        width: 100%;
    `};
`

const RotateNotificationDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;

`

const ImageInsertContainer = styled.div`
    position: absolute;
    width: 50vw;
    display: ${props => props.isHidden ? "none":"flex"};
    flex-direction: row;
    justify-content: flex-end;
    padding-right: 3.625rem;
    padding-top: calc(50vh - 21.0833333rem);
    padding-bottom: calc(50vh - 21.0833333rem);
    height: calc(8.36457143 * 20rem + 3rem);
    overflow: hidden;
    z-index: 1;

    ${({ theme }) => theme.allPhones`
        z-index: 1;
        margin-top: calc(10vh);
        height: calc(8.36457143 * 23.7154149vh + (140/653) * 100vh);
        //margin-bottom: calc(50vh - 24.0833333rem);
        flex-direction: column,
        left: auto;
        width: 100vw;
        padding: 0;
        justify-content: center;
        align-items: flex-start;
    `};
`

const ImageInsertView = styled.div`
    width: calc(20rem * 0.9375);
    overflow-left: hidden;
    overflow-right: hidden;
    ${({ theme }) => theme.allPhones`
        width: calc(23.7154149vh * 0.9375);
    `};
`

const TextContainer = styled.div`
   //margin-left: 50vw;
    padding-top: calc(50vh - 42.1666666rem * 0.37584079);
    padding-bottom: calc(50vh - 42.1666666rem * 0.37584079);
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding-left: 3rem;
    z-index: 2;
    position: static;

    ${({ theme }) => theme.allPhones`
        position: sticky;
        //background: ${({ theme }) => theme.colours.yellow};
        flex-direction: column;
        width: 100vw;
        padding: 0; 
        z-index: 5;
        height: 20vh ;
        margin-top: calc(-14vh);
        top: ${props => props.isLandscape ? "calc(70vh)" : "calc(70vh + 30px)"} ;
    `};

`

const Bold = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.black};
    color: ${({ theme }) => theme.colours.deepBlue};

`

const InformationText = styled.h3`
    color: ${({ theme }) => theme.colours.black};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 1rem;
    padding-top: 1.2rem;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};

    ${({ theme }) => theme.allPhones`
        font-size: ${props => props.isLandscape ? "max(1.6vh, 1.6vw)" : "max(1.6vh, 1.4vw)"} ; 
    `};

`

const TextView = styled.div`
    height: calc(42.1666666rem * 0.67990324);
    width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    //
    //margin-bottom: 0.5rem;
    //margin-top: 0.5rem;
    position: static;
    
    ${({ theme }) => theme.allPhones`
        position: absolute;
        width: 100vw;
        height: 100%;
        padding-left: calc(10vw);       
        padding-right: calc(10vw);
        opacity: ${props => props.active ? "1":"0"}; 
        z-index: ${props => props.active ? "1":"-1"}; 
        -webkit-transition: opacity 0.2s ; 
        -moz-transition: opacity 0.2s ; 
        -ms-transition: opacity 0.2s cubic-bezier(.17,.67,.66,1.06); 
        -o-transition: opacity 0.2s cubic-bezier(.17,.67,.66,1.06); 
        transition: opacity 0.2s cubic-bezier(.17,.67,.66,1.06);
        transition-delay: ${props => props.delay}s;
    `};

`

const TextLink = styled.a`
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    color: ${({ theme }) => theme.colours.black};
    text-decoration: none;
`
export default function Weekly(props){


    const [scrollTop, setScrollTop] = useState(0)
    const [isMobile, setMobile] = useState(false)
    const [reccActive, setReccActive] = useState(false)
    const [rewActive, setRewActive] = useState(false)
    const [recActive, setRecActive] = useState(false)
    const [expActive, setExpActive] = useState(false)
    const [ansActive, setAnsActive] = useState(false)
    const [reccDelay, setReccDelay] = useState(0)
    const [rewDelay, setRewDelay] = useState(0)
    const [recDelay, setRecDelay] = useState(0)
    const [expDelay, setExpDelay] = useState(0)
    const [ansDelay, setAnsDelay] = useState(0)
    const [isLandscape, setLandscape] = useState(false)

    useEffect(() => {
        if (window === undefined) {
            return
        }

        
        let height;
        let scrollunit;
        if (isMobile){
            scrollunit = Math.floor(0.66*50/100*(window.innerHeight))
        } else {
            scrollunit = convertRemToPixels(18.9333333);
        }

        const mql = window.matchMedia('(max-width: 896px)')
        const mediaListener = media => {
        if (media.matches) {
                
                setMobile(true)
                if (window.innerHeight > window.innerWidth){
                    setLandscape(false)
                    height = Math.floor(60/100*(document.body.clientWidth))
                } else {
                    if (window.innerWidth > 768) {
                        setLandscape(true)
                        height = Math.floor(60/100*(document.body.clientHeight))
                    } else {
                        height = Math.floor(60/100*(document.body.clientWidth))
                    }
                    
                    
                }
            } else {
                height = Math.floor(31/100*(document.body.clientWidth))
                setMobile(false)
            }
          }
              
          mediaListener(mql)
          mql.addListener(mediaListener)
           
          const onScroll = e => {
            setScrollTop(e.target.documentElement.scrollTop);
            
            
                if ('scrollRestoration' in window.history) {
                    window.history.scrollRestoration = 'manual'
                  }
                if (height - 2 * scrollunit < scrollTop && scrollTop < height + 1 * scrollunit){
                    setReccActive(true)
                    setRewActive(false)
                    setRecActive(false)
                    setExpActive(false)
                    setAnsActive(false)

                    setReccDelay(0.2)
                    setRewDelay(0)
                    setRecDelay(0)
                    setExpDelay(0)
                    setAnsDelay(0)
                }
                if (height + 1 * scrollunit < scrollTop && scrollTop < height + 2 * scrollunit){
                    setReccActive(false)
                    setRewActive(true)
                    setRecActive(false)
                    setExpActive(false)
                    setAnsActive(false)

                    setReccDelay(0)
                    setRewDelay(0.2)
                    setRecDelay(0)
                    setExpDelay(0)
                    setAnsDelay(0)
                }
                if (height + 2 * scrollunit < scrollTop && scrollTop < height + 3 * scrollunit){
                    setReccActive(false)
                    setRewActive(false)
                    setRecActive(true)
                    setExpActive(false)
                    setAnsActive(false)

                    setReccDelay(0)
                    setRewDelay(0)
                    setRecDelay(0.2)
                    setExpDelay(0)
                    setAnsDelay(0)
                }
                if (height + 3 * scrollunit < scrollTop && scrollTop < height + 4 * scrollunit){

                    setReccActive(false)
                    setRewActive(false)
                    setRecActive(false)
                    setExpActive(true)
                    setAnsActive(false)

                    setReccDelay(0)
                    setRewDelay(0)
                    setRecDelay(0)
                    setExpDelay(0.2)
                    setAnsDelay(0)
                }
                if (height + 4 * scrollunit < scrollTop && scrollTop < height + 5 * scrollunit){
                    setReccActive(false)
                    setRewActive(false)
                    setRecActive(false)
                    setExpActive(false)
                    setAnsActive(true)

                    setReccDelay(0)
                    setRewDelay(0)
                    setRecDelay(0)
                    setExpDelay(0)
                    setAnsDelay(0.2)
                }
            
          };
        
          window.addEventListener("scroll", onScroll)

          return () => {
            mql.removeListener(mediaListener)
            window.removeEventListener("scroll", onScroll)
          }

    }, [scrollTop]);

    function convertRemToPixels(rem) {    
        return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    }


    return <Layout location={props.location} subtitle = "Episodes launch every Tuesday, Thursday, and Sunday. From now until December. ">
        <SEO image="weeklyThumbnail.png" title="Weekly" autoRotate = "disabled" description = "Find out more about Weekly: PREPMUN's all new, all original program to keep you up to date and entertained from June to December 2020. Episodes drop every Tuesday, Thursday, and Sunday."/>
        <WeeklyContainer>
        <ImageInsertContainer>
                    <ImageInsertView>
                        <Image alt="weeklyPagePhoneInsert" filename = "weeklyPageInsert.png"> </Image>
                    </ImageInsertView>
        </ImageInsertContainer>
            <StickyContainer isLandscape = {isLandscape}>
            <HiddenDivTop isLandscape = {isLandscape} id={"hiddenDivTop"}></HiddenDivTop>
            <HiddenDivLeft id={"hiddenDivLeft"}/>
            <HiddenDivBottom id={"hiddenDivBottom"}></HiddenDivBottom>
            <ImageContainer id={"imageContainer"}>
                <ImageView>
                    <Image alt="weeklyPagePhoneCutOut" filename = "weeklyPageCutout.png"> </Image>
                </ImageView>
            </ImageContainer>
            </StickyContainer>
            <TextContainer id = {"textContainer"} isLandscape = {isLandscape}>
                    <TextView active = {reccActive} delay = {reccDelay}>
                        <InformationText isLandscape={isLandscape}>
                            <Bold>Recommends. </Bold> Feel like your speeches lack a special something? This is for you. On alternate Tuesdays at 8pm, 
                            starting from 9 June 2020, we will be deconstructing a famous historical speech, pointing out what exactly makes the speech so great. 
                            Hopefully, you'll be able to pick up on one or two things that'll help you sharpen your public speaking skills. 
                        </InformationText>
                    </TextView>

                    <TextView active = {rewActive} delay = {rewDelay}>
                        <InformationText  isLandscape = {isLandscape}>
                            <Bold>Rewinds. </Bold> Eager for a trip down memory lane? Wondering what MUN is really like? 
                            Look no further than Rewinds. Every alternate Thursday, starting from 11 June 2020, we'll be featuring memories of past conferences. 
                            Written by alumni from all walks of life. To all alumni: if you have a memory to share, you can submit it 
                            <TextLink 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={"https://docs.google.com/forms/d/1HaUyKoQUMHwJ7iq6CKUVc5KhchOyht_dwP2oqKeD5jw/edit"}> here</TextLink>.
                        </InformationText>
                    </TextView>

                    <TextView active = {recActive} delay = {recDelay}>
                        <InformationText  isLandscape = {isLandscape}>
                            <Bold>Recaps. </Bold> Would you like to keep up with the news despite a suffocating schedule?
                            Every Sunday at 8pm, starting from 14 June 2020, we'll be picking out and posting summaries of the 3 biggest stories that week. 
                            We'll also supplement our summaries with links to articles we've consulted. You can find that 
                            <TextLink 
                            target="_blank" 
                            rel="noopener noreferrer"
                            href={"https://www.tinyurl.com/prepmunrecaps"}> here</TextLink>.
                        </InformationText>
                    </TextView>

                    <TextView active = {expActive} delay = {expDelay}>
                        <InformationText  isLandscape = {isLandscape}>
                            <Bold>Explains. </Bold> Is there a topic which, try as you might, you just can't understand? 
                            You're in for a treat. On alternate Tuesdays at 8pm, starting from 16 June 2020, we'll be breaking down complex topics like
                            Artificial Intelligence and Monetary Policy in an understandable fashion. You can send us requests for topics 
                            <TextLink href={"mailto: academics@prepmun.sg"}> here</TextLink>.
                        </InformationText>
                    </TextView>

                    <TextView active = {ansActive} delay = {ansDelay}>
                        <InformationText  isLandscape = {isLandscape}>
                            <Bold>Answers. </Bold> Are you curious about what a DSG does, or what Akshath eats for breakfast?
                            Why not ask them directly? On alternate Thursdays at 8pm, starting from 18 June 2020, a different member of our Secretariat
                            will be answering your questions. We'll post a story at 9am on the day for you to ask your questions.
                        </InformationText>
                    </TextView>

            </TextContainer>
            
        </WeeklyContainer>
    </Layout>
}