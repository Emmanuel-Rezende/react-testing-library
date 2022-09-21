import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

it('Testando o componente Pokemon', () => {
  renderWithRouter(<App />);
  const imgPika = screen.getByRole('img', { name: /pikachu sprite/i });
  const tipoPoke = screen.getByTestId('pokemon-type', { name: /Electric/i }).innerHTML;
  const maisDetalhes = screen.getByRole('link', { name: /more details/i });
  expect(imgPika).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(imgPika).toHaveAttribute('alt', 'Pikachu sprite');
  expect(tipoPoke).toBe('Electric');
  userEvent.click(maisDetalhes);
  const favoritar = screen.getByLabelText(/pokémon favoritado?/i);
  userEvent.click(favoritar);
  const imgFavorito = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
  expect(imgFavorito).toBeInTheDocument();
  expect(imgFavorito).toHaveAttribute('src', '/star-icon.svg');
});
