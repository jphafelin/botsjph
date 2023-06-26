import React, { useState, useEffect } from "react";
import "../../styles/botones.css"
import "../../styles/usuario.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import logo from "../../img/LogoNewOffice.jpeg";
import "../../styles/navbar.css"
import "moment";



export const IngresarUsuario = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchTerm2, setSearchTerm2] = useState('');
  const [searchTerm3, setSearchTerm3] = useState('');
  const [searchTerm4, setSearchTerm4] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;


  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const navigate = useNavigate();
  const idUsuarioActual = localStorage.getItem("id_user");
  const nombreUsuarioActual = localStorage.getItem("nombre_user");
  const token = localStorage.getItem("token");

  const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual}`;
  const [csvData, setCsvData] = useState([]);
  const [csvData2, setCsvData2] = useState([]);
  const [id, setId] = useState("");

  var requestOptions = {
    method: 'GET',
  }

  useEffect(() => {

    fetch('http://186.67.10.116:3002/api/usuarios/', requestOptions)
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
  }, []);

  useEffect(() => {

    fetch('http://186.67.10.116:3002/api/bots/', requestOptions)
      .then(response => response.json())
      .then(datos => {
        console.log(datos);


        setId(datos.length + 1);
        return setCsvData2(datos);
      });
    console.log("soy csvData", csvData2)
    //etCsvData(csvData.slice(0, -1)); //eliminar la ultima fila
    //console.log("soy csvData cortada", csvData)

    console.log(id);
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("id_user");
    localStorage.removeItem("nombre_user");
    localStorage.removeItem("token");
    navigate("/login");
    //location.reload();

  }

  function editAdmin(key, user) {
    localStorage.setItem('id_bot', key);
    return navigate('/eliminar_bot/bot_actual');
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = csvData2
    .filter((item) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      const searchRegex2 = new RegExp(searchTerm2, 'i');
      const searchRegex3 = new RegExp(searchTerm3, 'i');
      const searchRegex4 = new RegExp('^' + searchTerm4, 'i');

      return (
        searchRegex.test(item.codBot) &&
        searchRegex2.test(item.nombreEmpresa) &&
        searchRegex3.test(item.descripcionBot) &&
        searchRegex4.test(item.estado)
      );
    })
    .slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    csvData2.filter((item) => {
      const searchRegex = new RegExp(searchTerm, 'i');
      const searchRegex2 = new RegExp(searchTerm2, 'i');
      const searchRegex3 = new RegExp(searchTerm3, 'i');
      const searchRegex4 = new RegExp('^' + searchTerm4, 'i');

      return (
        searchRegex.test(item.codBot) &&
        searchRegex2.test(item.nombreEmpresa) &&
        searchRegex3.test(item.descripcionBot) &&
        searchRegex4.test(item.estado)
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


  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");
  const [value7, setValue7] = useState("");



  const [selectedOption, setSelectedOption] = useState("VIGENTE");




  function handleSelect(event) {
    setSelectedOption(event.target.value);
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
  function handleChange7(event) {
    if (event.target.value.indexOf(";") !== -1) {
      alert("El carácter ';' no está permitido en este campo.");
      setValue7(event.target.value.replace(";", ""));
    } else {
      setValue7(event.target.value);
    }
  }


  function handleKeyPress(event) {
    if (event.key === ";") {
      event.preventDefault();
    }
  }


  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };


  const grabar = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "usuario": value.toUpperCase(),
      "constrasena": value2.toUpperCase(),
      "nombre": value3.toUpperCase(),
      "telefono": value4.toUpperCase(),
      "estado": selectedOption,
      "email": value5.toUpperCase(),
      "cargo": value6.toUpperCase(),
      "obs": value7.toUpperCase(),
      "usuarioCreador": usuarioActual.toUpperCase(),
      "fechaCreacion": `${currentDate} ${currentTime}`,
      "usuarioUltimaModificacion": "",

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://186.67.10.116:3002/api/usuarios/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));


    console.log("HECHO")









    alert("Usuario Creado")
    navigate("/usuario")

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
                <h3>INGRESAR USUARIO</h3>
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

          <div id="ingresar-titulo" className="justify-content-center text-light text-center border border-dark border-2 border-top-0">I N G R E S A R</div>
          <div>

            <button id="btn-volver" className="btn col-1 m-1 justify border border-3 border-dark text-light" onClick={volver => navigate("/usuario")}>VOLVER</button>

          </div>

          <div id="formulario" className="col-8 text-center py-1 pb-0 border border-3 border-dark bg-light">
            <div className="row border-2 border-bottom border-dark m-0 pb-1">
              <div className="text-start mx-3">
                <label className="label-id-usuario">ID:</label>
                <input className="casilla-id-usuario col bg-light rounded" maxLength="4" value={id} disabled="disabled"></input>
                <label className="label-usuario">USUARIO:</label>
                <input className=" casilla-usuario col-6 text-uppercase rounded" maxLength="15" value={value}
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}></input>

                <label className="label-clave">CLAVE:</label>
                <input className="casilla-clave col-2 text-uppercase rounded" maxLength="15" value={value2}
                  onChange={handleChange2}
                  onKeyPress={handleKeyPress}></input>

              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">

                <label className="label-nombre">NOMBRE:</label>
                <input className="casilla-nombre col-6 text-uppercase rounded" maxLength="35" value={value3}
                  onChange={handleChange3}
                  onKeyPress={handleKeyPress}></input>
                <label className="label-telefono">TELEFONO:</label>
                <input className="casilla-telefono col-4 text-uppercase rounded" maxLength="25" value={value4}
                  onChange={handleChange4}
                  onKeyPress={handleKeyPress}></input>
              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">

                <label className="label-email">EMAIL:</label>
                <input className="casilla-email col-6 text-uppercase rounded" maxLength="42" value={value5}
                  onChange={handleChange5}
                  onKeyPress={handleKeyPress}></input>
                <label className="label-cargo">CARGO:</label>
                <input className="casilla-cargo col-4 text-uppercase rounded" maxLength="23" value={value6}
                  onChange={handleChange6}
                  onKeyPress={handleKeyPress}></input>
              </div>

            </div>
            <div className="row my-2">
              <div className="text-start mx-3">

                <label className="label-obs">OBS:</label>
                <input className="casilla-obs col-6 text-uppercase rounded" maxLength="25" value={value7}
                  onChange={handleChange7}
                  onKeyPress={handleKeyPress}></input>

                <label className="label-estado">ESTADO:</label>
                <select className="col bg-primary text-light rounded" onChange={handleSelect}>
                  <option>VIGENTE</option>
                  <option>NO VIGENTE</option>

                </select>
              </div>

            </div>

            <div className="border-top border-bottom border-dark border-3 justify-content-center banda">
              <b>SELECCIONAR BOTS A USUARIOS</b>
            </div>
            <div className="row my-0">



              <div className="d-flex"><div className="col-1 border border-dark">
                <b></b>
              </div>
                <div className="col-1 border border-dark">
                  <b>COD</b>
                </div>
                <div className="col-4 border border-dark">
                  <b>NOMBRE EMPRESA</b>
                </div>
                <div className="col-4 border border-dark">
                  <b>DESCRIPCION BOT</b>
                </div>
                <div className="col-2 border border-dark">
                  <b>ESTADO</b>
                </div>
              </div>

              <div className="d-flex">
                <input
                  className="col-1 bg-light"
                  type="text"
                  disabled="disabled"
                />
                <input
                  className="col-1"
                  type="text"
                  value={searchTerm.toUpperCase()}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                  className="col-4"
                  type="text"
                  value={searchTerm2.toUpperCase()}
                  onChange={(e) => setSearchTerm2(e.target.value)}
                />
                <input
                  className="col-4"
                  type="text"
                  value={searchTerm3.toUpperCase()}
                  onChange={(e) => setSearchTerm3(e.target.value)}
                />
                <input
                  className="col-2"
                  type="text"
                  value={searchTerm4.toUpperCase()}
                  onChange={(e) => setSearchTerm4(e.target.value)}
                />
              </div>

              <div className="eleccion">
                {currentItems.map((item, key = item.id) => (
                  <div
                    key={key}
                    className="d-flex"

                  >
                    <div className="col-1 border border-dark">
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                          />

                        </label>
                      </div>
                    </div>
                    <div className="col-1 border border-dark">
                      <b>{item.codBot}</b>
                    </div>
                    <div className="col-4 border border-dark text-start">
                      <b className="mx-2">{item.nombreEmpresa}</b>
                    </div>
                    <div className="col-4 border border-dark text-start">
                      <b className="mx-2">{item.descripcionBot}</b>
                    </div>
                    <div className="col-2 border border-dark">
                      <b>{item.estado}</b>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>
          <div className="row justify-content-center m-3">
            <div className="col-lg-9 d-flex justify-content-center">
              {renderPagination()}
            </div>
          </div>













          <div className="row justify-content-center m-1">

          </div>
          <div className="col-10">
            <div className="text-end">

              <button id="btn-grabar" className="col-1 justify border border-3 border-dark btn" onClick={grabar}><b>GRABAR</b></button>

            </div>



          </div>


        </div>

      ) : <h1>DEBE INICIAR SESION</h1>}
    </div>
  );
};
