import React from 'react'
import './Callout.css'

function Callout ({ children }) {
  return (
    <div className='callout'>
      {children}
    </div>
  )
}

export default Callout
