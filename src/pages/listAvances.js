import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const FIND_AVANCES = gql`
  query Query {
    qAvance {
      idProyecto
      fecha
      descripcion
      observacion
      idEstudiante
      idLider
      _id
    }
  }
`;

const ListAvances = () => {
  const { loading, error, data } = useQuery(FIND_AVANCES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data['qAvance'].map(
          ({
            idProyecto,
            fecha,
            descripcion,
            observacion,
            idEstudiante,
            idLider,
            _id
          }) => (
            <div key={_id} className="card m-4">
              <div className="card-body">
                <h4>Proyecto</h4>
                <p>idProyecto: {idProyecto}</p>
                <p>fecha: {fecha}</p>
                <p>descripcion: {descripcion}</p>
                <p>observacion: {observacion}</p>
                <p>idEstudiante: {idEstudiante}</p>
                <p>idLider: {idLider}</p>
              </div>
              <Link
                className="btn btn-primary btn-block container p-1"
                to="/dashboard"
              >
                Atrás
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ListAvances;
