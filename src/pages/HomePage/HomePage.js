import React from 'react';
import CAR_BACKGROUND from '../../assets/images/car_background.jpg';

function HomePage(){
  return (
    <div className="home-page">
      <img src={CAR_BACKGROUND} alt="Car background image" />
      <div className="overlay">
        <h1>Welcome to Our Website</h1>
        <p>Explore the world of amazing experiences.</p>
      </div>
    </div>
  );
}

export default HomePage;