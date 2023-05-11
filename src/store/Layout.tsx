import * as React from 'react';
import Header from './components/Header';

interface ILayoutProps {
  children: React.ReactNode
}

export const Layout: React.FunctionComponent<ILayoutProps> = ({
  children
}) => {
  return(
    <div style={{width: '100%', padding: '0 7px 7px'}}>
      <Header/>
      {children}
    </div>
  ) ;
};