import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Cartitem from '../Components/Cartitem';
import './Cart.css';

const Cart = () => {
  const {cart}=useSelector((state)=>state);
  const [totalAmount, setTotalAmount]=useState(0);
  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));

  },[cart])
  return (
    <div className='cen1'>{
      cart.length===0 ?
      (
        <div className='cen'>
          <h2>Your Cart is Empty !</h2>
          <Link to="/"> 
          <button >
            Shop Now
          </button>
          </Link>
        
        </div>
      ):
      (<div className='flex3'>
        <div>
        {
          cart.map((item,index)=>{return <Cartitem key={item.id} item={item} itemIndex={index}/>})
        }

        </div>
        <div className='flex'>
          <div className='y1'>YOUR CART</div>
          <div className='y2'>SUMMARY</div>
          <p><span className='sp'>Total Items: {cart.length}</span></p>
        </div>
        <div className='flex2'>
          <p className='sp'> Total Amount: ${totalAmount}</p>
          <button className='button'>Checkout Now</button>
        </div>
       
      </div>

      )
      }

    </div>
  
  )
}

export default Cart
