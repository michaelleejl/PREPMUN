//Credit to Samuel Resua for the following implementation
import { css } from "styled-components"

const mediaSizes = {
  mobilePortrait: 320,
  mobileLandscape: 480,
  mobileWideLandscape: 540,
  tabletPortrait: 768,
  allPhones: 896,
  tabletLandscape: 992,
  laptop: 1200,
}

export default Object.keys(mediaSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${mediaSizes[label]}px) {
      ${css(...args)};
    }
  `

  return acc
}, {})