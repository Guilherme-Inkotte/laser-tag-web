import React from 'react'

import styled from 'styled-components'

import { BsPersonFill } from 'react-icons/bs'

const BaseInput = styled.input.attrs(props => ({
  type: "text",
  name: props.name
}))`
  border:none;
  border-radius: 25px;
  padding: .5rem;
  width:90%;
  background: transparent;
  ::placeholder {
    color: #519BFC
  }
`

const InputContainer = styled.div`
  border:2px solid #519BFC;
  width: 60%;
  border-radius: 25px;
  display:flex;
  align-items:center;
  margin: 1rem auto;
`

const Input = props => {
  return (
    <InputContainer>
      <BaseInput placeholder={props.placeholder} />
      {props.hasIcon && <BsPersonFill color="#519BFC" />}
    </InputContainer>
  )
}

export default Input


