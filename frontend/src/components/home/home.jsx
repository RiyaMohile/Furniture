import React from 'react'
import Content from './content'
import Browse from './browse'
import Products from './products'
import Inspiration from './inspiration'
import Gallery from './gallery'

const Home = () => {
  return (
    <div>
      <Content/>
      <Browse/>
      <Products/>
      <Inspiration/>
      <Gallery/>
    </div>
  )
}

export default Home
