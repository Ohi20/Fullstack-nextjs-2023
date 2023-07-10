import React from 'react';
import styles from './page.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-7xl">Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
