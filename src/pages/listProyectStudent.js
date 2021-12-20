import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FIND_MISPROYECTOS = gql`
  query MiProyecto {
    qInscripcion {
      idProyecto
      idEstudiante
    }
    qProyecto {
      _id
      nombre
      oGenerales
      oEspecificos
      presupuesto
      fechaInicio
      fechaFin
      estado
      fase
    }
    qAvance {
      idProyecto
      descripcion
      observacion
      _id
    }
  }
`;

const ListProyectStudent = () => {
  const datos = JSON.parse(localStorage.getItem("userdata"));
  const { loading, error, data } = useQuery(FIND_MISPROYECTOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;
  const proyectos = [];
  for (let i = 0; i < data["qInscripcion"].length; i++) {
    if (data["qInscripcion"][i]["idEstudiante"] === datos._id) {
      proyectos.push(data["qInscripcion"][i]["idProyecto"]);
    }
  }
  const dataProyectos = [];
  for (let j = 0; j < proyectos.length; j++) {
    for (let k = 0; k < data["qProyecto"].length; k++) {
      if (data["qProyecto"][k]["_id"] === proyectos[j]) {
        dataProyectos.push(data["qProyecto"][k]);
      }
    }
  }
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {dataProyectos.map(
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
              <div className="card-body">
                <h4>{nombre}</h4>
                <p>Objetivos Generales: {oGenerales}</p>
                <p>Objetivos Especificos: {oEspecificos}</p>
                <p>Presupuesto: {presupuesto}</p>
                <p>Estado: {estado}</p>
                <p>Fase: {fase}</p>
                <p>FechaFin: {fechaFin}</p>
                <p>FechaInicio: {fechaInicio}</p>
                <p>Lider: {idLider}</p>
              </div>
              <Link className="btn btn-primary btn-block container p-1" to="/dashboard">
                Atrás
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListProyectStudent;
