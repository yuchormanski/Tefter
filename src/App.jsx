import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./navigation/Navigation.jsx";
import Home from "./components/Home.jsx";
import AppContainer from "./components/AppContainer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<AppContainer />}>
          <Route path={"home"} element={<Home />} />
          <Route index element={<Navigate replace to="home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
