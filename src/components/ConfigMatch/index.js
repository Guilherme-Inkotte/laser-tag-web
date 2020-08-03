import React, { useState } from 'react';
import styles from './styles.module.css';
import { Modal, Button, Heading, Toggle } from '../utils'

function ConfigMatch(props) {
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [maxScore, setMaxScore] = useState()
  return (
    <Modal>
      <Heading>Criar Nova Partida</Heading>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="minutes">Tempo</label>
          <div>
            <input value={minutes} onChange={val => setMinutes(val)} type="number" id="minutes" placeholder="min" min="1" />
            <p>:</p>
            <input value={seconds} onChange={val => setSeconds(val)} type="number" placeholder="seg" min="1" />
          </div>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="points">Pontuação Máxima</label>
          <div>
            <input value={maxScore} onChange={val => setMaxScore(val)} id="points" placeholder="30" type="number" min="1" />
          </div>
        </div>
      </div>
      <Button rounded primary width="60%" style={{ marginBottom: "2rem" }} onClick={props.toggleHandler}>Entrar</Button>
    </Modal>
  )

}

export default ConfigMatch;