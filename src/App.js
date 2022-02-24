import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ModalWindow from "./components/ModalWindow";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {
  const API = axios.create({
    method: "GET",
    baseURL: "https://rickandmortyapi.com/api/",
  });

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [openedModal, setOpenedModal] = useState(false);
  const [textModal, setTextModal] = useState("");

  // const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  // const [activeButtonNext, setActiveButtonNext] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      try {
        const { data } = await API("character/?page=" + currentPage);

        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        setTextModal("Ошибка получения персонажей");
        setOpenedModal(true);
      }
      setLoading(false);
    }
    getCharacters();
  }, [currentPage]);
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      // setActiveButtonPrev((prev) => !prev);
    }
  };
  const nextPage = () => {
    if (currentPage < info.pages) {
      setCurrentPage((prev) => prev + 1);
      // setActiveButtonNext((prev) => !prev);
    }
  };

  return (
    <div className="container">
      <ModalWindow
        opened={openedModal}
        onClose={setOpenedModal}
        text={textModal}
      />
      <Header />
      <div className="wrapper">
        <Menu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact></Route>
            <Route
              path="/characters"
              element={
                <Characters
                  characters={characters}
                  loading={loading}
                  prevPage={prevPage}
                  nextPage={nextPage}
                  // activeButtonPrev={activeButtonPrev}
                  // activeButtonNext={activeButtonNext}
                  totalPages={info.pages}
                  setCurrentPage={setCurrentPage}
                />
              }
              exact
            ></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
