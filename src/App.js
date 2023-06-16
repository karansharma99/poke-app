import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import MainContainer from "./Containers/MainContainer";
import "./App.css";

function App() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((res1) => setItem(res1.results));
  }, []);

  return (
    <>
      <Header></Header>
      <MainContainer item={item}></MainContainer>
    </>
  );
}

export default App;
