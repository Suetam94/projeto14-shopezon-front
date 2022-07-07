import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp/index";
import SignInPage from "./pages/SignIn/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<SignUpPage/>}/>
        <Route path="/login" element={<SignInPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
