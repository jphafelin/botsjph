import React, { useState, useEffect } from "react";
import "../../styles/botones.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"

import { useEmpresasContext } from "../store/empresasProvider";


import "moment";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";




//import axios from 'axios';




export const IngresarBot = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const empresas = useEmpresasContext();
  console.log("HOLA VENGO DEL CONTEXT", empresas[0]);

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const navigate = useNavigate();
  const idUsuarioActual = localStorage.getItem("id_user");
  const nombreUsuarioActual = localStorage.getItem("nombre_user");
  const token = localStorage.getItem("token");

  const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual}`;
  const [csvData, setCsvData] = useState([]);
  const [id, setId] = useState("");

  var requestOptions = {
    method: 'GET',
  }

  useEffect(() => {

    fetch('http://186.67.10.116:3002/api/bots/', requestOptions)
      .then(response => response.json())
      .then(datos => {
        console.log(datos);


        setId(datos.length + 1);
        return setCsvData(datos);
      });
    console.log("soy csvData", csvData)
    //etCsvData(csvData.slice(0, -1)); //eliminar la ultima fila
    //console.log("soy csvData cortada", csvData)

    console.log(id);
    console.log(selectedValue);
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("id_user");
    localStorage.removeItem("nombre_user");
    localStorage.removeItem("token");
    navigate("/login");
    //location.reload();

  }




  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  const [selectedOption, setSelectedOption] = useState("VIGENTE");
  const [selectedOption2, setSelectedOption2] = useState(empresas[0].razonSocial);

  const [selectedValue, setSelectedValue] = useState('NUNCA');



  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }

  function handleSelect2(event) {
    setSelectedOption2(event.target.value);
  }

  function handleChange(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue(event.target.value.replace(";", ""));
    } else {
      setValue(event.target.value);
    }
  }
  function handleChange2(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue2(event.target.value.replace(";", ""));
    } else {
      setValue2(event.target.value);
    }
  }

  function handleChange3(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue3(event.target.value.replace(";", ""));
    } else {
      setValue3(event.target.value);
    }
  }
  function handleChange4(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue4(event.target.value.replace(";", ""));
    } else {
      setValue4(event.target.value);
    }
  }
  function handleChange5(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue5(event.target.value.replace(";", ""));
    } else {
      setValue5(event.target.value);
    }
  }
  function handleChange6(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue6(event.target.value.replace(";", ""));
    } else {
      setValue6(event.target.value);
    }
  }


  function handleKeyPress(event) {
    if (event.key === ";") {
      event.preventDefault();
    }
  }

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const filePath = URL.createObjectURL(file);
    console.log(event.target.files);
  };

  const grabar = () => {

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "codBot": value.toUpperCase(),
      "descripcionBot": value2.toUpperCase(),
      "estado": selectedOption,
      "tipoEjecucion": selectedValue,
      "nombreEmpresa": selectedOption2,
      "observacion": value3.toUpperCase(),
      "rutaCarpetasBots": value4.toUpperCase(),
      "inicio": startDate.toLocaleDateString('es-ES', options).replace(/\//g, '-'),
      "termino": endDate.toLocaleDateString('es-ES', options).replace(/\//g, '-'),


      "usuarioCreador": usuarioActual.toUpperCase(),
      "fechaCreacion": `${currentDate} ${currentTime}`,
      "usuarioUltimaModificacion": "",
      "fechaUltimaModificacion": ""

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/bots/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


    console.log("HECHO")









    alert("Bot Creado")
    navigate("/bots")

    //location.reload();



  }



  return (
    <div className="justify-content-center">
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

          <div id="ingresar-titulo" className="justify-content-center text-light text-center border border-dark border-2">I N G R E S A R</div>
          <div>

            <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/bots")}>VOLVER</button>

          </div>

          <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
            <div className="row">
              <div className="text-start mx-3">
                <label className="label-id">ID:</label>
                <input className="casilla-id col bg-light rounded" maxLength="4" value={id} disabled="disabled"></input>
                <label className="label-codigo-bot">COD BOT:</label>
                <input className=" casilla-codigo-bot col-6 text-uppercase rounded" maxLength="5" value={value}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}></input>
                <label className="label-descripcion-bot">DESCRIPCION BOT:</label>


                <input className="casilla-descripcion-bot col-2 text-uppercase rounded" maxLength="25" value={value2}
                  onChange={handleChange2}
                  onKeyPress={handleKeyPress}></input>

              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-estado">ESTADO:</label>
                <select className="col bg-primary text-light rounded" onChange={handleSelect}>
                  <option>VIGENTE</option>
                  <option>NO VIGENTE</option>

                </select>

                <label className="label-tipo-ejecucion">TIPO DE EJECUCION:</label>
                <label>
                  <input className="mx-2"
                    type="radio"
                    value="SIEMPRE"
                    checked={selectedValue === 'SIEMPRE'}
                    onChange={handleRadioChange}
                  />
                  SIEMPRE
                </label>

                <label>
                  <input className="mx-3"
                    type="radio"
                    value="PROGRAMADO"
                    checked={selectedValue === 'PROGRAMADO'}
                    onChange={handleRadioChange}
                  />
                  PROGRAMADO
                </label>

                <label>
                  <input className="mx-3"
                    type="radio"
                    value="NUNCA"
                    checked={selectedValue === 'NUNCA'}
                    onChange={handleRadioChange}
                  />
                  NUNCA
                </label>

              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-nombre-empresa">NOMBRE EMPRESA:</label>
                <select className="col bg-primary text-light rounded select-nombre-empresa" onChange={handleSelect2}>
                  {empresas.map((item, key = item.id) => (
                    <option>{item.razonSocial}</option>
                  ))}




                </select>


              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">
                <label className="label-observacion">OBSERVACION:</label>
                <input className="casilla-observacion col-4 text-uppercase rounded" maxLength="50" value={value3}
                  onChange={handleChange3}
                  onKeyPress={handleKeyPress}></input>



              </div>

            </div>

            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>RUTA CARPETAS BOT</b>
            </div>
            <div className="row my-1">
              <div className="text-start py-1 mx-3">
                <label className="label-ruta-carpetas-bot">RUTA CARPETAS BOT:</label>
                <input className="casilla-ruta-carpetas-bot col-4 text-uppercase rounded" maxLength="50" value={value4}
                  onChange={handleChange4}
                  onKeyPress={handleKeyPress}></input>

              </div>
            </div>


            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>FECHAS OPERACION</b>
            </div>
            <div className="row my-2">
              <div className="col text-start mx-3">
                <div className="d-flex align-items-center">
                  <label className="label-inicio me-2">INICIO:</label>
                  <DatePicker
                    className="casilla-inicio text-uppercase rounded"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd-MM-yyyy"
                    dropdownMode="scroll"
                    popperPlacement="top-end"
                  />
                </div>
              </div>

              <div className="col text-start">
                <div className="d-flex align-items-center">
                  <label className="label-termino me-2">TERMINO:</label>
                  <DatePicker
                    className="casilla-inicio text-uppercase rounded"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="dd-MM-yyyy"
                    dropdownMode="scroll"
                    popperPlacement="top-end"
                  />
                </div>
              </div>
            </div>








          </div>


          <div className="row justify-content-center m-1">

          </div>
          <div className="col-10">
            <div className="text-end">

              <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>GRABAR</b></button>

            </div>



          </div>

          <div>
            <input type="file" onChange={handleFileUpload} />
          </div>


        </div>

      ) : <h1>DEBE INICIAR SESION</h1>}
    </div>
  );
};
