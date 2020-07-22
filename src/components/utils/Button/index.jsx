import styled from 'styled-components'

export default styled.button`
  background : ${props => props.primary ? "#364F6B" : "#E0E2E9"};
  border: ${props => props.primary ? "1px solid transparent" : "1px solid #364F6B"};
  border-radius: ${props => props.rounded ? "25px" : "5px"};
  padding: 10px;
  color : ${props => props.primary ? "#FFF" : "#364F6B"};
  margin: 1rem;
  width: ${props => props.width || "auto"};
  text-transform: ${props => props.capitalize ? "capitalize" : "uppercase"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  cursor: pointer;
  :hover {
    transition: 0.2s;
    background : ${props => props.primary ? "#E0E2E9" : "#364F6B"};
    border: ${props => props.primary ? "1px solid #364F6B" : "1px solid transparent"};
    color: ${props => props.primary ? "#364F6B" : "#E0E2E9"};
  }
`