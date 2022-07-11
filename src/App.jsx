import { BrowserRouter, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

import { ProductGrid } from "./pages/ProductGrid";
import SignUpPage from "./pages/SignUp/index";
import SignInPage from "./pages/SignIn/index";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./pages/Admin";
import { useEffect, useState } from "react";
import { ProductDetail } from "./pages/ProductDetail";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("myWalletToken");

    if (!token) {
      setIsAdmin(false);
    }

    try {
      const tokenPayload = jwtDecode(token);

      if (tokenPayload.isAdmin) {
        setIsAdmin(true);
      }
    } catch (e) {
      setIsAdmin(false);
      console.log("Token is invalid");
    }
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/cadastrar" element={<SignUpPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/" element={<ProductGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/produto/novo-produto"
            element={isAdmin ? <Admin /> : <Admin />}//<ProductGrid />
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
