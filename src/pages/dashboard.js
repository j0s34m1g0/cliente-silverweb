import React from "react";
import imgAdmin from "./assets/imgAdmin.png";
import { Link, useNavigate} from "react-router-dom";

const DASHBOARD = () => {
  const datos = JSON.parse(localStorage.getItem("userdata"));
  const navigate = useNavigate();

  if (datos.tipo === "Admin") {

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
                  Actualizar Datos
                </Link>
              </div>
              <div className="card-body">
                <button className="btn btn-primary btn-block container p-1" onClick={()=>{localStorage.removeItem('userdata'); navigate('/') }}>
                  Cerrar Sesión
                </button>
              </div>
              <div className="card-body">
                <Link to="/listUser1" className="btn btn-primary">
                  Administrar Usuarios
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default DASHBOARD;
