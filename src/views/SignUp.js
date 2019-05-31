/** @format */

import React, {useState} from 'react'
import styled from 'styled-components'

export default function SignUp(props) {
  const [input, setInput] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.createUser(input)
  }

  const handleChange = event => {
    setInput(event.target.value)
  }

  return (
    <div className="signup">
      <StyledFormWrapper>
        <StyledH2>I just need your name</StyledH2>
        <form onSubmit={handleSubmit}>
          <StyledFormInput autoFocus onChange={handleChange} value={input} type="text" />
          <StyledFormButton>Go!</StyledFormButton>
        </form>
      </StyledFormWrapper>
    </div>
  )
}

const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 450px;
  margin: auto;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
  background-color: var(--secondary-color);
`

const StyledH2 = styled.h2`
  font-size: 18;
`

const StyledFormInput = styled.input`
  width: calc(100% - 60px);
  padding: 15px 20px 15px 20px;
  border-radius: 20px;
  border-style: none;
  background: var(--send-message-form);
  font-weight: 300;
  &:focus {
    outline-width: 0;
  }
  &:placeholder {
    color: var(--main-text-color);
  }
`
const StyledFormButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  outline: none;
  border: none;
  margin-top: 280px;
  &:focus {
    border: none;
  }
  &:hover {
    background-color: var(--text-hover);
  }
`
