import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeForm from "./pages/welcome";
import RegistroForm from './pages/registrarse';
import DASHBOARD from './pages/dashboard';
import Admin from "./pages/admin";
import Update from "./pages/update";
import ListUser1 from './pages/listUser1';
import UpdateEstado from './pages/updateEstado';

import "bootswatch/dist/quartz/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container p-4">
        <Routes>
          <Route path="/" element={<WelcomeForm/>} />
          <Route path="/registro" element={<RegistroForm/>} />
          <Route path="/dashboard" element={<DASHBOARD/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/listUser1" element={<ListUser1/>} />
          <Route path="/updateEstado" element={<UpdateEstado/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
