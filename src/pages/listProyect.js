import React from "react";
import { gql, useQuery } from "@apollo/client";
import OpAdmin from "./OpAdmin";

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
  const datos = JSON.parse(localStorage.getItem("userdata"));
  const { loading, error, data } = useQuery(FIND_PROYECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  const Opcion = (tipo) => {
    if (tipo === 'Admin'){
      return <OpAdmin/>
    }
  }

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data["qProyecto"].map(
          ({ _id,
            estado,
            fase,
            fechaFin,
            fechaInicio,
            idLider,
            nombre,
            oEspecificos,
            oGenerales,
            presupuesto }) => (
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
              {Opcion(datos.tipo)}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListProyect;
