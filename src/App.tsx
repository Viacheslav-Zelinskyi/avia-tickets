import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./components";
import { AboutPage, HomePage, TicketsPage, MyTicketsPage } from "./pages";
import { aboutPath, homePath, myTicketsPath, ticketsPath } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={homePath} element={<HomePage />} />
        <Route path={aboutPath} element={<AboutPage />} />
        <Route path={ticketsPath} element={<TicketsPage />} />
        <Route path={myTicketsPath} element={<MyTicketsPage />} />
      </Routes>
    </div>
  );
}

export default App;
