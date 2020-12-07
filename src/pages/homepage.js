import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../images/under-construction-2.gif"
import Hello from "../images/hello.gif"
import Pizza from "../images/pizza.gif"
import Coffee from "../images/coffee.gif"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <center>
      <img src={Hello} />
    </center>

    <h1>Welcome to my page!</h1>

    <p>My name is Fabio and I am a Portuguese living in the UK! I work as a flight attendant and I'm hoping to becoming a full time developer in the future.</p>
    <img src={Coffee} />
    <img src={Pizza} />
    <p>I like to drink coffee and eat pizza</p>

    <img src={UnderConstruction} />
  </Layout>
)

export default SecondPage
