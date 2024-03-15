import React from 'react'

const Cards = ({dataChar}) => {
  return (
    <div>
        <h2>{dataChar.name}</h2>
        <img className='char-image' src={dataChar.image} alt="char image" />
    </div>
  )
}

export default Cards