import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <ul>
            <li id="inicio">
              <Link to="/">Inicio</Link>
            </li>
            <li id="contato">
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </Content>
    </Container>
  );
}
