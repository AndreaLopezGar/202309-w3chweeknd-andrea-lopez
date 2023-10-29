/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
export abstract class Component {
  template!: string;
  element!: Element;
  constructor(public selector: string) {}

  render(position: InsertPosition = 'beforeend') {
    const parentElement = document.querySelector(this.selector);
    if (!parentElement) throw new Error('Incorrect selector 🧨');
    parentElement.insertAdjacentHTML(position, this.template);
    this.element = parentElement.lastElementChild!;
  }

  clear() {
    if (!this.element) return;
    this.element.outerHTML = '';
  }
}
