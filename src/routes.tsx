
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import ListarPessoas from './pages/ListarPessoas';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component = { Home } path="/" exact />
      <Route component = { ListarPessoas } path="/lista" />
    </BrowserRouter>
  );
}

export default Routes;