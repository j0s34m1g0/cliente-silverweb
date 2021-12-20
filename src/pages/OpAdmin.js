
import { useNavigate } from "react-router-dom";
const OpAdmin = () => {
    const datos = JSON.parse(localStorage.getItem("userdata"));
    const navigate = useNavigate();
    return(
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
             localStorage.setItem("idEstado", datos._id);
             navigate("/updateEstadoProyecto");
           }}
         >
           Cambiar Estado
         </button>
         <button
           type="button"
           className="btn btn-warning"
           onClick={() => {
             localStorage.setItem("idEstado", datos._id);
             navigate("/updateFaseProyecto");
           }}
         >
           Cambiar Fase
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
    )
   }
   export default OpAdmin;