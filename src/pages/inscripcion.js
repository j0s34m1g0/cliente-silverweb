import { React, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const CREATE_INSCRIPCION = gql`
  mutation AddInscripcion($input: InscripcionInput) {
    addInscripcion(input: $input) {
      _id
    }
  }
`;

const FIND_PROYECTS = gql`
  query QProyecto {
    qProyecto {
      _id
      estado
      fase
      fechaFin
      fechaInicio
      idLider
      nombre
      oEspecificos
      oGenerales
      presupuesto
    }
  }
`;

const Inscripcion = () => {
  const datos = JSON.parse(localStorage.getItem("userdata"));
  const NewDate = new Date();
  const [idproyecto, setIdProyecto] = useState("");
  const [addInscripcion] = useMutation(CREATE_INSCRIPCION, {
    refetchQueries: [{ query: FIND_PROYECTS }],
  });
  const { loading, error, data } = useQuery(FIND_PROYECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        addInscripcion({
          variables: {
            input: {
              idProyecto: idproyecto,
              idEstudiante: datos._id,
              estado: "Pendiente",
              fechaIngreso: NewDate,
              fechaEgreso: "Pendiente",
            },
          },
        });
        return alert("Inscripcion Exitosa!");
      }}
    >
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <select
            value={idproyecto}
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setIdProyecto(e.target.value)}
          >
            <option selected>Seleccionar Proyecto</option>
            {data["qProyecto"].map(({ _id, nombre }) => (
              <option key={_id} value={_id}>
                {nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="btn btn-primary btn-block container p-1">
        Confirmar inscripcion
      </button>
      <div className="form-group container p-1">
        <Link
          className="btn btn-primary btn-block container p-1"
          to="/dashboard"
        >
          Atrás
        </Link>
      </div>
    </form>
  );
};

export default Inscripcion;
