import { useState } from 'react'
import ScrollToTop from './front/js/component/scrollToTop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './front/js/pages/Home';
import { IngresarUsuarioYContrasena } from './front/js/pages/IngresarUsuarioYContrasena';
import { MenuPrincipal } from './front/js/pages/MenuPrincipal';
import { Empresa } from './front/js/pages/Empresa';
import { EliminarEmpresa } from './front/js/pages/EliminarEmpresa';
import { Footer } from './front/js/component/footer';


const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/




  return (
    <div>
      <BrowserRouter >

        <ScrollToTop>
          <Routes>


            <Route element={<Home />} path="/" />
            <Route element={<IngresarUsuarioYContrasena />} path="/login" />
            <Route element={<MenuPrincipal />} path="/menu" />
            <Route element={<Empresa />} path="/empresa" />
            <Route element={<EliminarEmpresa />} path="/eliminar_empresa" />




          </Routes>

          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
