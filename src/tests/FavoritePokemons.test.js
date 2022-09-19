import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

test(
  'Exibir No favorite pokemon found, caso a pessoa não tenha pokémons favoritos',
  () => {
    renderWithRouter(<FavoritePokemons />);
    const texto = screen.getByText('No favorite pokemon found');
    expect(texto).toBeInTheDocument();
  },
);
