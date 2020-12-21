exports.handler = async (event) => {
    let getHits = await fetch(`https://api.airtable.com/v0/${process.env.GATSBY_AIRTABLE_ID}/hits?view=Grid%20view`,
        {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_KEY}`,
                "Content-Type": "application/json"
            },
        }
    )

    const hitCounter = await getHits.json()

    console.log(hitCounter())

    let updateHit = await fetch(`https://api.airtable.com/v0/${process.env.GATSBY_AIRTABLE_ID}/hits`, {
        method: 'PATCH',
        headers: {
            "Authorization": `Bearer ${process.env.GATSBY_AIRTABLE_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "records": [
                {
                    "id": "rec1B85GhFMR015CW",
                    "fields": {
                        "hits": hitCounter.records[0].fields.hits + 1
                    }
                }
            ]
        })
    })

    const updatedHit = await updateHit.json()
  
    console.log(updatedHit)
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      hits: updatedHit.records[0].fields.hits,
    }),
  };
};