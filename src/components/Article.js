import React from 'react'
import styles from '../styles/Article.module.css'

export const Article = (props) => {
  const article = props.article

  return (
    <div className={styles.article}>
      <img src={article.eyecatch.url} className={styles.articleImage} />
        <p className={styles.articleTitle}>
          {article.title}
        </p>
    </div>
  )
}
