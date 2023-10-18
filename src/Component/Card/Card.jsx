import React from 'react'
import './Card.css'

function Card ({ Title, Info, Icon }) {
  return (
    <div className='card'>
      <div>
        <div className='numbers'>{Title}</div>
        <div className='cardName'>{Info}</div>
      </div>
      <div className='iconCard'>
        <i className={Icon} />
      </div>
    </div>
  )
}

export default Card
