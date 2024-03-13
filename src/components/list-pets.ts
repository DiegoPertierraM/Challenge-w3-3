type Pet = {
  img: string;
  id: number;
  name: string;
  breed: string;
  isAdopted: boolean;
};

const randomId = () => Math.trunc(Math.random() * 10 + 1);

export const listPets: Pet[] = [
  {
    img: '../../public/img/bulldog.jpg',
    id: randomId(),
    name: 'Toby',
    breed: 'Bulldog',
    isAdopted: false,
  },
  {
    img: '../../public/img/daschund.jpg',
    id: randomId(),
    name: 'Rufo',
    breed: 'Dachshund',
    isAdopted: false,
  },
  {
    img: '../../public/img/husky.jpg',
    id: randomId(),
    name: 'Roberto',
    breed: 'Syberian Husky',
    isAdopted: false,
  },
  {
    img: '../../public/img/orange.jpg',
    id: randomId(),
    name: 'Lucy',
    breed: 'Orange',
    isAdopted: false,
  },
  {
    img: '../../public/img/chihuahua.jpg',
    id: randomId(),
    name: 'Satan',
    breed: 'Chihuaha',
    isAdopted: false,
  },
];
