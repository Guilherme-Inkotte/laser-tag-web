import React, { useState, useEffect } from 'react'

import styles from './styles.module.css'

import { GiPistolGun } from 'react-icons/gi'

import { socket } from '../../api'

export default function Killfeed() {


  const [deathInfo, setDeathInfo] = useState([])
  const [timer, setTimer] = useState(600);
  const [seconds, setSeconds] = useState("00");
  const [minutes, setMinutes] = useState(10);
  const [blueScore, setBlueScore] = useState(0)
  const [redScore, setRedScore] = useState(0)

  useEffect(() => {
  socket.on('killfeed', deathInfo => {
    console.log("recebido")
    setDeathInfo(initial => [...initial, deathInfo]);
    switch (deathInfo.killer.player) {
      case 1:
        setBlueScore(score => score + 1);
        break;
      case 2:
        setRedScore(score => score + 1);
        break;
      default: break;
    }
  }
  )
  }, [])

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
    if (timer < 0) clearInterval(interval)
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className={styles.container}>
      <div className={styles.gameInfo}>
        <h1>{redScore} - {blueScore}</h1>
        <h2>{minutes}:{seconds}</h2>
      </div>
      <div className={styles.killfeedInfo}>
        <ul className={styles.killfeed}>
          {
            deathInfo.map((info, key) => (
              <li key={key}><span style={{ color: info.killer.team }}>Jogador {info.killer.player}</span> <GiPistolGun /> <span style={{ color: info.killed.team }}>Jogador {info.killed.player}</span></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
