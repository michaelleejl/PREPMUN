//Credit to Yong Hoon Shin

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, autoRotate }) => {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    siteLanguage,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image || defaultImage}`,
    autoRotate: autoRotate || "enabled",
  }

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta http-equiv="ScreenOrientation" content={`autoRotate:` + seo.autoRotate}></meta>

      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}

      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        siteLanguage
      }
    }
  }
`

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  autoRotate: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  autoRotate: null,
}