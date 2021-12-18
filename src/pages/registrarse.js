import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation AddUsuario($input: UsuarioInput) {
    addUsuario(input: $input) {
      _id
    }
  }
`;

const FIND_NEWUSER = gql`
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

const RegistroForm = () => {
  const [nombre, setNombre] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [tipo, setTipo] = useState("");
  const [addUsuario] = useMutation(CREATE_USER, {
    refetchQueries:[{query: FIND_NEWUSER}]
  });

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addUsuario({
                  variables: {
                    input: {
                      correo: correo,
                      identificacion: identificacion,
                      password: password,
                      nombre: nombre,
                      tipo: tipo,
                      estado: "Pendiente",
                      editBy: "Registro inicial"
                    },
                  },
                });
                setNombre("");
                setIdentificacion("");
                setCorreo("");
                setPassword("");
                setTipo("");
                return(
                    alert('Registro Exitoso!')
                )
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="N° de identificación"
                  value={identificacion}
                  onChange={(e) => setIdentificacion(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Correo"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <select
                  value={tipo}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option selected>Tipo de cuenta</option>
                  <option value={"Admin"}>Admin</option>
                  <option value={"Lider"}>Lider</option>
                  <option value={"Estudiante"}>Estudiante</option>
                </select>
              </div>
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Envíar Registro
                </button>
              </div>
              <div className="form-group container p-1">
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/"
                >
                  Atrás
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroForm;
