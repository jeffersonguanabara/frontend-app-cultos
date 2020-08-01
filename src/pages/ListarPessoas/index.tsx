import React, { useEffect, useState } from 'react';
import api from '../../services/api';

//import logo from '../../assets/logo.svg';

import './styles.css';

interface Pessoa {
  nome: string;
  dia_da_semana: string;
  horario: string;
  data: string;
}

const ListarPessoas = () => {

  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  useEffect(() => {
    api.get('https://api-cultos.herokuapp.com/pessoas').then(response => {
      setPessoas(response.data);
    });
  }, []);

  console.log(pessoas)

  return (
    <div id="lista-pessoas">
      <div className="content">
        <div className="header">
          {/* <img src = { logo } alt="Igreja Batista Missionária em Mangabeira 7" /> */}
        </div>
        <div className="main">
          <header>
            <h1>Lista de Pessoas</h1>
          </header>
          <table>
            <thead>
              <td className="col">Nº</td>
              <td className="col-2">Nome</td>
              <td className="col-1">Dia da Semana</td>
              <td className="col">Hora</td>
              <td className="col-1">Data</td>
            </thead>
            <tbody>
              {pessoas.map(pessoa => (
                <tr>
                  <td className="col">{}</td>
                  <td className="col-2">{pessoa.nome}</td>
                  <td className="col-1">{pessoa.dia_da_semana}</td>
                  <td className="col">{pessoa.horario}</td>
                  <td className="col-1">{pessoa.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>  
      </div>
      
    </div>    
  );
}

export default ListarPessoas;