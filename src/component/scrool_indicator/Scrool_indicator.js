import React, { Fragment, useEffect, useState } from 'react'
import { Container, ProgressBar } from 'react-bootstrap';
import './scrool.css';


function Scrool_indicator() {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
          const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (window.scrollY / scrollHeight) * 100;
          setScrollPercentage(scrolled);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
     <div>
      <div
        className="scroll-indicator-container"
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <div
          className="scroll-indicator"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
      {/* Your content */}
    </div>
    
    
    </>
  )
}

export default Scrool_indicator