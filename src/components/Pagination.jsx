function Pagination({
  totalCharacters,
  charactersPerPage,
  paginate,

  prevPage,
  nextPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      <button onClick={prevPage} className="button-prev-page">
        {"<"}
      </button>
      {pageNumbers.map((number) => (
        <li
          className="page-number"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}

      <button onClick={nextPage} className="button-next-page">
        {">"}
      </button>
    </ul>
  );
}

export default Pagination;
