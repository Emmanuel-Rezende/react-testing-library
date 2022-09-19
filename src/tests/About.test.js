import React from 'react';
import { screen } from '@testing-library/react';
import About from '../pages/About';
import renderWithRouter from '../renderWithRouter';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const texto = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
  const imagem = screen.getByRole('img');
  const linkImagem = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  expect(texto).toBeInTheDocument();
  expect(imagem).toHaveAttribute('src', linkImagem);
});
