import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Component } from './component';

describe('Given the component Component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
    const appContainer = document.getElementById('app');
    new Component().render(appContainer); // Crea una instancia del componente y agrega su contenido al DOM
  });

  describe('When it is instantiated', () => {
    test('It should contain an element with role "button"', () => {
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument();
    });

    test('It should contain an element with role "textbox"', () => {
      const textboxElement = screen.getByRole('textbox');
      expect(textboxElement).toBeInTheDocument();
    });

    // Agrega más pruebas según las expectativas de tu componente
  });
});
