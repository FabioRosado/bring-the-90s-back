import React, {useState, useEffect} from "react"
import { useForm } from "react-hook-form"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InviPixel from "../images/1x1.png"


const GuestBook = (props) => {
    const [isDisabled, setDisabled] = useState(false)
    // const [messages, setMessages] = useState(props.data.allAirtable.nodes)
    const { register, handleSubmit, errors} = useForm()
    const currentDate = new Date().toISOString().slice(0, 10)
    let [messages, setMessages] = useState([])

    const onSubmit = form => {
        const fields = {"fields": {
        "Title": form.Title,
        "Name": form.Name,
        "Email": form.Email,
        "Message": form.Message
        }}
        console.log(form.title)
      messages.push({data: {Email: form.Email, Name: form.Name, Title: form.Title, Message: form.Message, date: currentDate}})
    
    if (!isDisabled) {
      fetch("/.netlify/functions/guestbook", {
        method: "POST",
        body: JSON.stringify(fields)
      })
      .then(result => {
         
        console.log("sent", result)
      })
      messages.push({data: {Email: form.Email, Name: form.Name, Title: form.Title, Message: form.Message, date: currentDate}})
      
      setDisabled(true)
    }
  }

  const getAllMessages = (records) => {
      const messages = []
      records.map(message => messages.push({data: message.fields}))

      return messages
  }

  
  useEffect(() => {
      async function getMessages () {
        let response = await fetch("/.netlify/functions/getMessages", {
            method: "GET",
        })
        const data = await response.json()

        const messages = getAllMessages(data.records)

        console.log(messages)
        setMessages(messages)
        }

        getMessages()
    })


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
                            <tr className="guestbook-row" key={Math.random() * 100}>
                                <thead style={{backgroundColor: "blue"}}>
                                    <td>
                                    <bold>Title: </bold>
                                    </td>
                                    <td style={{backgroundColor: "blue"}}>{data.Title}</td>
                                </thead>
                                <tr className="message-area">
                                <td>
                                    <tr><bold>Date:</bold></tr>
                                    <tr>{data.date}</tr>
                                    <tr><bold>Name:</bold></tr>
                                    <tr>{data.Name}</tr>
                                </td>
                                <td className="guestbook-message">
                                    <bold>Message:</bold> <br />
                                    {data.Message}
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
                <input name="Title" ref={register({ required: true })} />
            </label>
            <br />
            <label>
                Name: <br />
                <input name="Name" ref={register({required: true})} />
            </label>
            <br />

            <label>
                Email:<br />
                <input name="Email" ref={register({required: true})} />
            </label>
            <br />

            <label>
                Message: <br />
                <textarea name="Message" ref={register({required: true})} />
            </label>
            <br />
            {errors.exampleRequired && <span>This field is required</span>}
            {errors.email && <p className="red">Email field is required.</p>}
            {errors.message && <p className="red">Message field is required.</p>}
            {errors.name && <p className="red">Name field is required.</p>}
            {errors.title && <p className="red">Title field is required.</p>}
            
            <button type="submit" disabled={isDisabled}>Send Message</button>
            </form>
        </Layout>
    )
}


export default GuestBook