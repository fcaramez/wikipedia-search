import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const FormTag = styled.div`
  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form input {
    margin-top: 0.5rem;
  }
`;

function Searchform(props) {
  
  const { submit, search, updateQuery } = props;
  return (
    <FormTag>
      <form onSubmit={submit} className="form">
        <Input type={"text"} value={search} updateFunction={updateQuery} />
        <Button type={submit} content={"Search For Your Article!"} />
      </form>
    </FormTag>
  );
}

export default Searchform;
