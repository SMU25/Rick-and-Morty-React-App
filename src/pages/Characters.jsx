import Card from "../components/Card";
import Pagination from "../components/Pagination";

function Chatacters({
  characters,
  loading,
  prevPage,
  nextPage,
  totalCharacters,
  charactersPerPage,
  paginate,
}) {
  function renderCharacters() {
    return characters.map((item) => (
      <Card key={item.id} id={item.id} {...item} />
    ));
  }
  if (loading) {
    return <h5>loading...</h5>; //переробити на шось більш продвинуте
  }
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
        <ul className="characters__numbers">
          <li>10</li>
          <li>20</li>
          <li>50</li>
        </ul>
      </div>
    </div>
  );
}

export default Chatacters;
