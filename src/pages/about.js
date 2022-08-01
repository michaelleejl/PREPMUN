import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layouts/layout"
import Image from "../components/header/image"
import AboutContainer from "../components/about/about-container"
import SEO from "../components/seo"

const AboutDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TitleDiv = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;
    padding-left: calc(50vw - 22rem);
    padding-right: calc(50vw - 22rem);
    width: 100vw;
    display: flex;
    align-items: center;
    //justify-content: space-evenly;
    flex-direction: column;
    text-align: center;

    ${({ theme }) => theme.tabletPortrait`
        padding-left: calc(50vw - 10rem);
        padding-right: calc(50vw - 10rem);
    `};

    ${({ theme }) => theme.mobilePortrait`
        padding-left: calc(20vw);
        padding-right: calc(20vw);
    `};
`

const TitleText = styled.h3`
    padding-top: 1rem;
    font-size: 2.8rem;
    line-height: ${({ theme }) => theme.lineHeight.tight};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 2.2rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 1.6rem;
    `};
`

const SubtitleText = styled.h2`
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colours.grey.dark};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 1rem;
    `};
`

const ImageDiv = styled.div`
    width: 90vw;
    padding-bottom: 6rem;
    ${({ theme }) => theme.tabletPortrait`
        width: 100vw;
        padding-bottom: 4rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        width: 100vw;
`};
`

const SectionDiv = styled.div`
    display: flex;
    flex-direction: column;
    //
    //padding-bottom: 6rem;
    justify-content: center;
    align-items: center;
    
`

const SectionTextDiv = styled.div`
    padding-left: calc(50vw - 22rem);
    padding-right: calc(50vw - 22rem);
    padding-bottom: 6rem;
    ${({ theme }) => theme.tabletPortrait`
        padding-left: calc(50vw - 12rem);
        padding-right: calc(50vw - 12rem);
        padding-bottom: 4rem;
    `};

    ${({ theme }) => theme.mobileLandscape`
        padding-left: calc(50vw - 10rem);
        padding-right: calc(50vw - 10rem);
        padding-bottom: 4rem;
    `};

    ${({ theme }) => theme.mobilePortrait`
        padding-left: calc(10vw);
        padding-right: calc(10vw);
    `};

`

const Title = ({titleText, subtitleText}) => {
    return <TitleDiv>
        <SubtitleText>{subtitleText}</SubtitleText>
        <TitleText>{titleText}</TitleText>
    </TitleDiv>
}

const SectionText = styled.h4`
    font-size: 1.4rem;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colours.grey.dark};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 1rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        font-size: 0.8rem;
    `};
    ${({ theme }) => theme.mobilePortrait`
        font-size: 0.65rem;
    `};
`

const SectionHeader = styled.span`
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    color: ${({ theme }) => theme.colours.deepBlue};
`

const Section = ({imageAlt, imageLink, sectionHeader, sectionText}) => {
   return <SectionDiv>
       <SectionTextDiv>
        <SectionText> <SectionHeader> {sectionHeader} </SectionHeader> {sectionText} </SectionText>
       </SectionTextDiv>
       <ImageDiv> <Image alt={imageAlt} filename = {imageLink}> </Image> </ImageDiv>
    </SectionDiv>
}
export default function About(props){

    return <Layout location={props.location} subtitle="Find out more about us: who we are, what we do, and why we do it.">
        <SEO image="aboutThumbnail.png" title="About" description="Find out all about PREPMUN. As we explain our history, our journey, our ethos, and our aims, you'll find out a little more about what we do, and why we do it. Or rather, who we do it for: you." autoRotate = "enabled"/>
        <AboutDiv>

       
        <Title 
        subtitleText = {"Our Raison d'Être"}
        titleText = {"To develop all members of our community, from all walks of life."}
        >
        </Title>
        <ImageDiv>
            <Image alt={"about"} filename = {"about.jpg"}> </Image>
        </ImageDiv>
        </AboutDiv>

        <Section
        sectionHeader = {"Our Ethos"}
        sectionText = {"We seek to equip student participants with the core competencies required to participate in Model UN Conferences. Core competencies developed through our programmes include public speaking, negotiation skills, and leadership."}
        imageAlt = {"ethos"}
        imageLink = {"ethos.jpg"}
        >

        </Section>

        <Section
        sectionHeader = {"Our Aims"}
        sectionText = {"are twofold. First, to broaden access to Model UN and other similar simulation programmes in Singapore; second, to inject greater academic rigour in these experiences. We seek to provide an ideal platform for student participants to hone both their hard and soft skills while discussing pressing current affairs."}
        imageAlt = {"aims"}
        imageLink = {"aims.jpg"}
        >
        </Section>

        <Section
        sectionHeader = {"Our Growth"}
        sectionText = {"has been spectacular. In 2011, we launched as a 100-delegate conference. Almost nine years on, we have expanded to accommodate 900 delegates: making us one of the largest simulation conferences in Singapore. We couldn't have done it without you."}
        imageAlt = {"growth"}
        imageLink = {"growth.jpg"}
        >
        </Section>

        <Section
        sectionHeader = {"Our Community"}
        sectionText = {"is not only the heart of what we do, it is what defines us. In 2019, we ended our association with the United Nations Association of Singapore. UNASMUN was reborn as PREPMUN, but our community remained unchanged, and so we remained unchanged."}
        imageAlt = {"community"}
        imageLink = {"community.jpg"}
        >
        </Section>
        
    </Layout>


}