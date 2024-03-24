import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';
import Spinner from '../Components/Spinner';
import './Home.css';


const Home = () => {
    const API_URL="https://fakestoreapi.com/products";
    const [loading, setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    async function fetchData(){
      setLoading(true);
      try{
        const res= await fetch(API_URL);
        const data=await res.json();
        setPosts(data);

      }
      catch(error){
        console.log("error in fetching data");
        setPosts([]);
        

      }
      setLoading(false);
    }
    useEffect(()=>{
      fetchData();

    },[])

  return (
    <div>
      {
  loading ? (<Spinner/>):
  (posts.length===0?
  (<div className='home1'>
    <p>No Data Found !</p></div>):
  (<div className='home2'>
    {
      posts.map((post)=>(<Product key={post.id} post={post}/>))
    }</div>)
  )
      }
    

    </div>






 
    
    
     
    
  )
}

export default Home
