import React, { FC } from 'react';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home}>
    <h1>Home</h1>
    <p>Welcome to Mack Stock, the only place to get information on your stocks!</p>
  </div>
);

export default Home;
