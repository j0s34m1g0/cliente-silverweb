import {React} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const UPDATE_ESTADO_PROYECTO = gql`
mutation Mutation($id: ID, $input: ProyectoInput) {
    updateProyecto(_id: $id, input: $input) {
      _id
    }
  }
`;

const UpdateEstadoProyecto = () => {

  const id = localStorage.getItem("idEstado");  
  const navigate = useNavigate();
  const [estado, setEstado] = useState('');
  const [updateProyecto] = useMutation(UPDATE_ESTADO_PROYECTO);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                  updateProyecto({
                    variables: {
                      id: id,
                      input: {
                        estado: estado
                      },
                    },
                  });
                  console.log(id, estado)
                  alert('Datos actualizados correctamente!');
                  navigate('/dashboard');
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <select
                  value={estado}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setEstado(e.target.value)}>
                  <option selected>Estado</option>
                  <option value={"Activo"}>Activo</option>
                  <option value={"Inactivo"}>Inactivo</option>
                </select>
              </div>
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Actualizar Estado
                </button>
              </div>
              <div className="form-group container p-1">
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/listProyect"
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

export default UpdateEstadoProyecto;
