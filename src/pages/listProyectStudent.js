import React from "react";
import { gql, useQuery } from "@apollo/client";

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
  
  for (let i = 0; i < data['qInscripcion'].length; i++) {
    if (data['qInscripcion'][i]['idEstudiante'] === datos._id){
      const idproyecto = data['qInscripcion'][i]['idProyecto']
    }
  }




  return <div>Holi</div>;
};

export default ListProyectStudent;
