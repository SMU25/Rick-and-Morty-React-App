import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

import Home from "./pages/Home";
import Chatacters from "./pages/Characters";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <Menu />
        <div className="content">
          <Chatacters />
          {/* <Home /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
