/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Home from "../images/home.gif"
import Links from "../images/links.gif"
import Guests from "../images/guests.gif"
import Email from "../images/email.gif"

import "./layout.css"

const Layout = ({ children }) => {
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
    <>
     <Header siteTitle={data.site.siteMetadata?.title || `Bring the 90s Back`} />
      <table style={{margin: "1rem"}}>
        <tbody height="100vh"> 
          <tr>
            <td>
              <tr>
                <a href="/homepage">
                  <img src={Home} alt="Home" />
                </a>
              </tr>
              <tr>
                <a href="/links">
                  <img src={Links} alt="Links" />
                </a>
              </tr>
              <tr>
                <a href="/guestbook">
                  <img src={Guests} alt="Guests" />
                </a>
              </tr>
              <tr>
                <a href="mailto:hello@fabiorosado.dev">
                  <img src={Email} alt="email" />
                </a>
              </tr>

            </td>
            <td>
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
