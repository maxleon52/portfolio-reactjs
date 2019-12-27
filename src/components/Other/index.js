import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

import { Content } from './styles';

export default function Other() {
  return (
    <Content>
      <h1>Olá, eu sou Maxwell Alves</h1>
      <nav className="listSkills">
        <ul>
          <li>Full Stack Dev Jr</li>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>React</li>
          <li>NodeJS</li>
        </ul>
      </nav>
      <nav className="listMidias">
        <ul>
          <li>
            <a
              href="https://github.com/maxleon52"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/maxwell-alves-de-sousa-835036163/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/maxleon522"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/maxwell.sousa.98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="#fff" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/maxleon52/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaInstagram size={30} color="#fff" />
            </a>
          </li>
        </ul>
      </nav>
    </Content>
  );
}
