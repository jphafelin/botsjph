import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../img/LogoNewOffice.jpeg';
import '../../styles/navbar.css';
import '../../styles/botones.css';

export const ConsultarEmpresaAPI = () => {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [searchTerm3, setSearchTerm3] = useState('');

  const [csvData, setCsvData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  var requestOptions = {
    method: 'GET',
  };

  useEffect(() => {
    fetch('http://186.67.10.116:3002/api/empresas', requestOptions)
      .then((response) => response.json())
      .then((datos) => {
        setCsvData(datos);
        return;
      });
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem('id_user');
    localStorage.removeItem('nombre_user');
    localStorage.removeItem('apellido_user');
    localStorage.removeItem('token');
    navigate('/login');
    //location.reload();
  };

  function editAdmin(key, user) {
    localStorage.setItem('id_empresa', key);
    return navigate('/consultar_empresa/empresa_actual');
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = csvData
    .filter((item) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      const searchRegex2 = new RegExp(searchTerm2, 'i');
      const searchRegex3 = new RegExp(searchTerm3, 'i');

      return (
        searchRegex.test(`${item.rut}-${item.digitoVerificador}`) &&
        searchRegex2.test(item.razonSocial) &&
        searchRegex3.test(item.estado)
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    csvData.filter((item) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      const searchRegex2 = new RegExp(searchTerm2, 'i');
      const searchRegex3 = new RegExp(searchTerm3, 'i');

      return (
        searchRegex.test(`${item.rut}-${item.digitoVerificador}`) &&
        searchRegex2.test(item.razonSocial) &&
        searchRegex3.test(item.estado)
      );
    }).length / itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <button
          className="btn btn-primary mx-3"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="btn btn-primary mx-3"
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    );
  };

  return (
    <div className="justify-content-center">
      {token ? (
        <div>
          <nav className="navbar p-1">
            <div className="container-fluid row">
              <div className="col-2">
                <Link to="/menu">
                  <img src={logo} height="60px" alt="Logo" />
                </Link>
              </div>
              <div className="col-8 text-center justify-content-start ">
                <h3>ELIMINAR EMPRESA CON API</h3>
              </div>
              <div className="col-2 text-end">
                <p>X04-E1</p>
                <div>
                  <button
                    id="cerrar-sesion"
                    className="text-light btn border border-3 border-dark"
                    onClick={cerrarSesion}
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
            id="consultar-titulo"
            className="justify-content-center text-light text-center border border-dark border-2"
          >
            C O N S U L T A R
          </div>
          <div>
            <button
              id="btn-volver"
              className="btn col-lg-1 m-1 justify border border-3 border-dark text-light"
              onClick={(volver) => navigate('/empresa')}
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <input
                className="col-8"
                type="text"
                value={searchTerm2.toUpperCase()}
                onChange={(e) => setSearchTerm2(e.target.value)}
              />
              <input
                className="col-2"
                type="text"
                value={searchTerm3.toUpperCase()}
                onChange={(e) => setSearchTerm3(e.target.value)}
              />
            </div>

            <div className="eleccion">
              {currentItems.map((item, key = item.id) => (
                <div
                  key={key}
                  className="d-flex"
                  onClick={() => editAdmin(item.id)}
                >
                  <div className="col-2 border border-dark">
                    <b>{item.rut}-{item.digitoVerificador}</b>
                  </div>
                  <div className="col-8 border border-dark text-start">
                    <b className="mx-2">{item.razonSocial}</b>
                  </div>
                  <div className="col-2 border border-dark">
                    <b>{item.estado}</b>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row justify-content-center m-3">
            <div className="col-lg-9 d-flex justify-content-center">
              {renderPagination()}
            </div>
          </div>
        </div>

      ) : (
        <h1>DEBE INICIAR SESION</h1>
      )}
    </div>
  );
}