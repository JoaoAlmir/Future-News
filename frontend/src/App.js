import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaHome } from "./pages/PaginaHome/PaginaHome";
import { PaginaLogin } from "./pages/PaginaLogin/PaginaLogin";
import { PaginaCadastro } from "./pages/PaginaCadastro/PaginaCadastro";
import "./App.css"
import { CustomMouse } from "./components/CustomMouse/CustomMouse";

function App() {
  return (
    <div className="App">
      <CustomMouse/>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<PaginaHome />} />
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/cadastro" element={<PaginaCadastro/>} />


        
        
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
