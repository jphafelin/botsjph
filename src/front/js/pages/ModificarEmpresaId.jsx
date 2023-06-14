


import React, { useState, useEffect } from "react";
import { useEmpresasContext } from "../store/empresasProvider";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"







export const ModificarEmpresaId = () => {

  const idUsuarioActual = localStorage.getItem("id_user");
  const nombreUsuarioActual = localStorage.getItem("nombre_user");
  const apellidoUsuarioActual = localStorage.getItem("apellido_user");
  const token = localStorage.getItem("token");
  const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual} ${apellidoUsuarioActual}`;

  const empresas = useEmpresasContext();
  console.log("HOLA VENGO DEL CONTEXT", empresas[0]);


  const navigate = useNavigate();
  const id_empresa = parseInt(localStorage.getItem("id_empresa"));
  const id_empresa2 = localStorage.getItem("id_empresa");
  

  const [csvData, setCsvData] = useState([]);


  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/empresas/" + id_empresa2, requestOptions)
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

  const [value, setValue] = useState(`${empresas[id_empresa - 1].razonSocial}`);
  const [value2, setValue2] = useState(`${empresas[id_empresa - 1].rut}`);
  const [value3, setValue3] = useState(`${empresas[id_empresa - 1].digitoVerificador}`);
  const [value4, setValue4] = useState(`${empresas[id_empresa - 1].nombreFantasia}`);
  const [value5, setValue5] = useState(`${empresas[id_empresa - 1].giro}`);
  const [value6, setValue6] = useState(`${empresas[id_empresa - 1].direccionFacturacion}`);


  const [value7, setValue7] = useState(`${empresas[id_empresa - 1].comunaFacturacion}`);
  const [value8, setValue8] = useState(`${empresas[id_empresa - 1].nombreContactoFacturacion}`);
  const [value9, setValue9] = useState(`${empresas[id_empresa - 1].telefonoContactoFacturacion}`);
  const [value10, setValue10] = useState(`${empresas[id_empresa - 1].emailContactoFacturacion}`);
  const [value11, setValue11] = useState(`${empresas[id_empresa - 1].cargoContactoFacturacion}`);
  const [value12, setValue12] = useState(`${empresas[id_empresa - 1].nombreContactoCobranza}`);
  const [value13, setValue13] = useState(`${empresas[id_empresa - 1].telefonoContactoCobranza}`);
  const [value14, setValue14] = useState(`${empresas[id_empresa - 1].emailContactoCobranza}`);
  const [value15, setValue15] = useState(`${empresas[id_empresa - 1].cargoContactoCobranza}`);
  const [value16, setValue16] = useState(`${empresas[id_empresa - 1].usuarioCreador}`);
  const [value17, setValue17] = useState(`${empresas[id_empresa - 1].fechaCreacion}`);
  const [value18, setValue18] = useState(`${empresas[id_empresa - 1].usuarioUltimaModificacion}`);
  const [value19, setValue19] = useState(`${empresas[id_empresa - 1].fechaUltimaModificacion}`);


  const [selectedOption, setSelectedOption] = useState(`${empresas[id_empresa - 1].estado}`);
  const [selectedOption2, setSelectedOption2] = useState(`${empresas[id_empresa - 1].region}`);


  function handleChange2(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue2(event.target.value.replace(";", ""));
    } else {
      setValue2(event.target.value);
      const valuerut = event.target.value.replace(/\D/g, '');
      const formattedValue = parseInt(valuerut).toLocaleString('es-AR');
      if (isNaN(parseInt(valuerut))) {
        setValue2('');
      } else {
        setValue2(formattedValue);
      }
    }
  }
  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }
  function handleSelect2(event) {
    setSelectedOption2(event.target.value);
  }






  const grabar = () => {

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "razonSocial": value.toLocaleUpperCase(),
      "rut": value2,
      "digitoVerificador": value3.toLocaleUpperCase(),
      "nombreFantasia": value4.toLocaleUpperCase(),
      "giro": value5.toLocaleUpperCase(),
      "direccionFacturacion": value6.toLocaleUpperCase(),
      "region": selectedOption2,
      "comunaFacturacion": value7.toLocaleUpperCase(),
      "nombreContactoFacturacion": value8.toLocaleUpperCase(),
      "telefonoContactoFacturacion": value9.toLocaleUpperCase(),
      "emailContactoFacturacion": value10.toLocaleUpperCase(),
      "cargoContactoFacturacion": value11.toLocaleUpperCase(),
      "nombreContactoCobranza": value12.toLocaleUpperCase(),
      "telefonoContactoCobranza": value13.toLocaleUpperCase(),
      "emailContactoCobranza": value14.toLocaleUpperCase(),
      "cargoContactoCobranza": value15.toLocaleUpperCase(),
      "usuarioCreador": value16.toLocaleUpperCase(),
      "fechaCreacion": value17.toLocaleUpperCase(),
      "fechaUltimaModificacion": `${currentDate} ${currentTime}`,
      "usuarioUltimaModificacion": usuarioActual.toUpperCase(),
      "estado": selectedOption
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/empresas/" + id_empresa2, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    alert("Empresa Modificada")
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
            <h3>MODIFICAR EMPRESA ACTUAL</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E2</p>
            <div>
              <button id="cerrar-sesion" className="text-light btn border border-3 border-dark" onClick={cerrarSesion} >CERRAR SESION</button>
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
            <input className=" casilla-razon-social col-6 text-uppercase rounded" maxLength="45" value={value} onChange={(e) => { setValue(e.target.value) }}
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded" maxLength="10" value={value2} onChange={handleChange2}></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded" maxLength="1" value={value3} onChange={(e) => { setValue3(e.target.value) }} ></input>
            <label className="label-estado">ESTADO:</label>
            <select className="col bg-primary text-light rounded" value={selectedOption} onChange={handleSelect}>
              <option>VIGENTE</option>
              <option>NO VIGENTE</option>

            </select>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded" maxLength="40" value={value4} onChange={(e) => { setValue4(e.target.value) }}
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded" maxLength="40" value={value5} onChange={(e) => { setValue5(e.target.value) }}
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded" maxLength="40" value={value6} onChange={(e) => { setValue6(e.target.value) }}
            ></input>
            <label className="label-region">REGION:</label>
            <select className="col bg-primary text-light rounded" value={selectedOption2} onChange={handleSelect2}>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>RM</option>
              <option>14</option>
              <option>15</option>

            </select>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded" maxLength="20" value={value7} onChange={(e) => { setValue7(e.target.value) }}
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxLength="35" value={value8} onChange={(e) => { setValue8(e.target.value) }}
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxLength="25" value={value9} onChange={(e) => { setValue9(e.target.value) }}
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded " maxLength="42" value={value10} onChange={(e) => { setValue10(e.target.value) }}
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded " maxLength="23" value={value11} onChange={(e) => { setValue11(e.target.value) }}
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded" maxLength="35" value={value12} onChange={(e) => { setValue12(e.target.value) }}
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded" maxLength="25" value={value13} onChange={(e) => { setValue13(e.target.value) }}
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded" maxLength="42" value={value14} onChange={(e) => { setValue14(e.target.value) }}
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded" maxLength="23" value={value15} onChange={(e) => { setValue15(e.target.value) }}
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DATOS REGISTRO</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO CREADOR:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={value16} disabled="disabled"
            ></input>
            <label className="label-telefono">FECHA CREACION:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={value17} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO ULTIMA MODIF.:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={value18} disabled="disabled"
            ></input>
            <label className="label-cargo">FECHA ULT. MODIF.:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={value19} disabled="disabled"
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

):<h1>DEBE INICIAR SESION</h1>}

    </div>
  );
};
