import React from 'react';
import { FooterBasePages } from './styles.js';

function FooterPages() {
  return (
    <FooterBasePages>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" style={{textDecoration: 'none', color: '#DB202C'}}>
          Imersão React da Alura
        </a>
      </p>
    </FooterBasePages>
  );
}

export default FooterPages;
