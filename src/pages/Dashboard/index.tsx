import React, { useState, FormEvent } from 'react';
import { Container, Form } from './styles';
import api from '../../services/api';

interface Gif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const Dashboard: React.FC = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [search, setSearch] = useState('');

  async function handleSearch(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      const results = await api.get('/search', {
        params: {
          api_key: 'crCvOcvLJWQMQJJyZEEZJdl21spihQXe',
          q: `${search}`,
        },
      });
      setGifs(results.data.data);
    } catch (err) {
      console.log('error');
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Pesquise um tema"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <div>
        {gifs.map((gif: Gif) => (
          <li key={gif.id}>
            <img src={gif.images.fixed_height.url} alt="" />
            <span>{gif.title}</span>
          </li>
        ))}
      </div>
    </Container>
  );
};

export default Dashboard;
