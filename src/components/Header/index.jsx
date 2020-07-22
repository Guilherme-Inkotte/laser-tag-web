import React from 'react';

import styles from './styles.module.css';

import { Toggle } from '../utils'

import { LoginModal, RegisterModal } from '../'

import { Link } from 'react-router-dom'

import logo from '../../assets/logo_2.png'

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.leftSide}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.rightSide}>
          <Link to="#" className={styles.navItem}>Jogar</Link>
          <Link to="/leaderboard" className={styles.navItem}>Leaderboard</Link>
          <Toggle render={({ on, toggle }) => (
            <>
              {on && <LoginModal toggleHandler={toggle} />}
              <Link to="#" className={styles.navItem} onClick={toggle}>Login</Link>
            </>
          )}
          />
          <Toggle render={({ on, toggle }) => (
            <>
              {on && <RegisterModal toggleHandler={toggle} />}
              <Link to="#" className={styles.navItem} onClick={toggle}>Cadastro</Link>
            </>
          )}

          />
        </div>
      </div>
    </div>
  )
}

export default Header;