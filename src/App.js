import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeForm from "./pages/welcome";
import RegistroForm from './pages/registrarse';
import DASHBOARD from './pages/dashboard';
import Admin from "./pages/admin";
import Update from "./pages/update";
import ListUser1 from './pages/listUser1';
import UpdateEstado from './pages/updateEstado';
import ListProyect from "./pages/listProyect";
import ProyectoForm from "./pages/crearProyecto";
import Inscripcion from "./pages/inscripcion";
import ListProyectStudent from "./pages/listProyectStudent";
import UpdateFase from "./pages/updateFase";

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
          <Route path="/listProyect" element={<ListProyect/>} />
          <Route path="/crearProyecto" element={<ProyectoForm/>} />
          <Route path="/inscripcion" element={<Inscripcion/>} />
          <Route path="/listProyectStudent" element={<ListProyectStudent/>} />
          <Route path="/updateFase" element={<UpdateFase/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
