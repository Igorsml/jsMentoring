import React, {ReactNode} from 'react';
import scss from './Box';

type BoxProps ={
  className?: string;
  children: ReactNode; // люлбое кол-во элементов, если нет чилндренов то нельзя
}

const Box = ({children, className}: BoxProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};


export const BoxChildren = () => {
  return (
    <Box>
      <p>Test1</p>
      <button>Puck</button> 
     </Box> 
  )
}