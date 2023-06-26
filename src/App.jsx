import React, { useState } from 'react'
import ScrollToTop from './front/js/component/scrollToTop';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Home } from './front/js/pages/Home';
import { IngresarUsuarioYContrasena } from './front/js/pages/IngresarUsuarioYContrasena';
import { MenuPrincipal } from './front/js/pages/MenuPrincipal';

import { Empresa } from './front/js/pages/Empresa';
import { IngresarEmpresa } from './front/js/pages/IngresarEmpresa';
import { EliminarEmpresaAPI } from './front/js/pages/EliminarEmpresaAPI';
import { EliminarEmpresaId } from './front/js/pages/EliminarEmpresaId';
import { ModificarEmpresaAPI } from './front/js/pages/ModificarEmpresaAPI';
import { ModificarEmpresaId } from './front/js/pages/ModificarEmpresaId';
import { ConsultarEmpresaAPI } from './front/js/pages/ConsultarEmpresaAPI';
import { ConsultarEmpresaId } from './front/js/pages/ConsultarEmpresaId';

import { Bots } from './front/js/pages/Bots';
import { IngresarBot } from './front/js/pages/IngresarBot';
import { EliminarBotAPI } from './front/js/pages/EliminarBotAPI';
import { EliminarBotId } from './front/js/pages/EliminarBotId';
import { ModificarBotAPI } from './front/js/pages/ModificarBotAPI';
import { ModificarBotId } from './front/js/pages/ModificarBotId';
import { ConsultarBotAPI } from './front/js/pages/ConsultarBotAPI';
import { ConsultarBotId } from './front/js/pages/ConsultarBotId';

import { Usuario } from './front/js/pages/Usuario';
import { IngresarUsuario } from './front/js/pages/IngresarUsuario';
import { EliminarUsuarioAPI } from './front/js/pages/EliminarUsuarioAPI';
import { ModificarUsuarioAPI } from './front/js/pages/ModificarUsuarioAPI';
import { ConsultarUsuarioAPI } from './front/js/pages/ConsultarUsuarioAPI';


import { Footer } from './front/js/component/footer';
import { EmpresasProvider } from './front/js/store/empresasProvider';
import { UsuariosProvider } from './front/js/store/usuariosProvider';
import { BotsProvider } from './front/js/store/botsProvider';





const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/




  return (
    <div>
      <UsuariosProvider>
        <EmpresasProvider>
          <BotsProvider>
            <BrowserRouter >

              <ScrollToTop>
                <Routes>


                  <Route element={<Home />} path="/" />
                  <Route element={<IngresarUsuarioYContrasena />} path="/login" />
                  <Route element={<MenuPrincipal />} path="/menu" />

                  <Route element={<Empresa />} path="/empresa" />
                  <Route element={<IngresarEmpresa />} path="/ingresar_empresa" />
                  <Route element={<EliminarEmpresaAPI />} path="/eliminar_empresa" />
                  <Route element={<EliminarEmpresaId />} path="/eliminar_empresa/empresa_actual" />
                  <Route element={<ModificarEmpresaAPI />} path="/modificar_empresa" />
                  <Route element={<ModificarEmpresaId />} path="/modificar_empresa/empresa_actual" />
                  <Route element={<ConsultarEmpresaAPI />} path="/consultar_empresa" />
                  <Route element={<ConsultarEmpresaId />} path="/consultar_empresa/empresa_actual" />

                  <Route element={<Bots />} path="/bots" />
                  <Route element={<IngresarBot />} path="/ingresar_bot" />
                  <Route element={<EliminarBotAPI />} path="/eliminar_bot" />
                  <Route element={<EliminarBotId />} path="/eliminar_bot/bot_actual" />
                  <Route element={<ModificarBotAPI />} path="/modificar_bot" />
                  <Route element={<ModificarBotId />} path="/modificar_bot/bot_actual" />
                  <Route element={<ConsultarBotAPI />} path="/consultar_bot" />
                  <Route element={<ConsultarBotId />} path="/consultar_bot/bot_actual" />

                  <Route element={<Usuario />} path="/usuario" />
                  <Route element={<IngresarUsuario/>} path="/ingresar_usuario" />
                  <Route element={<EliminarUsuarioAPI />} path="/eliminar_usuario" />
                  <Route element={<ModificarUsuarioAPI />} path="/modificar_usuario" />
                  <Route element={<ConsultarUsuarioAPI />} path="/consultar_usuario" />








                </Routes>

                <Footer />
              </ScrollToTop>
            </BrowserRouter>
          </BotsProvider>
        </EmpresasProvider>
      </UsuariosProvider>
    </div>
  );
};

export default Layout;
