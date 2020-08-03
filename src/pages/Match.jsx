import React from 'react';
import { Header, ConfigMatch, Footer } from '../components';
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
    <Footer fixed />
  </>;
}

export default Match;