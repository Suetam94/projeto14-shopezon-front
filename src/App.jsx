import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUp/index.jsx'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/cadastrar' element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
