import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Links = () => (
    <Layout>
        <SEO title="Links" />
        <h1>Cool things online!</h1>
        <ul>
            <li>
                <a href="https://spacehey.com/profile?id=8144">My Myspace account</a>
            </li>
            <li>
                <a href="http://www.scenicnewengland.net/guitar/">Learn to play the acoustic guitar</a>
            </li>
            <li>
                <a href="http://www.arngren.net/">Buy all the cool things</a>
            </li>
            <li>
                <a href="http://www.aliweb.com/">Find all you need</a>
            </li>
        </ul>
    </Layout>
)

export default Links