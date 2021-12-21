import { React, useState } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useNavigate, Link } from "react-router-dom";

const CREATE_AVANCE = gql`
  mutation AddAvance($input: AvanceInput) {
    addAvance(input: $input) {
      _id
    }
  }
`;
const FP = gql`
  query QProyecto {
    qProyecto {
      _id
      nombre
    }
  }
`;

const AddAvance = () => {
  const navigate = useNavigate();
  const [addAvance] = useMutation(CREATE_AVANCE);
  const datos = JSON.parse(localStorage.getItem("userdata"));
  const [descripcion, setDescripcion] = useState("");
  const [proyecto, setProyecto] = useState("");
  const sproyectos = JSON.parse(localStorage.getItem("idProyectos"));
  const { loading, error, data } = useQuery(FP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;
  const proyects = [];
  for (let i = 0; i < sproyectos.length; i++) {
    for (let j = 0; j < data["qProyecto"].length; j++) {
      if (sproyectos[i] === data["qProyecto"][j]["_id"]) {
        proyects.push(data["qProyecto"][j]);
      }
    }
  }
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addAvance({
                  variables: {
                    input: {
                      idProyecto: proyecto,
                      fecha: new Date(),
                      descripcion: descripcion,
                      idEstudiante: datos._id,
                    },
                  },
                });
                alert("Avance realizado con exito!");
                navigate("/dashboard");
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <select
                  value={proyecto}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setProyecto(e.target.value)}
                >
                  <option selected>Proyecto</option>
                  {proyects.map(({ _id, nombre }) => (
                    <option value={_id}>{nombre}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <span className="input-group-text">Avance</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  type="text"
                  className="form-control"
                  placeholder="Descripcion del avance"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>
              </div>              
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Actualizar Estado
                </button>
              </div>
              <div className="form-group container p-1">
                <Link
                  className="btn btn-primary btn-block container p-1"
                  to="/listUser1"
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

export default AddAvance;
