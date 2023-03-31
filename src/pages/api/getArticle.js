export const getArticle = () => {
  const endpoint = process.env.NEXT_PUBLIC_MICROCMS_URL + "/api/v1/articles"
  const options = {
    headers: {
      "X-MICROCMS-API-KEY": process.env.NEXT_PUBLIC_X_MICROCMS_API_KEY
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