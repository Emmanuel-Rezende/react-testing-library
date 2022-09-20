import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

it('Testando os botoes de filtragem da Pokédex;:', () => {
  renderWithRouter(<App />);
  const botao = screen.getByRole('button', { name: /normal/i });
  const botaoTipos = screen.getAllByTestId('pokemon-type-button');
  const numero = 7;
  const botaoAll = screen.getByRole('button', { name: /all/i });
  expect(botao).toBeInTheDocument();
  expect(botaoTipos).toHaveLength(numero);
  expect(botaoAll).toBeInTheDocument();
  userEvent.click(botaoAll);
});
