import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../img/LogoNewOffice.jpeg'
import '../../styles/navbar.css'
import '../../styles/botones.css'

import Papa from 'papaparse'

export const EliminarEmpresaId = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchTerm2, setSearchTerm2] = useState('')
  const [searchTerm3, setSearchTerm3] = useState('')

  const [csvData, setCsvData] = useState([])

  var requestOptions = {
    method: 'GET',
  }

  useEffect(() => {

    fetch('http://csvjp.nof.cl/tx_emp_prueba.csv', requestOptions)
    .then(response => response.text())
    .then(datos => {
      console.log(datos)

      const options = {
        delimiter:";"
      } // dummy options
      const jsonObjet = Papa.parse(datos, options)

      console.log(jsonObjet)
      return setCsvData(jsonObjet.data)
    })

  },[]);
  

  function editAdmin(key, user) {
    console.log(key)

    localStorage.setItem('id_empresa', key)

    return navigate('/eliminar_empresa/empresa_actual')
  }
  const grabar = () => {
    console.log("grabado");
    console.log(csvData);
 
	// obtener el nombre del mes, día del mes, año, hora


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
            <h3>ELIMINAR EMPRESA ACTUAL</h3>
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

      <div id="eliminar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">E L I M I N A R</div>
      <div>

        <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/eliminar_empresa")}>VOLVER</button>

      </div>

      <div id="formulario" className="col-8 text-center py-1 border border-3 border-dark bg-light">
        <div className="row">
          <div className="text-start mx-3">
            <label className="label-id">ID:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData[localStorage.getItem('id_empresa')][0]} disabled="disabled"></input>
            <label className="label-razon-social">RAZON SOCIAL:</label>
            <input className=" casilla-razon-social col-6 text-uppercase rounded bg-light" maxLength="45" value={csvData[localStorage.getItem('id_empresa')][1]} disabled="disabled"
            ></input>
            <label className="label-rut">RUT:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" maxLength="12" value={csvData[localStorage.getItem('id_empresa')][2]} disabled="disabled"></input>
            -
            <input className="casilla-rut-verificador col-2 text-uppercase rounded bg-light" maxLength="12" value={csvData[localStorage.getItem('id_empresa')][21]} disabled="disabled"></input>
            <label className="label-estado">ESTADO:</label>
            <input className="casilla-rut col-2 text-uppercase rounded bg-light" value={csvData[localStorage.getItem('id_empresa')][5]} disabled="disabled">


            </input>
          </div>

        </div>  
        <div className="row my-2">
          <div className="text-start mx-3">

            <label>NOMBRE FANTASIA:</label>
            <input className="casilla-nombre-fantasia col-6 text-uppercase rounded bg-light" maxLength="40" value={csvData[localStorage.getItem('id_empresa')][3]} disabled="disabled"
            ></input>
            <label className="label-giro">GIRO:</label>
            <input className="casilla-giro col-4 text-uppercase rounded bg-light" maxLength="40" value={csvData[localStorage.getItem('id_empresa')][4]} disabled="disabled"
            ></input>
          </div>

        </div>

        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DIRECCION FACTURACION</b>
        </div>
        <div className="row my-1">
          <div className="text-start py-1 mx-3">
            <label>DIRECCION:</label>
            <input className="casilla-direccion col-4 text-uppercase rounded bg-light" maxLength="40" value={csvData[localStorage.getItem('id_empresa')][6]} disabled="disabled"
            ></input>
            <label className="label-region">REGION:</label>
            <input className="casilla-id col bg-light rounded" maxLength="4" value={csvData[localStorage.getItem('id_empresa')][7]} disabled="disabled"></input>
            <label className="label-comuna">COMUNA:</label>
            <input className="casilla-comuna col-4 text-uppercase rounded bg-light" maxLength="20" value={csvData[localStorage.getItem('id_empresa')][8]} disabled="disabled"
            ></input>
          </div>
        </div>


        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO FACTURACION</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData[localStorage.getItem('id_empresa')][9]} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData[localStorage.getItem('id_empresa')][10]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData[localStorage.getItem('id_empresa')][11]} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData[localStorage.getItem('id_empresa')][12]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>CONTACTO COBRANZA</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>NOMBRE:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData[localStorage.getItem('id_empresa')][13]} disabled="disabled"
            ></input>
            <label className="label-telefono">TELEFONO:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData[localStorage.getItem('id_empresa')][14]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>EMAIL:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData[localStorage.getItem('id_empresa')][15]} disabled="disabled"
            ></input>
            <label className="label-cargo">CARGO:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData[localStorage.getItem('id_empresa')][16]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>DATOS REGISTRO</b>
        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO CREADOR:</label>
            <input className="casilla-nombre col-4 text-uppercase rounded bg-light" maxLength="35" value={csvData[localStorage.getItem('id_empresa')][17]} disabled="disabled"
            ></input>
            <label className="label-telefono">FECHA CREACION:</label>
            <input className="casilla-telefono col-4 text-uppercase rounded bg-light" maxLength="25" value={csvData[localStorage.getItem('id_empresa')][18]} disabled="disabled"
            ></input>
          </div>

        </div>
        <div className="row my-2">
          <div className="text-start mx-3">
            <label>USUARIO ULTIMA MODIF.:</label>
            <input className="casilla-email col-4 text-uppercase rounded bg-light" maxLength="42" value={csvData[localStorage.getItem('id_empresa')][19]} disabled="disabled"
            ></input>
            <label className="label-cargo">FECHA ULT. MODIF.:</label>
            <input className="casilla-cargo col-4 text-uppercase rounded bg-light" maxLength="23" value={csvData[localStorage.getItem('id_empresa')][20]} disabled="disabled"
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
  );
};
