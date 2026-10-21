import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Value from '../Value/Value'
import Products from '../Products/Products'


const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <Category />
       <Value />
       <Products />
    </div>
  )
}

export default Home