import React from 'react';

import styles from './styles.module.css';

import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logo}>Lasertag</Link>
        </div>
        <div className={styles.rightSide}>
          <Link to="#" className={styles.navItem}>Jogar</Link>
          <Link to="#" className={styles.navItem}>Leaderboard</Link>
          <Link to="#" className={styles.navItem}>Login</Link>
          <Link to="#" className={styles.navItem}>Cadastro</Link>
        </div>
      </div>
    </div>
  )
}

export default Header;