import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";

function Pagination({
  prevPage,
  nextPage,
  // activeButtonPrev,
  // activeButtonNext,
  totalPages,
  setCurrentPage,
}) {
  const pageNumbers = Array.from({
    length: totalPages,
  }).map((_, i) => i + 1);

  // const setClassNameDisable = (currentClassName) =>
  //   `${currentClassName} active-button`;

  return (
    <ul className="pagination">
      <button
        onClick={() => prevPage()}
        className="button-prev-page"
        // className={
        //   activeButtonPrev ? setClassNameDisable("button-prev-page") : ""
        // }
      >
        <img src={arrowLeft} alt="arrow-left" />
      </button>
      {pageNumbers
        //.filter((number) => number) pagination ...
        .map((number) => (
          <li
            className="pagination__page-number"
            key={number}
            onClick={() => setCurrentPage(number)}
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
