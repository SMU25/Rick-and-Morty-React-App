import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import ModalWindow from "./components/ModalWindow";

import Home from "./pages/Home";
import Characters from "./pages/Characters";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(20);
  const [openedModal, setOpenedModal] = useState(false);
  const [textModal, setTextModal] = useState("");
  useEffect(() => {
    async function getCharacters() {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}`
        );

        setCharacters(data.results);
        setInfo(data.info);

        setLoading(false);
      } catch (error) {
        setTextModal("Ошибка получения персонажей");
        setOpenedModal(true);
      }
    }
    getCharacters();
  }, []);

  const lastItemIndex = currentPage * charactersPerPage;
  const firstItemIndex = lastItemIndex - charactersPerPage;
  const currentCharacters = characters.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < info.pages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="container">
      <ModalWindow
        opened={openedModal}
        text={textModal}
        setOpenedModal={setOpenedModal}
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
                  characters={currentCharacters}
                  loading={loading}
                  totalCharacters={info.count}
                  charactersPerPage={charactersPerPage}
                  paginate={paginate}
                  prevPage={prevPage}
                  nextPage={nextPage}
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
