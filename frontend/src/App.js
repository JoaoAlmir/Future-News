import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PaginaHome } from "./pages/PaginaHome/PaginaHome";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<PaginaHome />} />

          {/* <Route path="/login/" element={<PaginaLogin/>} /> */}
        
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
