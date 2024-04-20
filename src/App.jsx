import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductItem from "./ProductItem";
import HomePage from "./HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
}
