import React, { useState, ChangeEvent, FormEvent } from 'react';
// import { useHistory } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import api from '../../services/api';

const FormGarantaSuaVaga = () => {

  const [formData, setFormData] = useState({nome: ''});

  // const history = useHistory();
  
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFormData({nome: value});
    console.log(formData)
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { nome } = formData;

    const data = { 
      nome,
      data: '02/08/2020',
      culto: [1]
    }; 

    const result = await api.post('https://api-cultos.herokuapp.com/culto', data);

    alert(result.data.message);
  }

  return (
    <form onSubmit = { handleSubmit }>
      <input 
        id="name"
        name="name"
        type="text"
        placeholder="Nome Completo"
        onChange = {handleInputChange}
      />

      <button type="submit">
        <span>
          <FiCheck />
        </span>
        <strong>Garanta sua vaga</strong>
      </button>
    </form>
  );
}

export default FormGarantaSuaVaga;

