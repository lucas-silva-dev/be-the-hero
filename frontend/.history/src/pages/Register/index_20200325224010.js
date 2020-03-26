import React from 'react';

import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero Logo" />

          <h1>Cadastro</h1>
          <p>Faça eu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

        </section>

        <form action=""></form>
      </div>
    </div>
  );
}