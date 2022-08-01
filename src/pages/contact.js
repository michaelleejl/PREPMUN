import styled from "styled-components"
import Layout from "../components/layouts/layout"
import Image from "../components/header/image"
import React, { useState, useEffect } from "react"
import SEO from "../components/seo"

const ContactsContainer = styled.div`
    padding-bottom: 7rem;
    overflow: hidden;
`
const ContactContainer = styled.div`
    background-color: ${({ theme })=>theme.colours.grey.extremeLight};
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-right: hidden;
    overflow-left: hidden;
    overflow-top: auto;
    overflow-bottom: auto;

    ${({ theme }) => theme.tabletLandscape`
        height: 90vw;
    `};

    ${({ theme }) => theme.tabletPortrait`
        padding-top: 7rem;
        height: auto;
        flex-direction: column;
    `};

    ${({ theme }) => theme.mobileLandscape`
        //height: 100rem;
    `};
`

const ImageContainer = styled.div`
    height: 70rem;
    position: relative;
    margin-right: -20rem;
    //background-color: #000000;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${({ theme }) => theme.tabletLandscape`
        height: 90vw;
        margin-right: -20rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        margin-right: 0rem;
        height: auto;
        padding-top: 3rem;
        //margin-right: -30rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        height: auto;
    `};
`

const ImageView = styled.div`
    width: 70vw;
     ${({ theme }) => theme.tabletLandscape`
        width: 80vw;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 90vw;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 100rem;
    `};
`


const NarrowImageContainer = styled.div`
    //overflow: hidden;
    height: 70rem;
    width: 60vw;
    position: relative;
    margin-right: -10rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.tabletLandscape`
        height: 90vw;
        width: 50vw;
        margin-right: 0rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        margin-right: 0rem;
        height: auto;
        padding-top: 3rem;
        //margin-right: -30rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        height: auto;
    `};
`

const NarrowImageView = styled.div`
    width: 30vw;
    //margin-top: 0rem;
     ${({ theme }) => theme.tabletLandscape`
        width: 30vw;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 30vw;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 30vw;
    `};
`


const DetailContainer = styled.div`
    width: 40vw;
    height: 70rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: #000000;
    ${({ theme }) => theme.tabletLandscape`
        width: 50vw;
        align-items: center;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        height: auto;
    `};
`
const DetailView = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
    ${({ theme }) => theme.tabletLandscape`
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        align-items: center;
        justify-content: center;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 100rem;
    `};

    ${({ theme }) => theme.mobilePortrait`
        width: 60rem;
    `};
`

const WideDetailContainer = styled.div`
    width: 60vw;
    height: 70rem;
    display: ${props => props.isHidden ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //background-color: #000000;
    ${({ theme }) => theme.tabletLandscape`
        width: 60vw;
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        height: auto;
    `};
`
const WideDetailView = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    
    ${({ theme }) => theme.tabletLandscape`
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 80vw;
        align-items: center;
        justify-content: center;
    `};

    ${({ theme }) => theme.mobileLandscape`
        width: 100rem;
    `};
`

const Name = styled.h1`
    font-size: 2rem;
    color: ${({ theme }) => theme.colours.deepBlue};
    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.8rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 1.6rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        font-size: 1.4rem;
    `};

    ${({ theme }) => theme.mobilePortrait`
        font-size: 1.1rem;
    `};

    

`

const Title = styled.h3`
    color: ${({ theme }) => theme.colours.grey.dark};
    font-size: 1.4rem;
    padding-top: 1.2rem;

    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.2rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 1.0rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        font-size: 0.8rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        padding-top: 0.9rem;
        font-size: 0.7rem;
    `};
`

const Email = styled.a`
    color: ${({ theme }) => theme.colours.grey.dark};
    font-size: 1.4rem;
    padding-top: 2.8rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-decoration: none;
    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.2rem;
        padding-top: 2.4rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 1.0rem;
        padding-top: 2.0rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        font-size: 0.8rem;
        padding-top: 1.6rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 0.75rem;
    `};
`

const Phone = styled.a`
    color: ${({ theme }) => theme.colours.grey.dark};
    font-size: 1.4rem;
    padding-top: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    text-decoration: none;
    ${({ theme }) => theme.tabletLandscape`
        font-size: 1.2rem;
        padding-top: 0.8rem;
    `};

    ${({ theme }) => theme.tabletPortrait`
        font-size: 1.0rem;
        padding-top: 0.6rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        font-size: 0.8rem;
        padding-top: 0.4rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 0.75rem;
    `};
`

const Bold = styled.span`
    &&{
        font-weight: ${({ theme }) => theme.fontWeight.black};
        //color: ${({ theme }) => theme.colours.black};
    }
    
`



export default function Contact(props){
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window === undefined) {
            return
        }
        const mql = window.matchMedia('(max-width: 768px)')
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


    return <Layout location={props.location} subtitle = "We'll always make time to engage with members of our community.">
        <SEO image="contactThumbnail.png" title="Contact" autoRotate = "enabled" description = "Feel free to get in touch with us, we won't bite. You'll be able to find the contact details for our Secretary-General, DSG (Academics), as well as links to our social media accounts."/>
        <ContactsContainer>
        <ContactContainer>
            <DetailContainer>
                <DetailView>
                    <Name> AKSHATH MALIK </Name>
                    <Title>Secretary-General</Title>
                    <Email href="mailto: akshath@prepmun.sg"> <Bold> Email </Bold> akshath@prepmun.sg </Email>
                    <Phone href="tel: +6594502352"> <Bold> Phone </Bold> 9450 2352 </Phone>
                </DetailView>  
            </DetailContainer>
            <ImageContainer>
                <ImageView>
                    <Image alt="contactPageEmail" filename = "contactPageEmail.png"></Image>
                </ImageView>
            </ImageContainer>
        </ContactContainer>

        <ContactContainer>
        <WideDetailContainer isHidden = {!isMobile}>
            <WideDetailView>
                <Name> NAJMUS SADAT NAHIAN </Name>
                <Title>Deputy-Secretary General (Academics) </Title>
                <Email href="mailto: academics@prepmun.sg"> <Bold> Email </Bold> academics@prepmun.sg </Email>
                <Phone href="tel: +6594684802"> <Bold> Phone </Bold> 9468 4802 </Phone>
            </WideDetailView> 
         </WideDetailContainer>
            <NarrowImageContainer>
                    <NarrowImageView>
                        <Image alt="contactPagePhone" filename = "contactPagePhone.png"></Image>
                    </NarrowImageView>
            </NarrowImageContainer>
            <WideDetailContainer isHidden = {isMobile}> 
                <WideDetailView>
                    <Name> NAJMUS SADAT NAHIAN </Name>
                    <Title>Deputy-Secretary General (Academics) </Title>
                    <Email href="mailto: academics@prepmun.sg"> <Bold> Email </Bold> academics@prepmun.sg </Email>
                    <Phone href="tel: +6594684802"> <Bold> Phone </Bold> 9468 4802 </Phone>
                </WideDetailView>  
            </WideDetailContainer>
        </ContactContainer>

        <ContactContainer>
            <DetailContainer>
                <DetailView>
                    <Name> SOCIAL MEDIA </Name>
                    <Email 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/prepmunsg"> 
                    <Bold> Facebook </Bold> /prepmunsg 
                    </Email>
                    <Phone 
                    target="_blank" 
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/prepmunsg"> 
                    <Bold> Instagram </Bold> @prepmunsg 
                    </Phone>
                </DetailView>  
            </DetailContainer>
            <ImageContainer>
                <ImageView>
                    <Image alt="contactPageTablet" filename = "contactPageTablet.png"></Image>
                </ImageView>
            </ImageContainer>
        </ContactContainer>
        </ContactsContainer>

    </Layout>
}