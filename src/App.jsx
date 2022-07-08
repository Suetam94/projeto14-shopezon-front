import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp/index.jsx";
import { ProductGrid } from "./pages/ProductGrid";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrar" element={<SignUpPage />} />
          <Route path="/produtos" element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
