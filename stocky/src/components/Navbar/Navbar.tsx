import React, { FC } from 'react';
import styles from './Navbar.module.css';
import {Link, NavLink} from 'react-router-dom'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar}>
    <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/market'>Market</NavLink>
    </nav>
  </div>
);

export default Navbar;
