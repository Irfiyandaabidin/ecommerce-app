import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <img src=" https://res.cloudinary.com/learn-code-10/image/upload/v1653947013/yqajnhqf7usk56zkwqi5.png" className="home-banner" />      
      <div className='featured-products-container container mt-4'>
        <h2>Last products</h2>
      </div>
      <div>
        <Link to="/category/all" style={{textAlign: "right", display: "block", textDecoration:"none"}}>See more {">>"}</Link>
      </div>
    </div>
  )
}

export default Home