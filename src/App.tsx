import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Formulario from "./componentes/Formulario";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={Formulario}></Route>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
