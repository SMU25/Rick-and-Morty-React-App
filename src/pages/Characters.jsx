import React, { useState } from "react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Characters({
  characters,
  loading,
  prevPage,
  nextPage,
  totalCharacters,
  charactersPerPage,
  setCharactersPerPage,
  paginate,
  setCurrentPage,
}) {
  const renderCharacters = () => {
    return (loading ? [...Array(20)] : characters).map((item, index) => (
      <Card key={index} id={index} loading={loading} {...item} />
    ));
  };
  const [active, setActive] = useState(false);

  return (
    <div className="characters">
      <div className="characters__items">{renderCharacters()}</div>
      <div className="characters__pagination">
        <Pagination
          totalCharacters={totalCharacters}
          charactersPerPage={charactersPerPage}
          prevPage={prevPage}
          nextPage={nextPage}
          paginate={paginate}
        />
        <ul className="characters__select">
          <div
            className="characters__select-header"
            onClick={() => {
              setActive(!active);
            }}
          >
            <div
              className="characters__select-current"
              value={charactersPerPage}
            >
              {charactersPerPage}
            </div>
          </div>
          <div
            className={`characters__select-body ${
              active ? "characters__select-body--active" : ""
            }`}
          >
            <li
              className="characters__select-number"
              onClick={() => setCharactersPerPage(10)}
              value={10}
            >
              10
            </li>
            <li
              className="characters__select-number"
              onClick={() => setCharactersPerPage(10)}
              value={20}
            >
              20
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Characters;
