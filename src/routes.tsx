
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ListarPessoas from './pages/ListarPessoas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component = { Home } path="https://app-cultos.herokuapp.com/" exact />
      <Route component = { ListarPessoas } path="https://app-cultos.herokuapp.com/lista" />
    </BrowserRouter>
  );
}

export default Routes;