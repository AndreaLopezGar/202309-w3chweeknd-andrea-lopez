import { Component } from './component';
import '../scss/footer.scss';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` 
    <footer>
    <div>
      <img src="./img/pokemon-logo.svg" alt="" width="130" height="100">
      </div>
      <p> <img class="pokeball-footer" src="./img/footer.jpg" alt="Pokeball" width="5" height="25"> </p>
    </footer>
    `;
  }
}
