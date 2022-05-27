import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Cardtag = styled.div`
  margin-left: 50px;
  margin-top: 20px;
  width: 300px;
  box-sizing: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 15px;

  button {
    margin: 1rem;
    border-radius: 1.5rem;
    width: 10rem;
    height: 3rem;
    border: none;
    box-shadow: 0.01rem white;
    color: white;
  }

  .title {
    text-align: center;
  }
`;

function Card(props) {
  return (
    <Cardtag>
      <h2 className="title">{props.title}</h2>
      <form action="https://en.wikipedia.org/?curid=${props.link}" target="_blank">
        <Button content={"Go to Page"} />
      </form>
    </Cardtag>
  );
}

export default Card;
