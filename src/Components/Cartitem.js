import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import '../App.css';
import { remove } from '../redux/Slices/CartSlice';
import './Cartitem.css';

const Cartitem = ({item,itemIndex}) => {
  const dispatch=useDispatch();
  const removeItem=()=>{
    dispatch(remove(item.id));
    toast.error("Item removed from cart!");
  }


  return (
    
         <div className='wid'>
      <div className='fl'>
        <div><img src={item.image}/></div>
        <div className='sec'>
          <h1 className='title'>{item.title}</h1>
          <h1 className='des'>{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>
          <div className='bott'>
            <p className='pot'>${item.price}</p>
            <div className='pot' onClick={removeItem}><FcDeleteDatabase className='del'/></div>
            </div>
          </div>

      </div>
      <div className='border'></div>
      
    </div>

    
 
  )
}

export default Cartitem
