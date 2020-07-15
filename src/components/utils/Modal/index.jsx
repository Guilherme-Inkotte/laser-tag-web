import React from 'react'
import { Portal } from '../'


import styles from './styles.module.css'

export default function Modal(props) {
  return (
    <Portal>
      <div className={styles.modalContainer}>
        <div className={styles.background} onClick={props.toggleHandler}></div>
        <div className={styles.flexModal}>
          <div className={styles.modal}>
            {props.children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
