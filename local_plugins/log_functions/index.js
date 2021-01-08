const axios = require(`axios`)

module.exports = {
  async onPreBuild() {
    const username = "289365524"
    const response = await axios.get(
      `https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"${username}","first":100,"after":null}`
    )

    console.log(response)
    console.log(JSON.stringify(response.data, null, 2))
  },
}
