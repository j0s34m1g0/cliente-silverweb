import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const FIND_USERS = gql`
  query QUsuario {
    qUsuario {
      correo
      identificacion
      nombre
      tipo
      estado
      _id
    }
  }
`;

const ListUser1 = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(FIND_USERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :C</p>;

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        {data["qUsuario"].map(
          ({ _id, estado, tipo, nombre, identificacion, correo }) => (
            <div key={_id} className="card m-4">
              <div className="card-body"></div>
              <h4>{nombre}</h4>
              <p>{identificacion}</p>
              <p>{correo}</p>
              <p>{tipo}</p>
              <p>{estado}</p>
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
                      navigate("/updateEstado");
                    }}
                  >
                    Cambiar Estado
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

export default ListUser1;
