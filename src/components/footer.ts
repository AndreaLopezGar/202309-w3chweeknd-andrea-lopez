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
  <img class"image-class" src="./img/pokemon.logo.svg.jpg" alt="" width="250" height="250">   
      </div>
S    </footer>
    `;
  }
}
