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
     <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <table style={{margin: "1rem"}}>
        <tbody height="100vh"> 
          <tr>
            <td>
              <tr>
                <img src={Home} />
              </tr>
              <tr>
                <img src={Links} />
              </tr>
              <tr>
                <img src={Guests} />
              </tr>
              <tr>
                <img src={Email} />
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
