import React from 'react'

import styles from './styles.module.css'

import { BsFillPersonFill } from 'react-icons/bs'

export default function Team(props) {

  const color = props.color
  const cssColor = { color }
  const colorName = props.colorName

  return (
    <>
      <div className={styles.teamContainer}>
        <h1 style={cssColor} className={styles.teamName}>Time {colorName}</h1>
        <div className={styles.teamGrid} color={color}>
          <div className={styles.player}>
            <BsFillPersonFill color={color} size={150} />
            <p style={cssColor}>Jogador {colorName}</p>
          </div>
        </div>
      </div>
    </>
  )
}
