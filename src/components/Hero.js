import React from 'react';
import "./Hero.css"


const Hero = ({imageSrc})=> {
  return (
    <div className="hero">
        <img src={imageSrc} alt="Food" className="hero__image"/>
        <h1 className="hero__title">Explore the world's most delicious cuisines</h1>


    </div>
  );
}

export default Hero;
