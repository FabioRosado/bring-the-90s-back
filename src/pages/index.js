import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hello from "../images/hello.gif"
import Tenor from "../images/tenor.gif"
import Welcome from "../images/welcome.gif"
import UnderConstruction from "../images/under-construction-1.gif"


const IndexPage = () => (
    <>
        <SEO title="HomePage" />
        <br /> <br />
        <center>
        <img src={Hello} />

        <p>Welcome to my homepage! <br /> I hope you enjoy the stay.</p>
        </center>
        <center>
        <p>
          <img src={Welcome} /> <br />

          <button className="button"><Link className="link-button" to="/homepage">Enter</Link></button>

        </p>

        <img src={Tenor} height="100px" /> <br />
        <img src={UnderConstruction} />
      </center>
    </>

)

export default IndexPage
