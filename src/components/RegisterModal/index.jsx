import React from 'react'

import { Input, Modal, Button, Heading } from '../utils'

export default function RegisterModal(props) {
  return (
    <Modal toggleHandler={props.toggleHandler}>
      <Heading>Cadastro</Heading>
      <Input />

    </Modal>
  )
}
