import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    min-height: 100%;
  }

  body{
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button{
    color: #222;
    font-size: 14px;
    font: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

`;
