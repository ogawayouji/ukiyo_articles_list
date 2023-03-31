export const getArticle = () => {
  const endpoint = "https://ukiyo-test-blog.microcms.io" + "/api/v1/articles"
  // const endpoint = process.env.MICROCMS_URL + "/api/v1/articles"
  const options = {
    headers: {
      "X-MICROCMS-API-KEY": "1CdoKFONr4t66inzJ9GNc8kFcCmpjeRfJmdo"
      // "X-MICROCMS-API-KEY": process.env.X_MICROCMS_API_KEY
    },
    method: 'GET'
  }

  return new Promise((resolve, reject) => {
    console.log(process.env)
    console.log(endpoint)
    fetch(endpoint, options)
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((err) => {
        console.log(err)
      })
  })
}