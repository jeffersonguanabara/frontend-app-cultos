import React from 'react';

import './styles.css';

// import logo from '../../assets/logo.svg';

import FormGarantaSuaVaga from '../FormGarantaSuaVaga';

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          {/* <img src={logo} alt="Igreja Batista Missionária em mangabeira 7"/> */}
        </header>

        <main>
          <h1>Cultos IBM7</h1>
          <p>Garanta aqui sua vaga para o próximo culto.</p>
          <FormGarantaSuaVaga />
        </main>
      </div>
    </div>  
  )
}

export default Home;