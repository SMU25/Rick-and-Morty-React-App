import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1 className="home__title title">Rick & Morty React App</h1>
      <Link className="start" to="/characters">
        Start
      </Link>
    </div>
  );
}
export default Home;
