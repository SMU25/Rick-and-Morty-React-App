import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import Header from "components/Header/Header";
import Menu from "components/Menu/Menu";
import ModalWindow from "components/ModalWindow";
import { setCharacters } from "redux/actions/characters";
import { setPages } from "redux/actions/pages";

import Home from "pages/Home";
import Characters from "pages/Characters";

function App() {
  const dispatch = useDispatch();

  const { currentPage } = useSelector(({ pages, currentPage }) => currentPage);

  const API = axios.create({
    method: "GET",
    baseURL: "https://rickandmortyapi.com/api/",
  });

  const [isLoading, setLoading] = useState(true);
  const [openedModal, setOpenedModal] = useState(false);
  const [textModal, setTextModal] = useState("");

  useEffect(() => {
    async function getCharacters() {
      try {
        const { data } = await API("character/?page=" + currentPage);
        dispatch(setCharacters(data.results));
        dispatch(setPages(data.info.pages));
      } catch (error) {
        setTextModal("Ошибка получения персонажей");
        setOpenedModal(true);
      }
      setLoading(false);
    }
    getCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
            <Route path="/" element={<Home />} exact />
            <Route
              path="/characters"
              element={<Characters isLoading={isLoading} />}
              exact
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
