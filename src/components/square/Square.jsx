// TODO: implement sqare component
import React, {useState} from 'react'

const Square = () => {

const [symbol, setSymbol] = useState('')

  return (
    <>
      <div className='w-20 h-20 border border-black p-51'>
        {symbol}
      </div>
    </>
  )
}

export default Square