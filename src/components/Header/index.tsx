import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <>
            <Link to="/">
              <div data-testid="header-testid" />
              Dashboard
            </Link>
            <Link to="/favorites">Meus favoritos</Link>
          </>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
