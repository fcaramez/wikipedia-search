import React from "react";
import Button from "./Button";

function Randomarticle() {
  return (
    <form action="https://en.wikipedia.org/wiki/Special:Random" target="_blank">
      <Button content={"Get a Random Article from Wikipedia!"} />
    </form>
  );
}

export default Randomarticle;
