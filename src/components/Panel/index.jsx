import React from 'react'

import styles from './styles.module.css'

export default function Panel(props) {

  const backgroundStyle = props.transparent ? "none" : "#364F6B";
  return (
    <div className={styles.panelWrapper} style={{ background: backgroundStyle }}>
      <div className={styles.panel}>
        {props.children}
      </div>
    </div>
  )
}
