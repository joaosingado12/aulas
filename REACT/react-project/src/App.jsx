import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "../pages/Cadastro/index.jsx"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
