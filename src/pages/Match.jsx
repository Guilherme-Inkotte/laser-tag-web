import React from 'react';
import { Header, ConfigMatch, Footer, Killfeed, Team } from '../components';
import styles from './Match.module.css'
import { Toggle } from '../components/utils'
function Match() {
  return <>
    <Header />
    <Toggle initial render={({ on, toggle }) => (
      <>
        {on && <ConfigMatch toggleHandler={toggle} />}
      </>
    )}

    />
    <div className={styles.matchContainer}>
      <Team color="#FC5185" colorName="Rosa" />
      <Killfeed />
      <Team color="#519BFC" colorName="Azul" />
    </div>
    <Footer fixed />
  </>;

}

export default Match;