import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BasketPage, DetailPage, CatalogPage } from "./pages";
import { HeaderComponent } from "./components";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HeaderComponent />} path="/">
          <Route element={<BasketPage />} path="/basket" />
          <Route element={<CatalogPage />} path="/" />
          <Route element={<DetailPage />} path="/item/:id" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
