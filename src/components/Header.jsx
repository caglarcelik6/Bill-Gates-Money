import React from 'react'
import billGates from '/images/bill.jpg'

const Header = () => {
  return (
    <div className='header'>
        <img src={billGates} alt="" className='img-bill' />
        <h1>Bill Gates Money</h1>

    </div>
  )
}

export default Header