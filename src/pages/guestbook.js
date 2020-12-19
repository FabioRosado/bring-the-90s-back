import React, {useState} from "react"
import { useForm } from "react-hook-form"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InviPixel from "../images/1x1.png"


const GuestBook = (props) => {
    const [isDisabled, setDisabled] = useState(false)
    const [messages, setMessages] = useState(props.data.allAirtable.nodes)
    const { register, handleSubmit, errors} = useForm()

    const onSubmit = form => {
        const fields = {"fields": {
        "Title": form.title,
        "Name": form.name,
        "Email": form.email,
        "Message": form.message
        }}
    
    if (!isDisabled) {
      fetch("/.netlify/functions/guestbook", {
        method: "POST",
        body: JSON.stringify(fields)
      })
      .then(result => {
         
        console.log("sent", result)
      })
        messages.push({data: {email: form.email, name: form.name, title: form.title, message: form.message}})
      
      setDisabled(true)
    }
  }


    return (
        <Layout>
            <SEO title="Guestbook" />
            <tr>
                <h1>Sign the guestbook</h1>

            </tr>
            <tr className="test">
                {messages.map(message => {
                    const {data} =  message

                    return (
                        <>
                            <tr className="guestbook-row" key={data.email+data.title}>
                                <thead style={{backgroundColor: "blue"}}>
                                    <td>
                                    <bold>Title: </bold>
                                    </td>
                                    <td style={{backgroundColor: "blue"}}>{data.title}</td>
                                </thead>
                                <tr className="message-area">
                                <td>
                                    <tr><bold>Date:</bold></tr>
                                    <tr>{data.date}</tr>
                                    <tr><bold>Name:</bold></tr>
                                    <tr>{data.name}</tr>
                                </td>
                                <td className="guestbook-message">
                                    <bold>Message:</bold> <br />
                                    {data.message}
                                </td>
                                </tr>
                            </tr>
                            <tr><img src={InviPixel} alt="" /></tr>
                        </>
                    )
                }
                )}
            </tr>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                Title: <br />
                <input name="title" ref={register({ required: true })} />
            </label>
            <br />
            <label>
                Name: <br />
                <input name="name" ref={register({required: true})} />
            </label>
            <br />

            <label>
                Email:<br />
                <input name="email" ref={register({required: true})} />
            </label>
            <br />

            <label>
                Message: <br />
                <textarea name="message" ref={register({required: true})} />
            </label>
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            
            <button type="submit" disabled={isDisabled}>Send Message</button>
            </form>
        </Layout>
    )
}


export default GuestBook

export const pageQuery = graphql`
{
    allAirtable {
        nodes {
        table
        data {
            Email
            Message
            Name
            Title
        }
        }
    }
}
`