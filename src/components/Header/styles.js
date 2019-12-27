import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;

  nav {
    display: flex;
    align-items: center;

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;

      li {
        display: inline-block;
      }
      li#inicio {
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid #7159c1;
      }
    }
  }
`;
