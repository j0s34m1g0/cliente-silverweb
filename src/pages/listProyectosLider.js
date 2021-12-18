import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

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

const ListProyect = () => {
  const idlider = localStorage.getItem("idlider");
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(FIND_PROYECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data["qProyecto"].map(
          ({
            _id,
            estado,
            fase,
            fechaFin,
            fechaInicio,
            idLider,
            nombre,
            oEspecificos,
            oGenerales,
            presupuesto,
          }) => (
            <div key={_id} className="card m-4">
              <div className="card-body"></div>
              <h4>{nombre}</h4>
              <p>Estado: {estado}</p>
              <p>Fase: {fase}</p>
              <p>FechaFin: {fechaFin}</p>
              <p>FechaInicio: {fechaInicio}</p>
              <p>Lider: {idLider}</p>
              <p>Objetivos Especificos:{oEspecificos}</p>
              <p>Objetivos Generales{oGenerales}</p>
              <p>Presupuesto: {presupuesto}</p>
              <div className="row">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Refresh
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      localStorage.setItem("idEstado", _id);
                      navigate("/updateEstadoProyecto");
                    }}
                  >
                    Editar Proyecto
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Atrás
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListProyect;
