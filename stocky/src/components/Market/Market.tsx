import React, { FC } from 'react';
import styles from './Market.module.css';

interface MarketProps {}

const Market: FC<MarketProps> = () => (
  <div className={styles.Market}>
    <h1>Market</h1>
  </div>
);

export default Market;
