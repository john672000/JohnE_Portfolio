import React from "react";
import "./LoaderLogo.css";
import { ReactComponent as NameSVG } from '../../assests/images/Name.svg';

const LoaderLogo = ({ theme }) => {
  return (


    <div className="load-wrapper" style={{ background: theme.splashBg, color: theme.text }}>
      <div className="zoom-target">
        <NameSVG />
      </div>
    </div>

  );
};

export default LoaderLogo;
