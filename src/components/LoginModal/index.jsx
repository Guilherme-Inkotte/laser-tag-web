import React from 'react'

import { Input, Modal, Button, Heading } from '../utils'

import ProfileIcon from '../../assets/profile.svg'

const svgStyle = {
  width: "50%"
}

export default function LoginModal(props) {
  return (
    <Modal toggleHandler={props.toggleHandler}>
      <Heading>login</Heading>
      <img src={ProfileIcon} alt="icon" style={svgStyle} />
      <Input hasIcon placeholder="Email" />
      <Input hasIcon placeholder="Senha" />
      <Button rounded primary width="60%" style={{ marginBottom: "2rem" }}>Entrar</Button>
    </Modal>
  )
}
