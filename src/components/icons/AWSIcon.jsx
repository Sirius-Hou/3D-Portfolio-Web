import React from 'react';
import houdiniSvg from '../../assets/tech/aws.svg';

const AWSIcon = ({ size = 24, className, ...props }) => {
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

export default AWSIcon;