import React, { useState, useEffect } from "react";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"







export const ModificarEmpresaId = () => {



  const navigate = useNavigate();
  const id_empresa = localStorage.getItem("id_empresa");
  const [csvData, setCsvData] = useState([]);


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://localhost/api/empresas/1" , requestOptions)
      .then(response => response.json())
      .then((datos) => {



        return setCsvData(datos);





      });
    
      
  }, []);

  console.log(csvData);

  const [value, setValue] = useState(`${csvData.razonSocial}`);
  const [value2, setValue2] = useState(`${csvData.rut}`);
  const [value3, setValue3] = useState(`${csvData.digitoVerificador}`);
  const [value4, setValue4] = useState(`${csvData.nombreFantasia}`);
  const [value5, setValue5] = useState(`${csvData.giro}`);
  const [value6, setValue6] = useState(`${csvData.direccionFacturacion}`);

  
  const [value7, setValue7] = useState(`${csvData.comunaFacturacion}`);
  const [value8, setValue8] = useState(`${csvData.nombreContactoFacturacion}`);
  const [value9, setValue9] = useState(`${csvData.telefonoContactoFacturacion}`);
  const [value10, setValue10] = useState(`${csvData.emailContactoFacturacion}`);
  const [value11, setValue11] = useState(`${csvData.cargoContactoFacturacion}`);
  const [value12, setValue12] = useState(`${csvData.nombreContactoCobranza}`);
  const [value13, setValue13] = useState(`${csvData.telefonoContactoCobranza}`);
  const [value14, setValue14] = useState(`${csvData.emailContactoCobranza}`);
  const [value15, setValue15] = useState(`${csvData.cargoContactoCobranza}`);
  const [value16, setValue16] = useState(`${csvData.usuarioUltimaModificacion}`);
  const [value17, setValue17] = useState(`${csvData.fechaUltimaModificacion}`);

  
  const [selectedOption, setSelectedOption] = useState(`${csvData.rut}`);
  const [selectedOption2, setSelectedOption2] = useState(`${csvData.rut}`);

  









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
      "usuarioUltimaModificacion": "USUARIO MOD",
      "estado": `${csvData.estado}`
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost/api/empresas/" + id_empresa, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    alert("Empresa Modificada")
    navigate("/empresa")

    location.reload();



  }



  return (
    <div className="containter justify-content-center">

      <nav className="navbar p-1">
        <div className="container-fluid row">
          <div className="col-2">
            <Link to="/menu">
              <img src={logo} height="60px"></img>
            </Link>
          </div>
          <div className="col-8 text-center justify-content-start ">
            <h3>MODIFICAR EMPRESA ACTUAL</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E2</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark">CERRAR SESION</button>
              <button id="ayuda" className="mx-2 btn border border-3 border-dark">?</button>
            </div>
          </div>
        </div>


      </nav>

      <div id="modificar-titulo" className="justify-content-center text-center border border-dark border-2 border-top-0">M O D I F I C A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/modificar_empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label className="label-id">ID:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData.id} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded" maxLength="45" value={csvData.razonSocial} onChange={ (e)=> {setValue(e.target.value)}}
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded" maxLength="12" value={csvData.rut}></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded" maxLength="12" value={csvData.digitoVerificador} ></input>
            <label className="label-estado">ESTADO:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={csvData.estado} disabled="disabled">


            </input>
          </div>    

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded" maxLength="40" value={csvData.nombreFantasia} 
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded" maxLength="40" value={csvData.giro} 
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded" maxLength="40" value={csvData.direccionFacturacion} 
            ></input>
            <label className="label-region">REGION:</label>
            <input className="casilla-id col  rounded" maxLength="4" value={csvData.region} ></input>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded" maxLength="20" value={csvData.comunaFacturacion} 
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxLength="35" value={csvData.nombreContactoFacturacion} 
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxLength="25" value={csvData.telefonoContactoFacturacion} 
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded " maxLength="42" value={csvData.emailContactoFacturacion} 
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded " maxLength="23" value={csvData.cargoContactoFacturacion} 
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxLength="35" value={csvData.nombreContactoCobranza} 
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxLength="25" value={csvData.telefonoContactoCobranza} 
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded" maxLength="42" value={csvData.emailContactoCobranza} 
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded" maxLength="23" value={csvData.cargoContactoCobranza} 
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

          <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>GUARDAR</b></button>


        </div>
      </div>



    </div>
  );
};
