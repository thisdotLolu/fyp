import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'


const Home = () => {
  return (
    <div className={styles.container}>
        <h1>EBE DAVID FINAL YEAR PROJECT</h1>
        <p>170405516</p>
        <hr/>
        <Link to='/traversing'>
            <p>Traversing</p>
        </Link>
    </div>
  )
}

export default Home