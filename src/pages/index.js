import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Logo from '../components/logo'
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <div className="layout-wrapper">
        <SEO title="Witryna w budowie" />
        <div className="column">
          <div className="logo">
            <Logo />
          </div>
          <div className="content">
            <p>Witryna w budowie...</p>
            <p>Zapraszam na fanpage, link poniżej:</p>
          </div>
          <div>
            <a className="button" href="https://www.facebook.com/JustMemoriesPhoto">
              <svg width="22" height="36" viewBox="0 0 30 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M26.1694 27L27.5026 18.3131H19.1672V12.6759C19.1672 10.2994 20.3316 7.98281 24.0647 7.98281H27.8541V0.586875C27.8541 0.586875 24.4154 0 21.1276 0C14.2632 0 9.77631 4.16063 9.77631 11.6925V18.3131H2.146V27H9.77631V48H19.1672V27H26.1694Z"
                  fill="black" />
              </svg>
              <p style={{ margin: '0 0 0 21px' }}>JustMemoriesPhoto</p>
            </a>
          </div>
        </div>
        <div className="column">
          <div className="image">
            <Image />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage