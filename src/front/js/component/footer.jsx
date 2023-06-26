// Poner fixed-bottom a footer

import React, { Component } from "react";
import "../../styles/footer.css"


export const Footer = () => {

	const idUsuarioActual = localStorage.getItem("id_user");
	const nombreUsuarioActual = localStorage.getItem("nombre_user");
	
	const usuarioActual = `${idUsuarioActual} - ${nombreUsuarioActual}`;
	const currentDate = new Date().toLocaleDateString();
	const currentTime = new Date().toLocaleTimeString();

	//var moment = require('moment');

	// obtener el nombre del mes, día del mes, año, hora
	//var now = moment().format("DD/MM/YYYY HH:mm");
	//console.log(now);

	return (


		<footer className="footer fixed-bottom mt-auto d-flex border border-dark border-3">
			{idUsuarioActual ? (
			<div className="col mx-5">USUARIO: {usuarioActual}</div>):(
			<div className="col mx-5">INICIAR SESION</div>)}


			<div className="col">{currentDate} {currentTime}</div>
		</footer>


	);
};