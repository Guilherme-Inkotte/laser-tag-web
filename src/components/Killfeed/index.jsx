import React, { useState, useEffect } from 'react'

import styles from './styles.module.css'

import { GiPistolGun } from 'react-icons/gi'

export default function Killfeed() {

  const [timer, setTimer] = useState(475);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer => timer - 1);

      const isTimerBroken = (timer % 60) === 0
      const minutes = Math.ceil(timer / 60) - 1
      const seconds = timer % 60

      if (isTimerBroken) {
        setMinutes(minutes + 1)
        setSeconds("00")
      } else {
        setMinutes(minutes)
        setSeconds(seconds)
      }


    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={styles.container}>
      <div className={styles.gameInfo}>
        <h1>{10} - {10}</h1>
        <h2>{minutes}:{seconds}</h2>
      </div>
      <ul className={styles.killfeed}>
        <li><span span style={{ color: "#FC5185" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#519BFC" }}>Jogador 1</span></li>
        <li><span span style={{ color: "#519BFC" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#FC5185" }}>Jogador 1</span></li>
        <li><span span style={{ color: "#FC5185" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#519BFC" }}>Jogador 1</span></li>
        <li><span span style={{ color: "#519BFC" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#FC5185" }}>Jogador 1</span></li>
        <li><span span style={{ color: "#FC5185" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#519BFC" }}>Jogador 1</span></li>
        <li><span span style={{ color: "#519BFC" }}>Jogador 1</span> <GiPistolGun /> <span style={{ color: "#FC5185" }}>Jogador 1</span></li>
      </ul>
    </div>
  )
}
