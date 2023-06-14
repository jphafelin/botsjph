import React, { useState, useEffect } from "react";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"







export const EliminarEmpresaId = () => {

  const idUsuarioActual = localStorage.getItem("id_user");
  const nombreUsuarioActual = localStorage.getItem("nombre_user");
  const apellidoUsuarioActual = localStorage.getItem("apellido_user");
  const token = localStorage.getItem("token");

  const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual} ${apellidoUsuarioActual}`;

  const navigate = useNavigate();
  const id_empresa = localStorage.getItem("id_empresa");
  const [csvData, setCsvData] = useState([]);


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/empresas/" + id_empresa, requestOptions)
      .then(response => response.json())
      .then((datos) => {



        return setCsvData(datos);




      });
  }, []);


  const cerrarSesion = () =>{
    localStorage.removeItem("id_user");
    localStorage.removeItem("nombre_user");
    localStorage.removeItem("apellido_user");
    localStorage.removeItem("token");
    navigate("/login");
    location.reload();
    
    }

  console.log(csvData);














  const grabar = () => {

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "razonSocial": `${csvData.razonSocial}`,
      "rut": `${csvData.rut}`,
      "digitoVerificador": `${csvData.digitoVerificador}`,
      "nombreFantasia": `${csvData.nombreFantasia}`,
      "giro": `${csvData.giro}`,
      "direccionFacturacion": `${csvData.direccionFacturacion}`,
      "region": `${csvData.region}`,
      "comunaFacturacion": `${csvData.comunaFacturacion}`,
      "nombreContactoFacturacion": `${csvData.nombreContactoFacturacion}`,
      "telefonoContactoFacturacion": `${csvData.telefonoContactoFacturacion}`,
      "emailContactoFacturacion": `${csvData.emailContactoFacturacion}`,
      "cargoContactoFacturacion": `${csvData.cargoContactoFacturacion}`,
      "nombreContactoCobranza": `${csvData.nombreContactoCobranza}`,
      "telefonoContactoCobranza": `${csvData.telefonoContactoCobranza}`,
      "emailContactoCobranza": `${csvData.emailContactoCobranza}`,
      "cargoContactoCobranza": `${csvData.cargoContactoCobranza}`,
      "usuarioCreador": `${csvData.usuarioCreador}`,
      "fechaCreacion": `${csvData.fechaCreacion}`,
      "fechaUltimaModificacion": `${currentDate} ${currentTime}`,
      "usuarioUltimaModificacion": usuarioActual.toUpperCase(),
      "estado": "NO VIGENTE"
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/empresas/" + id_empresa, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    alert("Empresa Eliminada")
    navigate("/empresa")

    location.reload();



  }



  return (
    <div className="containter justify-content-center">
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
            <h3>ELIMINAR EMPRESA ACTUAL</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E2</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark" onClick={cerrarSesion}>CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>

      <div id="eliminar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">E L I M I N A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/eliminar_empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label className="label-id">ID:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData.id} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded bg-light" maxLength="45" value={csvData.razonSocial} disabled="disabled"
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" maxLength="12" value={csvData.rut} disabled="disabled"></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded bg-light" maxLength="12" value={csvData.digitoVerificador} disabled="disabled"></input>
            <label className="label-estado">ESTADO:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={csvData.estado} disabled="disabled">


            </input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded bg-light" maxLength="40" value={csvData.nombreFantasia} disabled="disabled"
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded bg-light" maxLength="40" value={csvData.giro} disabled="disabled"
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded bg-light" maxLength="40" value={csvData.direccionFacturacion} disabled="disabled"
            ></input>
            <label className="label-region">REGION:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData.region} disabled="disabled"></input>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded bg-light" maxLength="20" value={csvData.comunaFacturacion} disabled="disabled"
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData.nombreContactoFacturacion} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData.telefonoContactoFacturacion} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData.emailContactoFacturacion} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData.cargoContactoFacturacion} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData.nombreContactoCobranza} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData.telefonoContactoCobranza} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData.emailContactoCobranza} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData.cargoContactoCobranza} disabled="disabled"
            ></input>
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
        <div className="text-end">

          <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>ELIMINAR</b></button>


        </div>
      </div>

      </div>

):<h1>DEBE INICIAR SESION</h1>}

    </div>
  );
};
