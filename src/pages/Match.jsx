import React from 'react';

import { Team, Header, Footer, Killfeed } from '../components'

import styles from './Match.module.css'

function Match() {
  return (
    <>
      <Header />
      <div className={styles.matchContainer}>
        <Team color="#FC5185" colorName="Rosa" />
        <Killfeed />
        <Team color="#519BFC" colorName="Azul" />
      </div>
      <Footer fixed />
    </>
  )
}

export default Match;