import React, {ReactChild, ReactNode } from 'react';
import scss from './Children.scss';

interface CenteredBoxProps {
  children: ReactChild;
}

export const CenteredBox = ({children}: CenteredBoxProps) => {

  return (
    <div className={scss.centeredBox}>
      {children}
    </div>
  );
};




