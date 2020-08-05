import React, { useState } from 'react'

import { Modal, Button, Input, Heading } from '../utils'

import { useHistory } from 'react-router-dom'

import api from '../../api'

export default function PlayerNameModal(props) {

  const history = useHistory()

  const [blueInputValue, setBlueInputValue] = useState()
  const [redInputValue, setRedInputValue] = useState()

  const postSingleName = async ({ name, kills, deaths }) => {
    try {
      const res = await api.post("/players", {
        name,
        kills: kills || 0,
        deaths: deaths || 0
      })
    } catch (error) {
      console.log(error)
    }
  }

  const postMatch = async () => {
    try {
      await postSingleName({
        name: blueInputValue,
        kills: props.blueScore,
        deaths: props.redScore
      })
      await postSingleName({
        name: redInputValue,
        kills: props.redScore,
        deaths: props.blueScore
      })
      history.push('/leaderboard')
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Modal>
      <Heading>{props.winner ? `${props.winner} ganhou!` : "Empate!"}</Heading>
      <Input placeholder="Nome do jogador rosa" changeHandler={e => setRedInputValue(e.target.value)} value={redInputValue} />
      <Input placeholder="Nome do jogador azul" changeHandler={e => setBlueInputValue(e.target.value)} value={blueInputValue} />
      <Button rounded primary width="60%" style={{ marginBottom: "2rem" }} onClick={postMatch}>Enviar</Button>
    </Modal>
  )
}
