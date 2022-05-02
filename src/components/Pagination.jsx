import arrowLeft from "../assets/img/arrow-left.svg";
import arrowRight from "../assets/img/arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";

import { setCurrentPage } from "redux/actions/currentPage";

function Pagination() {
  const dispatch = useDispatch();

  const { pages, currentPage } = useSelector(({ pages, currentPage }) => {
    return {
      pages: pages.pages,
      currentPage: currentPage.currentPage,
    };
  });

  const pageNumbers = Array.from({
    length: pages,
  }).map((_, i) => i + 1);

  const prevPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
      // setActiveButtonPrev((prev) => !prev);
    }
  };
  const nextPage = () => {
    if (currentPage < pages) {
      dispatch(setCurrentPage(currentPage + 1));
      // setActiveButtonNext((prev) => !prev);
    }
  };

  // const [activeButtonPrev, setActiveButtonPrev] = useState(true);
  // const [activeButtonNext, setActiveButtonNext] = useState(true);

  // const setClassNameDisable = (currentClassName) =>
  //   `${currentClassName} active-button`;

  return (
    <ul className="pagination">
      <button
        onClick={prevPage}
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
            onClick={() => dispatch(setCurrentPage(number))}
          >
            {number}
          </li>
        ))}

      <button onClick={nextPage} className="button-next-page">
        <img src={arrowRight} alt="arrow-right" />
      </button>
    </ul>
  );
}

export default Pagination;
