const fetch = require('node-fetch')

exports.handler = async (event, context, callback) => {
  const pass = (body) => {callback(null, {statusCode: 200, body: JSON.stringify(body)})}
    let response = await fetch(`${process.env.GATSBY_AIRTABLE_URL}?view=Grid%20view`,
    {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_KEY}`,
        "Content-Type": "application/json"
      },
    })
    const data = await response.json()
    await pass(data.records)
}