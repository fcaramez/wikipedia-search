import React from "react";
import Button from "./Button";
import styled from "styled-components";

const Cardtag = styled.div`
  margin: 30px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 15px;

  .title {
    text-align: center;
  }
`;

function Card(props) {
  return (
    <Cardtag>
      <h2 className="title">{props.title}</h2>
      <a
        href={`https://en.wikipedia.org/?curid=${props.link}`}
        target="_blank"
        rel="noreferrer">
        <Button content={"Go to Page"} />
      </a>
    </Cardtag>
  );
}

export default Card;
