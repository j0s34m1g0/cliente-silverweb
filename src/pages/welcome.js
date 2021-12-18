import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";

const FIND_USER = gql`
  query QUsuario {
    qUsuario {
      correo
      estado
      identificacion
      nombre
      password
      tipo
      _id
    }
  }
`;

const WelcomeForm = () => {
  const navigate = useNavigate();
  const [correoi, setCorreoi] = useState("");
  const [passwordi, setPasswordi] = useState("");
  const { loading, error, data } = useQuery(FIND_USER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                const datos = await data["qUsuario"];
                for (let i = 0; i < datos.length; i++) {
                  if (datos[i].correo === correoi) {                    
                    if (datos[i].password === passwordi) {                   
                      localStorage.setItem("userdata", JSON.stringify(datos[i]));
                      navigate("/dashboard");
                      break;
                    } else {
                      alert("Correo o Contraseña incorrecta!");
                      break;
                    }
                  } else if(i===datos.length-1)
                  alert("Usuario No Registrado!");
                }
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  value={correoi}
                  onChange={(e) => setCorreoi(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contraseña"
                  value={passwordi}
                  onChange={(e) => setPasswordi(e.target.value)}
                />
              </div>
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Iniciar Sesión
                </button>
                <div className="form-group container p-1"></div>
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/registro"
                >
                  Registrarse
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeForm;
