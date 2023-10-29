// eslint-disable-next-line no-unused-vars
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given header component', () => {
  describe('When we instance', () => {
    document.body.innerHTML = '<div></div>';
    const header = new Header('div');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });
  });
});
