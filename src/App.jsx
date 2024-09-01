import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import './components/header.css'
import Money from './components/Money'
import './components/money.css'
import Products from './components/Products'
import './components/products.css'
import './components/invoice.css'

function App() {


  return (
    <>
      <Header/>
      <Money/>
      <Products/>
    </>
  )
}

export default App
