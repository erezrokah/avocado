const axios = require(`axios`)

module.exports = {
  async onPreBuild() {
    const response = await axios.get(
      'https://instagram.com/graphql/query/?query_id=17888483320059182&variables={"id":"289365524","first":100,"after":null}',
      { headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36" } }
    )

    console.log(JSON.stringify(response.data, null, 2))
  },
}
