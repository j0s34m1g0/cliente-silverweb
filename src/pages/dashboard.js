import React from "react";
import imgAdmin from "./assets/imgAdmin.png";
import lider from "./assets/lider.png";
import estudiante from "./assets/estudiante.png";
import { Link, useNavigate } from "react-router-dom";

const DASHBOARD = () => {
  const datos = JSON.parse(localStorage.getItem("userdata"));
  localStorage.setItem("idlider", datos._id);
  const navigate = useNavigate();

  if (datos.tipo === "Admin") {
    if (datos.estado === "Aprobado") {
      return (
        <div class="container px-4">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={imgAdmin} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{datos.nombre}</h5>
                  <p className="card-text">{datos.correo}</p>
                  <p className="card-text">{datos.tipo}</p>
                  <p className="card-text">{datos.estado}</p>
                  <p className="card-text">{datos.identificacion}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <Link to="/update" className="btn btn-primary">
                    Actualizar Mis Datos
                  </Link>
                </div>
                <div className="card-body">
                  <Link to="/listUser1" className="btn btn-primary">
                    Administrar Usuarios
                  </Link>
                </div>
                <div className="card-body">
                  <Link to="/listProyect" className="btn btn-primary">
                    Administrar Proyectos
                  </Link>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-danger btn-block container p-1"
                    onClick={() => {
                      localStorage.removeItem("userdata");
                      navigate("/");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
      <h1>Usuario pendiente por verificar</h1>
      <Link to='/'>Regresar</Link>
      </>
      )
    }
  } else if (datos.tipo === "Lider") {
    if (datos.estado === "Aprobado") {
      return (
        <div class="container px-4">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={lider} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{datos.nombre}</h5>
                  <p className="card-text">{datos.correo}</p>
                  <p className="card-text">{datos.tipo}</p>
                  <p className="card-text">{datos.estado}</p>
                  <p className="card-text">{datos.identificacion}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <Link to="/update" className="btn btn-primary">
                    Actualizar Mis Datos
                  </Link>
                </div>
                <div className="card-body">
                  <Link to="/listUser1" className="btn btn-primary">
                    Administrar Usuarios
                  </Link>
                </div>
                <div className="card-body">
                  <Link to="/crearProyecto" className="btn btn-primary">
                    Crear Proyecto
                  </Link>
                </div>
                <div className="card-body">
                  <Link to="/listProyectLider" className="btn btn-primary">
                    Mis proyectos
                  </Link>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-danger btn-block container p-1"
                    onClick={() => {
                      localStorage.removeItem("userdata");
                      navigate("/");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <>
      <h1>Usuario pendiente por verificar</h1>
      <Link to='/'>Regresar</Link>
      </>
      )
    }
  }
  else if (datos.tipo === "Estudiante") {
    if (datos.estado === "Aprobado") {
      return (
        <div class="container px-4">
          <div className="row">
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <img src={estudiante} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{datos.nombre}</h5>
                  <p className="card-text">{datos.correo}</p>
                  <p className="card-text">{datos.tipo}</p>
                  <p className="card-text">{datos.estado}</p>
                  <p className="card-text">{datos.identificacion}</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <Link to="/update" className="btn btn-primary">
                    Actualizar Mis Datos
                  </Link>
                </div>
                <div className="card-body">
                  <button
                    className="btn btn-danger btn-block container p-1"
                    onClick={() => {
                      localStorage.removeItem("userdata");
                      navigate("/");
                    }}
                  >
                    Cerrar Sesión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }else{
      return (
        <>
      <h1>Usuario pendiente por verificar</h1>
      <Link to='/'>Regresar</Link>
      </>
      )
    }
}}

export default DASHBOARD;
