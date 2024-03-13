/* eslint-disable no-new */
import { Header } from './components/header';
import { Menu } from './components/menu';
import './styles.css';

const title = 'Pet Adoption Website';

new Header('body', title);
new Menu('header');
