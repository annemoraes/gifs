import styled from 'styled-components';

export const Container = styled.div`
  background: #28262e;
  padding: 15px 0;
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  z-index: 1;

  header {
    flex: 1;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    nav {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (max-width: 750px) {
        flex-direction: column;
        align-items: flex-end;
      }
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        font-family: 'Roboto', serif;
        transition: opacity 0.2s;
        padding-bottom: 7px;
        display: flex;

        & + a {
          margin-left: 32px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
