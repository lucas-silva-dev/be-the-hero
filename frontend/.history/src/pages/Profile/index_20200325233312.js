import React from 'react';
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero Logo" />
        <span>Bem vinda, APAE</span>

        <Link className="button" to="/incidents/new" >Cadastrat novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso teste</p>
        </li>
      </ul>
    </div>
  )
}