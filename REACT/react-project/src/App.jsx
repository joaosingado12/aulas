import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Cadastro from "../pages/Cadastro/index.jsx"
import Login from "../pages/Login/index.jsx"
import ListarUsuario from "../pages/Lista/index.jsx"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listar-usuarios" element={<ListarUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
