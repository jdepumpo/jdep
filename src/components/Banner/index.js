import React from 'react'
import Link from 'gatsby-link'
import styles from './hero.module.css'

const Banner = () => (
<div className={styles.hero}>
<span className={styles.herotext}> {location.pathname} </span>
</div>

)

export default Banner