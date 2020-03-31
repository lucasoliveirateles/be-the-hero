import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '~/services/api';

import './styles.css';
import logoImg from '~/assets/img/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }
  
    try {
      const response = await api.post('/ongs', data);
  
      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert(`Registration error, try again.`);
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          
          <h1>Register</h1>        
          <p>Register, enter the platform and help people find the cases of your NGO.</p>
          
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            I have registration
          </Link> 
        </section>
        <form onSubmit={handleRegister}>
            <input 
              placeholder="Name of NGO" 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input 
              type="email" placeholder="E-mail" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input 
              placeholder="Telephone" 
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input 
                placeholder="City" 
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <input 
                placeholder="FU" style={{ width: 80 }} 
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
            </div>

            <button className="button" type="submit">Register</button>
          </form>
      </div>
    </div>
  );
}
