import React from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

import Home from "./pages/Home";
import Chatacters from "./pages/Characters";

function App() {
  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data: chatacters } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        console.log(chatacters.results.map((item) => item.name));
      } catch (error) {
        alert("Ошибка получения персонажей");
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route path="/characters" element={<Chatacters />} exact></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
