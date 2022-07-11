import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductGrid } from "./pages/ProductGrid";
import SignUpPage from "./pages/SignUp/index";
import SignInPage from "./pages/SignIn/index";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrar" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/" element={<ProductGrid />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
