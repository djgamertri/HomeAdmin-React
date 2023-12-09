import React from 'react'
import './Block.css'

function Block ({ children }) {
  return (
    <div className='Block'>
      {children}
    </div>
  )
}

export default Block
