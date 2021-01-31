import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  flex-direction: column;
`;

export const GifsContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 100px;

  li {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 5px;
    padding-bottom: 10px;

    div {
      background: #dcdcdc;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        border: none;
        background: #dcdcdc;
        padding: 0 20px 0 20px;
      }
      button:hover {
        background: #fff;
      }

      button:hover .details {
        border: none;
        background: #dcdcdc;
        padding: 0 20px 0 20px;
      }
    }
  }
  .gif:hover {
    opacity: 30%;
  }
`;
