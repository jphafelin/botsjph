import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from '../../img/LogoNewOffice.jpeg'
import '../../styles/navbar.css'
import '../../styles/botones.css'



export const ModificarEmpresaAPI = () => {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('')
  const [searchTerm2, setSearchTerm2] = useState('')
  const [searchTerm3, setSearchTerm3] = useState('')

  const [csvData, setCsvData] = useState([]);



  var requestOptions = {
    method: 'GET',
  }
  console.log("csvData", csvData);

  useEffect(() => {

    fetch('http://localhost/api/empresas', requestOptions)
    .then(response => response.json())
    .then(datos => {

        setCsvData(datos);

      return 
    })


    

  },[]);
  

  function editAdmin(key, user) {
    console.log(key)

    localStorage.setItem('id_empresa', key)

    return navigate('/modificar_empresa/empresa_actual')

    
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
            <h3>MODIFICAR EMPRESA CON API</h3>
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
        id="modificar-titulo"
        className="justify-content-center text-center border border-dark border-2 border-top-0"
      >
        <b>M O D I F I C A R</b>
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
          

          .filter(item => {
            const searchRegex = new RegExp(searchTerm, 'i');
            const searchRegex2 = new RegExp(searchTerm2, 'i');
            const searchRegex3 = new RegExp(searchTerm3, 'i');
          
            return searchRegex.test(item.rut) && searchRegex2.test(item.razonSocial) && searchRegex3.test(item.estado);
          })
          .map((item, key = item.id) => (
            <div key={key} className="d-flex" onClick={()=>editAdmin(item.id)}>
              <div className="col-2 border border-dark"><b>{item.rut}</b></div>
              <div className="col-8 border border-dark text-start"><b className="mx-2">{item.razonSocial}</b></div>
              <div className="col-2 border border-dark"><b>{item.estado}</b></div>
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-center m-3"></div>

     
    </div>
  )
}