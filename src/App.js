import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeForm from "./pages/welcome";
import RegistroForm from './pages/registrarse';
import DASHBOARD from './pages/dashboard';

import "bootswatch/dist/quartz/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<WelcomeForm/>} />
          <Route path="/registro" element={<RegistroForm/>} />
          <Route path="/dashboard" element={<DASHBOARD/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
