import "./App.css";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const Wikipage = styled.div`
  .contentor {
    margin-left: 50px;
    margin-top: 20px;
    width: 300px;
    box-sizing: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 5px 5px #888888;
    border-radius: 15px;
  }

  .main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .contentor button {
    margin: 10px;
    border-radius: 15px;
    width: 100px;
    height: 30px;
    border: none;
    box-shadow: 1px 1px 1px 1px white;
    color: white;
  }

  .contentor h2 {
    margin: 5px;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .form input {
    margin: 20px;
  }

  .botao {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;
  }
`;

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

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
          alert("Please input your search!");
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchApi();
  };

  return (
    <div className="App">
      <Wikipage>
        <div className="botao">
          <button className="btn btn-accent text-white botao" type="submit">
            <a
              href="https://en.wikipedia.org/wiki/Special:Random"
              target="_blank"
              rel="noopener noreferrer">
              Get a Random Article from Wikipedia!
            </a>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Type here"
            className="input w-full max-w-xs"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-accent text-white" type="submit">
            Search For your Article!
          </button>
        </form>

        <div className="main">
          {data.length > 0 &&
            data.map((el) => {
              return (
                <div className="contentor">
                  <h2 className="card-title">{el.title}</h2>
                  <button className="btn-accent">
                    <a
                      href={`https://en.wikipedia.org/?curid=${el.pageid}`}
                      target="_blank"
                      rel="noreferrer">
                      Go to Page
                    </a>
                  </button>
                </div>
                /*  <div className="card w-96 bg-base-100 shadow-xl cartao">
                  <div class="card-body">
                    <h2 class="card-title">{el.title}</h2>
                    <div class="card-actions justify-end">
                      <button class="btn btn-accent text-white">
                        <a
                          href={`https://en.wikipedia.org/?curid=${el.pageid}`}
                          target="_blank"
                          rel="noreferrer">
                          View Full Page
                        </a>
                      </button>
                    </div>
                  </div>
                </div> */
              );
            })}
        </div>
      </Wikipage>
    </div>
  );
}

export default App;
