import React, { useState } from 'react';
import styles from './page.module.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;
