import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import axios from 'axios';
import api from '../../services/api';
import { Container } from './styles';

interface ParamsGif {
  gif: string;
}

interface DetailsGif {
  title: string;
  username: string;
  trending_datetime: string;
}

const Details: React.FC = () => {
  const [gif, setGif] = useState('');

  const { params } = useRouteMatch<ParamsGif>();

  useEffect(() => {
    axios
      .get('https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif')
      .then(response => {
        setGif(response.data);
      });
  }, [params.gif]);

  return (
    <>
      <img src="https://media1.giphy.com/media/cZ7rmKfFYOvYI/200.gif" alt="" />
    </>
  );
};

export default Details;
