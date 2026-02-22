import React from 'react'
import CartHeader from './cartHeader'
import CartDetails from './cartDetails'
import Additional from './additional'
import Related from './related'

const Cart = () => {
  return (
    <div >
       <CartHeader/>
       <CartDetails/> 
       <Additional/> 
       <Related/>     
    </div>
  )
}

export default Cart
