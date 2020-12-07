import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GuestBookForm from "../components/guestbook"


const GuestBook = () => {

    return (
        <Layout>
            <SEO title="Guestbook" />
            <h1>Sign the guestbook</h1>
            <GuestBookForm />
        </Layout>
    )
}


export default GuestBook