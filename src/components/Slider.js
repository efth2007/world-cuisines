import React, { useState, useEffect } from 'react';
import "./Slider.css"

import { useInView } from 'react-intersection-observer';


const Slider = ({imageSrc, title, subtitle, description, flipped})=> {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const isNarrowScreen = screenWidth <= 800;


    const { ref, inView } = useInView({
        threshold: 0.4,
      });

const renderContent = () => {
    if (!flipped && !isNarrowScreen){
        return<>

        <div className="slider__content">
            <h1 className='slider__title>'>{title}</h1>
            <p className='slider__subtitle'>{subtitle}</p>
            <p>{description}</p>
        </div>
        <img src={imageSrc} alt="Food" className="slider__image"/>
        </>
    } else {
        return<>
        <img src={imageSrc} alt="Food" className="slider__image"/>
        <div className="slider__content">
            <h1 className='slider__title>'>{title}</h1>
            <p className='slider__subtitle'>{subtitle}</p>
            <p>{description}</p>
        </div>
        </>
    }
}

  return (
    <div className={inView ? "slider slider--zoom" : "slider"}
    ref={ref}>{renderContent()}
       </div>
  );
}

export default Slider;
