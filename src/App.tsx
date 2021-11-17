import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Header } from "./components";
import { AboutPage, HomePage, TicketsPage, MyTicketsPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/mytickets" element={<MyTicketsPage />} />
      </Routes>
    </div>
  );
}

export default App;
