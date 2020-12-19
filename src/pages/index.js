import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hello from "../images/hello.gif"
import Tenor from "../images/tenor.gif"
import Welcome from "../images/welcome.gif"
import UnderConstruction from "../images/under-construction-1.gif"


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
      </center>
    </>

)

export default IndexPage
