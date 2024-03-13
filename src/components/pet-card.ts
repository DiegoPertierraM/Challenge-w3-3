import { Component } from './component';
import './pet-card.css';

export class Card extends Component {
  pet: object;
  constructor(selector: string, pet: object) {
    super(selector);
    this.pet = pet;
    this.render();
  }

  render(): void {
    this.template = this.createTemplate();
    super.render();
  }

  selectPetData = (pet: any) => `
    <li><img src="${pet.img}" width="150"></li>
    <li><strong>Id</strong>: ${pet.id}</li>
    <li><strong>Name</strong>: ${pet.name}</li>
    <li><strong>Breed</strong>: ${pet.breed}</li>
    <li><strong>Adopted</strong>: ${pet.isAdopted}</li>
    `;

  createTemplate() {
    const item = this.pet;
    return `
    <ul class="pet">
      <div class="card">
        ${this.selectPetData(item)}
      </div>
    </ul>
    `;
  }
}
