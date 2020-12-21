const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
    let response = await fetch(process.env.GATSBY_AIRTABLE_URL,
    {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_KEY}`,
        "Content-Type": "application/json"
      },
      body: event.body
    })
    await pass(`Message Sent!`)
}