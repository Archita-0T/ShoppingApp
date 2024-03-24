import React from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import img from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const {cart}=useSelector((state)=>state);
  return (
    <div>
        <div className='outer'>
          <NavLink to="/">
            <div className='outer1'>
            <img src={img} width={150} height={100}/>
            </div>
          </NavLink>
            
            <div className='outer2'>
              <NavLink className='link' to="/">
                
                <p>Home</p>
                
              
              </NavLink>
              <NavLink to="/cart">
                <div className='dabba'> 
                <FaCartShopping className='cart' />
                {
                  cart.length >0 &&
                  <span className='len'>{cart.length}</span>
                }
                
                </div>
              </NavLink>
                
                

            </div>
           
        </div>
      
    </div>
  )
}

export default Navbar
