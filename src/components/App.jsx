import { Exchange } from "Pages/Exchange";
import { Home } from "Pages/Home";
import { Route, Routes } from "react-router-dom"
import { AppBar } from "./AppBar";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        <Route path="/exchange" element={<Exchange />} />
      </Route>
    </Routes>
  );
};
