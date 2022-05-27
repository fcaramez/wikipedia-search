import React from "react";
import styled from "styled-components";

const InputTag = styled.input`
  border-radius: 10px;
  height: 20px;
`;

function Input(props) {
  return (
      <InputTag
        type={props.type}
        name=""
        id=""
        value={props.value}
        onChange={(e) => props.updateFunction(e.target.value)}
      />
  );
}

export default Input;
