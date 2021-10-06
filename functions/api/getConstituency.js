const { getConstituency, getCoordinates } = require("../lib/lib.js")

exports.handler = async function (event) {
  const {
    queryStringParameters: { address },
  } = event

  return getCoordinates(address).then(data =>
    getConstituency(data).then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        data: data,
      }),
    }))
  )
}
