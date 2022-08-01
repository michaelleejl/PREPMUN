import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

export const UnstyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colours.white};
    font-family: ${({ theme }) => theme.bodyFont.sans};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    opacity: 1;
    transition: all 0.2 ease;

    ${({ theme }) => theme.tabletPortrait`
    text-decoration: none;
    color: ${({ theme }) => theme.colours.white};
    font-family: ${({ theme }) => theme.bodyFont.sans};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    opacity: 0.5;
    transition: all 0.2 ease;
    &:hover {
        opacity: 1;
        font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    }
    `}
`