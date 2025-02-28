import React, { FC } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar}>
    <a><strong>Home</strong></a>
  </div>
);

export default Navbar;
