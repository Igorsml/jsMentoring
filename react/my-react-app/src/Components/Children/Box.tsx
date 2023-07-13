import React from 'react';
import scss from './Box';

type BoxProps ={
  className?: string;
  children: any;
}

export const Box = ({children, className}: BoxProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};


