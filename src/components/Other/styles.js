import styled from 'styled-components';

export const Content = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin-top: 250px;
    font-family: 'Roboto';
    font-size: 60px;
    color: #fff;
  }

  nav.listSkills {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 10pt;
    font-size: 19px;
    color: #fff;
    font-family: 'Roboto';

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;

      li {
        display: inline-block;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
    }
  }

  nav.listMidias {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;

      li {
        display: inline-block;
        align-items: center;
        justify-content: center;
        padding: 20px;
        text-decoration: none;
      }
    }
  }
`;
