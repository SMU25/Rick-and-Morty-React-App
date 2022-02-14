function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="menu">
          <div className="menuBtn">
            <span></span>
          </div>
          <ul className="menuList">
            <li className="menuItem">
              <a href="#/Home">Home</a>
            </li>
            <li className="menuItem">
              <a href="#/About">About</a>
            </li>
            <li className="menuItem">
              <a href="#/Timeline">Timeline</a>
            </li>
          </ul>
        </div>
        <h1 className="headerTitle title">Github API</h1>
      </header>
      <div className="content">
        <div className="search">
          <input type="text" />
          <button>Search</button>
        </div>
        <div className="items">
          <div className="item">
            <img className="itemImgProfile" src="./" alt="img" />
            <div className="itemInfo">
              <h3 className="itemTitle title">facebook/react</h3>
              <div className="itemRating">
                <img src="./" alt="star"></img>182296
              </div>
              <div className="itemVisitingDate">
                <img src="./" alt="date" />
                Sun Feb 13 2022 19:07:15
              </div>
              <div className="itemTimeZone">
                GMT+0200 (Восточная Европа, стандартное время)
              </div>
            </div>
            <div className="itemLinks">
              <a className="githubProfile" href="#/">
                <img src="./" alt="github icon"></img>
              </a>
              <a className="details" href="#/details">
                details
              </a>
            </div>
          </div>

          <div className="item">
            <img className="itemImgProfile" src="./" alt="img" />
            <div className="itemInfo">
              <h3 className="itemTitle title">facebook/react</h3>
              <div className="itemRating">
                <img src="./" alt="star"></img>182296
              </div>
              <div className="itemVisitingDate">
                <img src="./" alt="date" />
                Sun Feb 13 2022 19:07:15
              </div>
              <div className="itemTimeZone">
                GMT+0200 (Восточная Европа, стандартное время)
              </div>
            </div>
            <div className="itemLinks">
              <a className="githubProfile" href="#/">
                <img src="./" alt="github icon"></img>
              </a>
              <a className="details" href="#/details">
                details
              </a>
            </div>
          </div>

          <div className="item">
            <img className="itemImgProfile" src="./" alt="img" />
            <div className="itemInfo">
              <h3 className="itemTitle title">facebook/react</h3>
              <div className="itemRating">
                <img src="./" alt="star"></img>182296
              </div>
              <div className="itemVisitingDate">
                <img src="./" alt="date" />
                Sun Feb 13 2022 19:07:15
              </div>
              <div className="itemTimeZone">
                GMT+0200 (Восточная Европа, стандартное время)
              </div>
            </div>
            <div className="itemLinks">
              <a className="githubProfile" href="#/">
                <img src="./" alt="github icon"></img>
              </a>
              <a className="details" href="#/details">
                details
              </a>
            </div>
          </div>

          <div className="item">
            <img className="itemImgProfile" src="./" alt="img" />
            <div className="itemInfo">
              <h3 className="itemTitle title">facebook/react</h3>
              <div className="itemRating">
                <img src="./" alt="star"></img>182296
              </div>
              <div className="itemVisitingDate">
                <img src="./" alt="date" />
                Sun Feb 13 2022 19:07:15
              </div>
              <div className="itemTimeZone">
                GMT+0200 (Восточная Европа, стандартное время)
              </div>
            </div>
            <div className="itemLinks">
              <a className="githubProfile" href="#/">
                <img src="./" alt="github icon"></img>
              </a>
              <a className="details" href="#/details">
                details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
