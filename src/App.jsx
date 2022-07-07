import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp/index.jsx";
import { ProductCard } from "./pages/ProductCard";

function App() {
  return (
    <>
      <ProductCard />
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrar" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
