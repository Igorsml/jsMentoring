import React from 'react';

  interface ButtonProps {
    children: string;
  }
  
  export const Button = ({children}: ButtonProps) => <button>{children}</button>

