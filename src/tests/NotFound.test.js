import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

test('Teste se tem o texto Page requested not found e a imagem', () => {
  renderWithRouter(<NotFound />);
  const texto = screen.getByRole('heading', { name: 'Page requested not found' });
  const imagem = screen.getByRole('img');
  const linkImagem = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(texto).toBeInTheDocument();
  expect(imagem).toHaveAttribute('src', linkImagem);
});
