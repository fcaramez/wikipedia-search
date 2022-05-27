import React from 'react'
import styled from "styled-components"

const ButtonTag = styled.button`
  background-color: ${({theme}) => theme.colors.green};
  border-radius: 1rem;
  border-style: none;
  color: #ffffff;
  cursor: pointer;
  height: 40px;
  margin: 1rem;
`;

function Button(props) {
  return (
    <ButtonTag>{props.content}</ButtonTag>
  )
}

export default Button