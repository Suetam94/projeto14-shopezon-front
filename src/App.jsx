import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductGrid } from "./pages/ProductGrid";
import SignUpPage from "./pages/SignUp/index";
import SignInPage from "./pages/SignIn/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/produtos" element={<ProductGrid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
