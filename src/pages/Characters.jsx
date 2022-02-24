// import React, { useState } from "react";

import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Characters({
  characters,
  loading,
  prevPage,
  nextPage,
  // activeButtonPrev,
  // activeButtonNext,
  totalPages,
  setCurrentPage,
}) {
  const renderCharacters = () => {
    return (loading ? [...Array(20)] : characters).map((item, index) => (
      <Card key={index} id={index} loading={loading} {...item} />
    ));
  };

  return (
    <div className="characters">
      <div className="characters__items">{renderCharacters()}</div>
      <div className="characters__pagination">
        <Pagination
          prevPage={prevPage}
          nextPage={nextPage}
          // activeButtonPrev={activeButtonPrev}
          // activeButtonNext={activeButtonNext}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Characters;
