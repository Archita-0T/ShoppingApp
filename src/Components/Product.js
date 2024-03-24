import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { add, remove } from '../redux/Slices/CartSlice';
import './Product.css';

const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch=useDispatch();
  const addToCart=()=>{
    dispatch(add(post));
    toast.success("Item added to cart!");
  }
  const removeFromCart=()=>{
    dispatch(remove(post.id));
    toast.error("Item removed from cart!");
  }
  return (
    <div className='fox'>
      <div className='title'>
        <p className='p'>{post.title}</p>
      </div>
      <div>
        <p className='des'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='img'>
        <img className='img1' src={post.image}/>
      </div>
      <div className='bot'>
      <div className='pot'>
        <p className='price'>${post.price}</p>
      </div>
      {
        cart.some((p)=>p.id==post.id)?
        (<button className='pot' onClick={removeFromCart}>Remove Item</button>):
        (<button className='pot' onClick={addToCart}>Add To Cart</button>)


      }

      </div>
    

      
    </div>
  )
}

export default Product
