import React, { useState, useEffect } from "react";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"




import "moment";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";




//import axios from 'axios';




export const ConsultarBotId = () => {

  const idUsuarioActual = localStorage.getItem("id_user");
  const nombreUsuarioActual = localStorage.getItem("nombre_user");
 
  const token = localStorage.getItem("token");

  const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual}`;

  const navigate = useNavigate();
  const id_bot = localStorage.getItem("id_bot");
  const [csvData, setCsvData] = useState([]);


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/bots/" + id_bot, requestOptions)
      .then(response => response.json())
      .then((datos) => {



        return setCsvData(datos);




      });
  }, []);



  const cerrarSesion = () => {
    localStorage.removeItem("id_user");
    localStorage.removeItem("nombre_user");
    
    localStorage.removeItem("token");
    navigate("/login");
    //location.reload();

  }





  return (
    <div className=" justify-content-center">
      {token ? (
        <div>
          <nav className="navbar p-1">
            <div className="container-fluid row">
              <div className="col-2">
                <Link to="/menu">
                  <img src={logo} height="60px"></img>
                </Link>
              </div>
              <div className="col-8 text-center justify-content-start ">
                <h3>BOTS</h3>
              </div>
              <div className="col-2 text-end">
                <p>X04-I1</p>
                <div>
                  <button id="cerrar-sesion" className="text-light btn border border-3 border-dark" onClick={cerrarSesion}>CERRAR SESION</button>
                  <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
                </div>
              </div>
            </div>


          </nav>

          <div
            id="consultar-titulo"
            className="justify-content-center text-light text-center border border-dark border-2"
          >
            C O N S U L T A R
          </div>
          <div>

            <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/bots")}>VOLVER</button>

          </div>

          <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
            <div className="row">
              <div className="text-start mx-3">
                <label className="label-id">ID:</label>
                <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData.id} disabled="disabled"></input>
                <label className="label-codigo-bot">COD BOT:</label>
                <input className=" casilla-codigo-bot col-6 text-uppercase rounded bg-light" maxLength="5" value={csvData.codBot} disabled="disabled"
                ></input>
                <label className="label-descripcion-bot">DESCRIPCION BOT:</label>


                <input className="casilla-descripcion-bot col-2 text-uppercase rounded bg-light" maxLength="25" value={csvData.descripcionBot} disabled="disabled"
                ></input>

              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-estado">ESTADO:</label>
                <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={csvData.estado} disabled="disabled">


                </input>
                <label className="label-tipo-ejecucion">TIPO DE EJECUCION:</label>
                <label>
                  <input
                    className="mx-2"
                    type="radio"
                    value="SIEMPRE"
                    disabled="disabled"
                    checked={csvData.tipoEjecucion === "SIEMPRE"}
                  />




                  SIEMPRE
                </label>

                <label>
                  <input className="mx-3"
                    type="radio"
                    value="PROGRAMADO"
                    disabled="disabled"
                    checked={csvData.tipoEjecucion === "PROGRAMADO"}


                  />
                  PROGRAMADO
                </label>

                <label>
                  <input className="mx-3"
                    type="radio"
                    value="NUNCA"
                    disabled="disabled"
                    checked={csvData.tipoEjecucion === "NUNCA"}


                  />
                  NUNCA
                </label>

              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-nombre-empresa">NOMBRE EMPRESA:</label>
                <input className="casilla-nombre-empresa col-4 text-uppercase rounded bg-light" maxLength="50" value={csvData.nombreEmpresa}
                disabled="disabled"
                ></input>



              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-observacion">OBSERVACION:</label>
                <input className="casilla-observacion col-4 text-uppercase rounded bg-light" maxLength="50" value={csvData.observacion}
                disabled="disabled"
                ></input>



              </div>

            </div>

            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>RUTA CARPETAS BOT</b>
            </div>
            <div className="row my-1">
              <div className="text-start py-1 mx-3">
                <label className="label-ruta-carpetas-bot">RUTA CARPETAS BOT:</label>
                <input className="casilla-ruta-carpetas-bot col-4 text-uppercase rounded bg-light" maxLength="50" value={csvData.rutaCarpetasBot} disabled="disabled"
                ></input>

              </div>
            </div>


            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>FECHAS OPERACION</b>
            </div>
            <div className="row my-2">
              <div className="col text-start mx-3">
                <div className="d-flex align-items-center">
                  <label className="label-inicio me-2">INICIO:</label>
                  <input className="casilla-inicio col-4 text-uppercase rounded bg-light" maxLength="50" value={csvData.inicio} disabled="disabled"></input>
                </div>
              </div>

              <div className="col text-start">
                <div className="d-flex align-items-center">
                  <label className="label-termino me-2">TERMINO:</label>
                  <input className="casilla-termino col-4 text-uppercase rounded bg-light" maxLength="50" value={csvData.termino} disabled="disabled"></input>
                </div>
              </div>
            </div>

            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>DATOS REGISTRO</b>
            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label>USUARIO CREADOR:</label>
                <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData.usuarioCreador} disabled="disabled"
                ></input>
                <label className="label-telefono">FECHA CREACION:</label>
                <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData.fechaCreacion} disabled="disabled"
                ></input>
              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label>USUARIO ULTIMA MODIF.:</label>
                <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData.usuarioUltimaModificacion} disabled="disabled"
                ></input>
                <label className="label-cargo">FECHA ULT. MODIF.:</label>
                <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData.fechaUltimaModificacion} disabled="disabled"
                ></input>
              </div>

            </div>








          </div>


          <div className="row justify-content-center m-1">

          </div>
          <div className="col-10">




          </div>




        </div>

      ) : <h1>DEBE INICIAR SESION</h1>}
    </div>
  );
};
