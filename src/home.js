import React from 'react';
import './components/home.css';

const Navbar = () => {
  return (
    <>
      <nav className="main" style={{marginLeft: '3.3rem', marginRight: '3.3rem' }}>
        <div className="navbar-left">
          <a href="/" className="logo">
            CircleNet
          </a>
        </div>

        <div className="navbar-right" >
          <a href="/about" className="nav-links">About Us</a>
          <a href="/contact" className="nav-links">Contact</a>
          <a href="/login" className="nav-links">Login</a>
          <a href="/register" className="nav-links">Register</a>
        </div>
      </nav>

      <div class="container" style={{marginLeft: '2.6rem'}}>
  <img src="/home.jpg" alt="home page" className="home-image" />
  <div className="home-description">  
   <h className="home-title">Welcome to CircleNet !!!</h>
    <p >
    CircleNet is your ultimate platform for seamless connections, collaboration, and community building. Explore our vibrant network to discover new opportunities, share ideas, and engage with like-minded individuals. Join us today and be part of the circle that empowers innovation and growth!
  </p>
  </div>
</div>

    </>
  );
};

export default Navbar;
