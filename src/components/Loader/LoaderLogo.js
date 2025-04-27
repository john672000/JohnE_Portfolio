import React from "react";
import "./LoaderLogo.css";
import { ReactComponent as NameSVG } from '../../assests/images/Name.svg';

const LoaderLogo = () => {
  return (


    <div className="load-wrapper">
      <div className="zoom-target">
        <NameSVG />
      </div>
    </div>

  );
};

export default LoaderLogo;
