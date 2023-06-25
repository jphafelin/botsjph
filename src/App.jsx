import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './front/js/component/scrollToTop';
import './App.css';
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
import { ConsultarBotAPI } from './front/js/pages/ConsultarBotAPI';
import { ConsultarBotId } from './front/js/pages/ConsultarBotId';
import { Footer } from './front/js/component/footer';
import { EmpresasProvider } from './front/js/store/empresasProvider';
import { UsuariosProvider } from './front/js/store/usuariosProvider';

const Layout = () => {
  return (
    <div>
      <UsuariosProvider>
        <EmpresasProvider>
          <Router>
            <ScrollToTop />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <IngresarUsuarioYContrasena />
              </Route>
              <Route path="/menu">
                <MenuPrincipal />
              </Route>
              <Route exact path="/empresa">
                <Empresa />
              </Route>
              <Route path="/ingresar_empresa">
                <IngresarEmpresa />
              </Route>
              <Route path="/eliminar_empresa">
                <EliminarEmpresaAPI />
              </Route>
              <Route path="/eliminar_empresa/empresa_actual">
                <EliminarEmpresaId />
              </Route>
              <Route path="/modificar_empresa">
                <ModificarEmpresaAPI />
              </Route>
              <Route path="/modificar_empresa/empresa_actual">
                <ModificarEmpresaId />
              </Route>
              <Route path="/consultar_empresa">
                <ConsultarEmpresaAPI />
              </Route>
              <Route path="/consultar_empresa/empresa_actual">
                <ConsultarEmpresaId />
              </Route>
              <Route exact path="/bots">
                <Bots />
              </Route>
              <Route path="/ingresar_bot">
                <IngresarBot />
              </Route>
              <Route path="/eliminar_bot">
                <EliminarBotAPI />
              </Route>
              <Route path="/eliminar_bot/bot_actual">
                <EliminarBotId />
              </Route>
              <Route path="/modificar_bot">
  <ModificarBotAPI />
</Route>
<Route path="/consultar_bot">
  <ConsultarBotAPI />
</Route>
<Route path="/consultar_bot/bot_actual">
  <ConsultarBotId />
</Route>
</Switch>
<Footer />
</Router>
</EmpresasProvider>
</UsuariosProvider>
</div>
);
};

export default Layout;
