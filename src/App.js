import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeForm from "./pages/welcome";
import RegistroForm from './pages/registrarse';
import DASHBOARD from './pages/dashboard';
import Admin from "./pages/admin";
import Update from "./pages/update";
import ListUser1 from './pages/listUser1';
import UpdateEstado from './pages/updateEstado';
import UpdateEstadoProyecto from "./pages/updateEstadoProyecto";
import UpdateFaseProyecto from "./pages/updateFaseProyecto";
import ListProyect from "./pages/listProyect";
import ProyectoForm from "./pages/crearProyecto";
import ListProyectLider from './pages/listProyectosLider';

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
          <Route path="/updateEstadoProyecto" element={<UpdateEstadoProyecto/>} />
          <Route path="/updateFaseProyecto" element={<UpdateFaseProyecto/>} />
          <Route path="/listProyect" element={<ListProyect/>} />
          <Route path="/crearProyecto" element={<ProyectoForm/>} />
          <Route path="/listProyectLider" element={<ListProyectLider/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
