import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Welcome.module.css'

const Welcome = () => {
  return (
    <div className={styles.welcome}>
      <p className={styles.intro}>Welcome to my Tic Tac Toe Game!</p>
      <Link className='p-2 bg-blue-500 rounded-lg text-white transition-all hover:scale-110' to="/play">Play</Link>
    </div>
  )
}

export default Welcome