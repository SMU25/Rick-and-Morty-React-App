import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";

function Pagination({
  totalCharacters,
  charactersPerPage,
  paginate,

  prevPage,
  nextPage,
}) {
  const pageNumbers = Array.from({
    length: Math.ceil(totalCharacters / charactersPerPage),
  }).map((_, i) => i);

  return (
    <ul className="pagination">
      <button onClick={() => prevPage()} className="button-prev-page">
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      {pageNumbers.map((number) => (
        <li
          className="pagination__page-number"
          key={number}
          onClick={() => paginate(number)}
        >
          {number}
        </li>
      ))}

      <button onClick={() => nextPage()} className="button-next-page">
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </ul>
  );
}

export default Pagination;
