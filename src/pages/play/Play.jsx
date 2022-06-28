import React from 'react'
import Square from '../../components/square/Square'

const Play = () => {
  return (
    <div className='flex justify-center pt-20'>
      <div className='grid grid-cols-3 grid-rows-3 w-max'>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Play