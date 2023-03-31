import React, { useEffect, useState } from 'react'
import styles from '../styles/Articles.module.css'
import { getArticle } from '../pages/api/getArticle'
import { Article } from './Article'

export const Articles = () => {
  const [loading , setLoading] = useState(true)
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchData() {
      let res = await getArticle()
      console.log(res.contents)
      setArticles(res.contents)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div className={styles.articles}>
      <p className={styles.title}>All articles</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.allArticles}>
          {articles.map((article, index) => (
            <Article article={article} key={index} />
        ))}</div>
      )}
    </div>
  )
}
