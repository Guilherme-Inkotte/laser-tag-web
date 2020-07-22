import React from 'react'
import { Portal } from '../'

import { useSpring, animated } from 'react-spring'

import styles from './styles.module.css'

export default function Modal(props) {

  const backgroundAnimation = useSpring({ opacity: 1, from: { opacity: 0 } })

  const modalAnimation = useSpring({ marginTop: "0", from: { marginTop: "-50px" } })

  return (
    <Portal>
      <div className={styles.modalContainer}>
        <animated.div style={backgroundAnimation} className={styles.background} onClick={props.toggleHandler}></animated.div>
        <div className={styles.flexModal}>
          <animated.div style={modalAnimation} className={styles.modal}>
            {props.children}
          </animated.div>
        </div>
      </div>
    </Portal>
  )
}
