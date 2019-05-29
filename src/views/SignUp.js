/** @format */

import React from 'react'
import styled from 'styled-components'

export default function SignUp(props) {
  const handleSubmit = event => {
    event.preventDefault()
    props.setUserId(event.target.value)
  }

  return (
    <div className="signup">
      <StyledFormWrapper>
        <form onSubmit={handleSubmit}>
          <StyledFormInput />
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
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
`

const StyledFormInput = styled.input``

const StyledFormButton = styled.button``
