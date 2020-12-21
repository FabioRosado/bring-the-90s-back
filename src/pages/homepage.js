import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UnderConstruction from "../images/under-construction-2.gif"
import Hello from "../images/hello.gif"
import Pizza from "../images/pizza.gif"
import Coffee from "../images/coffee.gif"
import RetroHitCounter from 'react-retro-hit-counter'


const SecondPage = (props) => {
  const airtableHits = props.data.allAirtable.nodes[0].data.hits || 0
  const [hits, setHits] = useState(airtableHits)

  useEffect(() => {
    fetch("/.netlify/functions/register-hit")
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        if (typeof json.hits === "number") {
          setHits(json.hits)
        }
      })
  }, [])

  return (
    <Layout>
      <SEO title="Homepage" />
  
      <center>
        <img src={Hello} alt="hello" width="160px" height="120px" />
      </center>
  
      <h1>Welcome to my page!</h1>
  
      <p>My name is Fabio and I am a Portuguese living in the UK! I work as a flight attendant and I'm hoping to becoming a full time developer in the future.</p>
      <img src={Coffee} alt="coffee" width="80px" height="100px" />
      <img src={Pizza} alt="pizza" width="254px" height="160px" />
      <p>I like to drink coffee and eat pizza</p>
  
      <center>
      <img src={UnderConstruction} alt="under construction" />
      <br />
        <RetroHitCounter
          hits={hits}
          /* The following are all default values: */
          withBorder={true}
          withGlow={false}
          minLength={4}
          size={30}
          padding={4}
          digitSpacing={3}
          segmentThickness={4}
          segmentSpacing={0.5}
          segmentActiveColor="#76FF03"
          segmentInactiveColor="#315324"
          backgroundColor="#222222"
          borderThickness={4}
          glowStrength={0.5}
        />
  
      </center>
    </Layout>
  )
}


export default SecondPage

export const pageQuery = graphql`
  query {
    allAirtable {
      nodes {
        data {
          hits
        }
      }
    }
  }
`