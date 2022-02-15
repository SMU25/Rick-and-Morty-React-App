import Card from "../components/Card";

function Chatacters({ characters }) {
  function renderCharacters() {
    return characters.map((item) => (
      <Card key={item.id} id={item.id} {...item} />
    ));
  }
  return (
    <div className="characters">
      <div className="characters__items">{renderCharacters()}</div>
      <ul className="characters__pagination">
        <button className="button-prev-page">{"<"}</button>
        <li className="page-number">1</li>
        <li className="page-number">2</li>
        <li className="page-number">3</li>
        <li className="page-number">4</li>
        <li className="page-number">5</li>
        <li className="page-number">6</li>
        <span className="page-number">...</span>
        <li className="page-number">42</li>
        <button className="button-next-page">{">"}</button>
      </ul>
    </div>
  );
}

export default Chatacters;
