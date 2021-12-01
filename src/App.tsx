import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Header,
  AboutPage,
  HomePage,
  TicketsPage,
  MyTicketsPage,
} from "./components";
import { aboutPath, homePath, myTicketsPath, ticketsPath } from "./routes";
import { keepTheme } from "./utils/themes";

function App() {
  useEffect(() => {
    keepTheme();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path={homePath} element={<HomePage />} />
          <Route path={aboutPath} element={<AboutPage />} />
          <Route path={ticketsPath} element={<TicketsPage />} />
          <Route path={myTicketsPath} element={<MyTicketsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
