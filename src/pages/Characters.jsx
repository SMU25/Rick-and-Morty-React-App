import React from "react";
import { useSelector } from "react-redux";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Characters({ isLoading }) {
  const { characters } = useSelector(({ characters }) => {
    return { characters: characters.items };
  });

  const renderCharacters = () => {
    return (isLoading ? [...Array(20)] : characters).map((item, index) => (
      <Card key={index} id={index} loading={isLoading} {...item} />
    ));
  };

  return (
    <div className="characters">
      <div className="characters__items">{renderCharacters()}</div>
      <div className="characters__pagination">
        <Pagination />
      </div>
    </div>
  );
}

export default Characters;
