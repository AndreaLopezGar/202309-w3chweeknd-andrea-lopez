import { Component } from './component';
import '../scss/header.scss';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<header class="header">
  <img class"image-class" src="./img/pokemon.logo.svg.jpg" alt="" width="250" height="250">   
  </header>`;
  }
}
