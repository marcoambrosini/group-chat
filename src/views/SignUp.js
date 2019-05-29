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
        <form onSubmit={handleSubmit}>
          <StyledFormInput
            disabled={props.disabled}
            onChange={handleChange}
            value={input}
            placeholder="Type your message and hit ENTER"
            type="text"
          />
          <StyledFormButton> Log In</StyledFormButton>
        </form>
      </StyledFormWrapper>
    </div>
  )
}

const StyledFormWrapper = styled.div`
  width: 300px;
  height: 450px;
  margin: auto;
  padding: 30px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.75);
  background-color: var(--secondary-color);
`

const StyledFormInput = styled.input``

const StyledFormButton = styled.button``
