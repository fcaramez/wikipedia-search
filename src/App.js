import "./App.css";
import axios from "axios";
import { useState } from "react";
import Searchform from "./components/Searchform";
import Randomarticle from "./components/Randomarticle";
import Card from "./components/Card";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RowTag = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
`;

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const error = () =>
    toast.error("Please Input your Search Filter!", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const fetchApi = () => {
    axios
      .get(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${query}`
      )
      .then((response) => {
        setData(response.data.query.search);
        console.log(response.data.query.search);
        setQuery("");
      })
      .catch(() => {
        if (query.length === 0) {
          error();
        } else alert("Error occured");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <div className="App">
      <ToastContainer  />
      <Randomarticle />
      <Searchform submit={handleSubmit} search={query} updateQuery={setQuery} />
      <RowTag>
        {data.length > 0 &&
          data.map((el) => {
            return <Card title={el.title} link={el.pageid} />;
          })}
      </RowTag>
    </div>
  );
}

export default App;
