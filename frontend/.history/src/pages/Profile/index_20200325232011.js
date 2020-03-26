import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero Logo" />
        <span>Bem vinda, APAE</span>

        <Link className="button" to="/incidents/new" >Cadastrat novo caso</Link>
      </header>
    </div>
  )
}