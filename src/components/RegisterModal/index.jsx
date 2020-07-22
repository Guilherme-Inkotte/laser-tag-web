import React from 'react'

import { Input, Modal, Button, Heading } from '../utils'

export default function RegisterModal(props) {
  return (
    <Modal toggleHandler={props.toggleHandler}>
      <Heading>Cadastro</Heading>
      <Input placeholder="Email" />
      <Input placeholder="Nome" />
      <Input placeholder="Senha" />
      <Input placeholder="Confirmar senha" />
      <Button rounded primary width="60%" style={{ marginBottom: "2rem" }}>Criar Conta</Button>
    </Modal>
  )
}
