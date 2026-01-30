import React from 'react';
// import houdiniSvg from '../../assets/tech/houdini.svg';
import houdiniSvg from '../../assets/tech/houdini1.png';

const HoudiniIcon = ({ size = 24, className, ...props }) => {
  return (
    <img 
      src={houdiniSvg} 
      alt="Houdini" 
      style={{ width: size, height: size }}
      className={className}
      {...props}
    />
  );
};

export default HoudiniIcon;