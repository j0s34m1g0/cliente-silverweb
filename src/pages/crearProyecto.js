import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PROYECTO = gql`
  mutation Mutation($input: ProyectoInput) {
    addProyecto(input: $input) {
      _id
    }
  }
`;

const ProyectoForm = () => {
  const idlider = localStorage.getItem("idlider");
  const [nombre, setNombre] = useState("");
  const [oGenerales, setOgenerales] = useState("");
  const [oEspecificos, setOespecificos] = useState("");
  const [presupuesto, setPresupuesto] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [addProyecto] = useMutation(CREATE_PROYECTO);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addProyecto({
                  variables: {
                    input: {
                      nombre: nombre,
                      oGenerales: oGenerales,
                      oEspecificos: oEspecificos,
                      presupuesto: presupuesto,
                      fechaInicio: fechaInicio,
                      fechaFin: fechaFin,
                      idLider: idlider,
                      estado: "Pendiente",
                      fase: "Pendiente",
                    },
                  },
                });
                setNombre("");
                setOgenerales("");
                setOespecificos("");
                setPresupuesto("");
                setFechaInicio("");
                setFechaFin("");
                return alert("Registro Exitoso!");
              }}
            >
              <div className="form-group">
                <h1 className="display-1 container p-1">SILVER-WEB</h1>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del proyecto"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Objetivos Generales"
                  value={oGenerales}
                  onChange={(e) => setOgenerales(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Objetivos Especificos"
                  value={oEspecificos}
                  onChange={(e) => setOespecificos(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Presupuesto"
                  value={presupuesto}
                  onChange={(e) => setPresupuesto(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha inicio del proyecto"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Fecha fin del proyecto"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                />
              </div>              
              <div className="form-group container p-1">
                <button className="btn btn-primary btn-block container p-1">
                  Envíar Registro
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

export default ProyectoForm;
