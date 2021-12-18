import {React} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPDATE_USER = gql`
  mutation UpdateUsuario($id: ID, $input: UsuarioInput) {
    updateUsuario(_id: $id, input: $input) {
      _id
    }
  }
`;

const Update = () => {

  const datos = JSON.parse(localStorage.getItem("userdata"));
  const navigate = useNavigate();
  const [nombre, setNombre] = useState(datos.nombre);
  const [identificacion, setIdentificacion] = useState(datos.identificacion);
  const [correo, setCorreo] = useState(datos.correo);
  const [password, setPassword] = useState(datos.password);
  const [updateUsuario] = useMutation(UPDATE_USER);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                await updateUsuario({
                    variables: {
                      id: datos._id,
                      input: {
                        correo: correo,
                        identificacion: identificacion,
                        nombre: nombre,
                        password: password,
                        editBy: datos.correo,
                        tipo: datos.tipo,
                        estado: datos.estado
                      },
                    },
                  });
                  
                  alert('Datos actualizados correctamente!');
                  navigate('/dashboard');
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
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Actualizar Datos
                </button>
              </div>
              <div className="form-group container p-1">
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/dashboard"
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

export default Update;
