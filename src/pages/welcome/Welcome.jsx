import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/play">Play</Link>
    </div>
  )
}

export default Welcome