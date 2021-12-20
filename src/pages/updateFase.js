import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

const UPDATE_FASE = gql`
  mutation UpdateProyecto($id: ID, $input: ProyectoInput) {
    updateProyecto(_id: $id, input: $input) {
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

const UpdateFase = () => {
  const navigate = useNavigate();
  const [proyecto, setProyecto] = useState("");
  const [fase, setFase] = useState("");
  const [updateProyecto] = useMutation(UPDATE_FASE);
  const { loading, error, data } = useQuery(FP);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                await updateProyecto({
                  variables: {
                    id: proyecto,
                    input: {
                      fase: fase,
                    },
                  },
                });
                alert("Datos actualizados correctamente!");
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
                  {data["qProyecto"].map(({ _id, nombre }) => (
                    <option value={_id}>{nombre}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <select
                  value={fase}
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setFase(e.target.value)}
                >
                  <option selected>Fase</option>
                  <option value={"EnProceso"}>En proceso</option>
                  <option value={"Finalizado"}>Finalizado</option>
                </select>
              </div>
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Actualizar Fase
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

export default UpdateFase;
