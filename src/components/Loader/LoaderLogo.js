import React, { useEffect, useState } from "react";
import "./LoaderLogo.css";
import { Fade } from "react-reveal";
import logo from '../../assests/images/intro.gif';

const LoaderLogo = ({ onAnimationEnd }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 3000); // Animation duration
    setTimeout(() => onAnimationEnd(), 3000); // Remove loader after animation
  }, [onAnimationEnd]);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      <Fade bottom duration={2000} distance="40px">
        <img
          src={logo}
          alt="loading..."
        />
      </Fade>
    </div>
  );
};

export default LoaderLogo;
