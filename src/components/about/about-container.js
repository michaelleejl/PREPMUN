import React from "react"
import styled from "styled-components"

const AboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 7rem;
    background-color: ${({ theme }) => theme.colours.white};
    ${({ theme }) => theme.tabletLandscape`
        padding-top: -3rem;
    `};
    ${({ theme }) => theme.tabletPortrait`
        flex-direction: column;
    `};
`

const TitleContainer = styled.div`
    padding-top: 0rem;
    padding-bottom: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 65vw;
    ${({ theme }) => theme.tabletLandscape`
        padding-top: 2rem;
        padding-bottom: 0rem;
        
    `};

    ${({ theme }) => theme.tabletPortrait`
        width: 70vw;
        
    `};
    
`

const TitleView = styled.div`
    width: 30rem;
    ${({ theme }) => theme.tabletPortrait`
        width: 30rem;
    `};
    
`


const SectionContainer = styled.div`
    border-bottom: solid 1px ${({ theme }) => theme.colours.grey.veryLight};
    //border-top: solid 1px ${({ theme }) => theme.colours.grey.veryLight};
    width: 65vw;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 4rem;
    padding-bottom: 4rem;
    
    ${({ theme }) => theme.tabletPortrait`
        flex-direction: column;
        width: 70vw;
        padding-top: 3rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
    `};
`

const HeaderContainer = styled.div`
    width: 12rem;
    flex-direction: column;
    justify-content: flex-start;
    line-height: 2rem;
    ${({ theme }) => theme.tabletLandscape`
        width:10rem;
    `};
`

const ParagraphsContainer = styled.div`
    width: calc(65vw - 19rem);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 7rem;
    
    ${({ theme }) => theme.tabletLandscape`
        width: calc(65vw - 13rem);
        margin-left: 2rem;
    `};
     ${({ theme }) => theme.tabletPortrait`
        width: 70vw;
        margin-left: 0rem;
        padding-top: 2rem;
    `};
`
const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    
    :first-child {
        padding-top: 0rem;
    }
`

const TitleText = styled.h3`
    font-size: 4rem;
    color: ${({ theme }) => theme.colours.black};
    font-weight: ${({ theme }) => theme.fontWeight.black};
    line-height: ${({ theme }) => theme.lineHeight.tight};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 2.8rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        font-size: 2.4rem;
    `};
`

const HeaderText = styled.h3`
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
    color: ${({ theme }) => theme.colours.grey.dark};
    font-size: 1.6rem;
    ${({ theme }) => theme.tabletLandscape`
        font-size:1.4rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        font-size: 1.4rem;
    `};
`

const ParagraphText = styled.p`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: 1.0rem;
    line-height: ${({ theme }) => theme.lineHeight.relaxed};
    color: ${({ theme }) => theme.colours.grey.light};
    ${({ theme }) => theme.tabletPortrait`
        font-size: 1rem;
    `};
    ${({ theme }) => theme.mobileLandscape`
        font-size: 0.9rem;
    `};
`

export default function AboutContainer(props){
   return <AboutDiv>
            <TitleContainer>
                <TitleView>
                        <TitleText>{props.titleText}</TitleText>
                </TitleView>
            </TitleContainer>
            {props.bodyTexts.map((body) => {
                return (
                    <SectionContainer>
                        <HeaderContainer>
                            <HeaderText>{body.header}</HeaderText>
                        </HeaderContainer>
                        <ParagraphsContainer>
                        {body.paragraphs.map((paragraph) => {
                            return (
                                <ParagraphContainer>
                                    <ParagraphText>{paragraph}</ParagraphText>
                                </ParagraphContainer>
                            )
                        })}    
                        </ParagraphsContainer>
                    </SectionContainer>
                )
            })}
        </AboutDiv>
}