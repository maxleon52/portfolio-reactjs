import React from 'react';

import Header from '../../components/Header';
import { Content } from './styles';

export default function contact() {
  return (
    <>
      <Header />
      <Content>
        <form action="https://formspree.io/maxleon522@gmail.com" method="POST">
          <h1>Mande-me sua solicitação</h1>
          <input type="hidden" name="_subject" value="Contato de Cliente" />
          <input type="text" name="nome" placeholder="Seu nome..." />
          <input type="email" name="_replyto" placeholder="Seu email..." />
          <textarea name="mensagem" placeholder="Sua mensagem..." />
          <button type="submit">Enviar</button>
        </form>
      </Content>
    </>
  );
}
