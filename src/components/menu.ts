import { Component } from './component';

export class Menu extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    const menuOptions = [
      {
        path: 'index.html',
        label: 'Home',
      },
      {
        path: 'pets.html',
        label: 'Pets',
      },
    ];

    return `
    <nav>
      <ul>
        ${menuOptions
          .map(
            (option) => `<li><a href="${option.path}">${option.label}</a></li>`
          )
          .join('')}
      </ul>
    </nav>
    `;
  }
}
