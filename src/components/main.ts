/* eslint-disable no-new */
import { Header } from './header';
import { Menu } from './menu';
import '../styles.css';
import { listPets } from './list-pets';
import { List } from './list';
import { Card } from './pet-card';

const title = 'Pet Adoption Website';

new Header('body', title);
new Menu('header');
new List('body');
listPets.forEach((pet) => {
  new Card('.pets-list', pet);
});
