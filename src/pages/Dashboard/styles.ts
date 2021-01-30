import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface HoverProps {
  hasHover: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  padding-bottom: 30px;
  input {
    flex: 1;
    height: 40px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: none;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 40px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
    }
  }
`;

export const GifsContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  li {
    list-style: none;
    padding-left: 5px;
  }
  .gif:hover {
    opacity: 30%;
  }
`;
