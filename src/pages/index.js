import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hello from "../images/hello.gif"
import Tenor from "../images/tenor.gif"
import Welcome from "../images/welcome.gif"
import UnderConstruction from "../images/under-construction-1.gif"
import IE from "../images/ie.png"
import Netscape from "../images/netscape.png"
import "../components/layout.css"


const IndexPage = () => (
      <>
          <SEO title="Welcome" />
          <br /> <br />
          <center>
          <img src={Hello} alt="hello" />
  
          <p>Welcome to my homepage! <br /> I hope you enjoy the stay.</p>
          </center>
          <center>
          <p>
            <img src={Welcome}  alt="welcome"/> <br />
  
            <button className="button"><Link className="link-button" to="/homepage">Enter</Link></button>
  
          </p>
  
          <img src={Tenor} height="100px" alt="" /> <br />
          <img src={UnderConstruction} alt="under construction" />
  
          <p>Copyright 2020-present Fabio Rosado.</p>
  
          <p className="small-text">This page will not work on:</p>
          <img className="small-image" src={IE} alt="ie" /> <img className="small-image" src={Netscape} alt="Netscape" />
        </center>
      </>
  
  )

export default IndexPage
