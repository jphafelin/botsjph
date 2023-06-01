import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../img/LogoNewOffice.jpeg'
import '../../styles/navbar.css'
import '../../styles/botones.css'

import Papa from 'papaparse'

export const EliminarEmpresa = () => {
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
      //console.log(datos);

      const options = {
        delimiter:";"
      } // dummy options
      const jsonObjet = Papa.parse(datos, options)

      setTimeout(function(){
        setCsvData(jsonObjet.data)
        console.log("csvData", csvData);
    }, 500);

      
      return
    })


    

  },[]);
  

  function editAdmin(key, user) {
    console.log(key)

    localStorage.setItem('id_empresa', key)

    return navigate('/eliminar_empresa/empresa_actual')

    
  }

  console.log("csvData", csvData);

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
            <h3>ELIMINAR EMPRESA</h3>
          </div>
          <div className="col-2 text-end">
            <p>X04-E1</p>
            <div>
              <button
                id="cerrar-sesion"
                className="text-light btn border border-3 border-dark"
              >
                CERRAR SESION
              </button>
              <button
                id="ayuda"
                className="mx-2 btn border border-3 border-dark"
              >
                ?
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="eliminar-titulo"
        className="justify-content-center text-light text-center border border-dark border-2 border-top-0"
      >
        E L I M I N A R
      </div>
      <div>
        <button
          id="btn-volver"
          className="btn col-lg-1 m-1 justify border border-3 border-dark text-light"
          onClick={volver => navigate('/empresa')}
        >
          VOLVER
        </button>
      </div>

      <div
        id="formulario"
        className="col-lg-9 text-center border border-3 border-dark border-top-0 bg-light"
      >
        <div className="p-1 border-top border-bottom border-dark border-3 justify-content-center banda">
          <b>ELEGIR EMPRESA</b>
        </div>

        <div className="d-flex">
          <div className="col-2 border border-dark">
            <b>RUT</b>
          </div>
          <div className="col-8 border border-dark">
            <b>RAZON SOCIAL</b>
          </div>
          <div className="col-2 border border-dark">
            <b>ESTADO</b>
          </div>
        </div>

        <div className="d-flex">
          <input
            className="col-2"
            type="text"
            value={searchTerm.toUpperCase()}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <input
            className="col-8"
            type="text"
            value={searchTerm2.toUpperCase()}
            onChange={e => setSearchTerm2(e.target.value)}
          />
          <input
            className="col-2"
            type="text"
            value={searchTerm3.toUpperCase()}
            onChange={e => setSearchTerm3(e.target.value)}
          />
        </div>

        <div className="eleccion">
          {csvData
            .slice(1,-1)
            .filter(row => {
              if (
                searchTerm === '' &&
                searchTerm2 === '' &&
                searchTerm3 === ''
              ) {
                return row
              } else if (
                (row[2] + '-' + row[3])
                  .toUpperCase()
                  .includes(searchTerm.toUpperCase()) &&
                row[1].toUpperCase().includes(searchTerm2.toUpperCase()) &&
                row[5].toUpperCase().includes(searchTerm3.toUpperCase())
              ) {
                return row
              }
            })
            .map((row, index) => (
              <div
                className="d-flex"
                key={index}
                onClick={() => editAdmin(row[0], row[1])}
              >
                <div className="col-2 border border-dark">
                  <b>{row[2] + '-' + row[21]}</b>
                </div>
                <div className="col-8 border border-dark text-start">
                  <b className="mx-2">{row[1]}</b>
                </div>
                <div className="col-2 border border-dark">
                  <b>{row[5]}</b>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="row justify-content-center m-3"></div>

      <button onClick={boton => console.log(csvData)}>boton</button>
    </div>
  )
}