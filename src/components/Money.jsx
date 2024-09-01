import { useState } from "react"
import React from 'react'



const Money = ({money}) => {
    if(typeof money !=='number'){
      return null
    }
  return (
    <div className='money-container'>
        <div className="m1">
        <h2> ${money.toLocaleString()} </h2>
        </div>
    </div>
  )
}

export default Money