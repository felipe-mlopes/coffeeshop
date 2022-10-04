import Expresso from '../assets/coffees/Expresso.svg'
import ExpressoAmericano from '../assets/coffees/Americano.svg'
import ExpressoCremoso from '../assets/coffees/Expresso_Cremoso.svg'
import CafeGelado from '../assets/coffees/Cafe_Gelado.svg'
import CafecomLeite from '../assets/coffees/Cafe_com_Leite.svg'
import Latte from '../assets/coffees/Latte.svg'
import Capuccino from '../assets/coffees/Capuccino.svg'
import Macchiato from '../assets/coffees/Macchiato.svg'
import Mochaccino from '../assets/coffees/Mochaccino.svg'
import ChocolateQuente from '../assets/coffees/Chocolate_Quente.svg'
import Cubano from '../assets/coffees/Cubano.svg'
import Havaiano from '../assets/coffees/Havaiano.svg'
import Arabe from '../assets/coffees/Arabe.svg'
import Irlandes from '../assets/coffees/Irlandes.svg'

export const data = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    image: Expresso,
    tags: ['tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: 2,
    name: 'Expresso Americano',
    image: ExpressoAmericano,
    tags: ['tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.90
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    image: ExpressoCremoso,
    tags: ['tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    image: CafeGelado,
    tags: ['tradicional', 'gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.90
  },
  {
    id: 5,
    name: 'Café com Leite',
    image: CafecomLeite,
    tags: ['tradicional', 'com leite'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90
  },
  {
    id: 6,
    name: 'Latte',
    image: Latte,
    tags: ['tradicional', 'com leite'],
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.90
  },
  {
    id: 7,
    name: 'Capuccino',
    image: Capuccino,
    tags: ['tradicional', 'com leite'],
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.90
  },
  {
    id: 8,
    name: 'Macchiato',
    image: Macchiato,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.90
  },
  {
    id: 9,
    name: 'Mochaccino',
    image: Mochaccino,
    tags: ['tradicional', 'com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.90
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    image: ChocolateQuente,
    tags: ['especial', 'com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.90
  },
  {
    id: 11,
    name: 'Cubano',
    image: Cubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.90
  },
  {
    id: 12,
    name: 'Havaiano',
    image: Havaiano,
    tags: ['especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.90
  },
  {
    id: 13,
    name: 'Árabe',
    image: Arabe,
    tags: ['especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.90
  },
  {
    id: 14,
    name: 'Irlandês',
    image: Irlandes,
    tags: ['especial', 'alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.90
  }
];