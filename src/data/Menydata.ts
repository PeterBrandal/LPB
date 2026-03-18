import caesarSalad from '../res/caesar_salad.jpg';
import fiskesuppe from '../res/fiskesuppe.jpg';
import rekmacka from '../res/rekmacka.jpg';
import kilen3 from '../res/kilen3.jpg';

export interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
}

const menu: MenuItem[] = [
  {
    id: 1,
    title: 'Lottas Burger',
    category: 'Lunsj',
    price: 269,
    img: kilen3,
    desc: 'Saftig hjemmelaget burger med lokale råvarer, sprøtt salat og håndskårne fritter.',
  },
  {
    id: 2,
    title: 'Fiskesuppe',
    category: 'Lunsj',
    price: 269,
    img: fiskesuppe,
    desc: 'Kremet fiskesuppe med dagens fangst fra Skagerrak, rotgrønnsaker og godt brød til.',
  },
  {
    id: 3,
    title: 'Rekesmørbrød',
    category: 'Lunsj',
    price: 169,
    img: rekmacka,
    desc: 'Klassisk rekesmørbrød med ferske reker, majones, sitron og dill på hjemmebakt brød.',
  },
  {
    id: 4,
    title: 'Caesar Salat',
    category: 'Lunsj',
    price: 219,
    img: caesarSalad,
    desc: 'Frisk Caesar-salat med sprøtt kyllingbryst, romano, parmesan og hjemmelaget dressing.',
  },
];

export default menu;
