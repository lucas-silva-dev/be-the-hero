import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  const ongID = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {

    })
  }, [])

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero Logo" />
        <span>Bem vinda, {ongName}</span>

        <Link className="button" to="/incidents/new" >Cadastrat novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>R$ 120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>R$ 120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>R$ 120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Caso teste</p>

          <strong>DESCRIÇÃO</strong>
          <p>R$ 120,00</p>

          <button type="button" >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </div>
  )
}