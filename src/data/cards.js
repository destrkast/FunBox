export default [
  {
    id: 1,
    isAvailable: true,
    name: 'Нямушка',
    taste: 'с фуа-гра',
    description: 'Сказочное заморское яство',
    features: [
      {
        highlightedText: '10',
        text: 'порций',
      },
      {
        text: 'мышь в подарок',
      },
    ],
    weight: {
      value: '0,5',
      unit: 'кг',
    },
    footerText: {
      selected: 'Печень утки разварная с артишоками.',
      disabled: 'Печалька, с фуа-гра закончился.',
    },
  },
  {
    id: 2,
    isAvailable: true,
    name: 'Нямушка',
    taste: 'с рыбой',
    description: 'Сказочное заморское яство',
    features: [
      {
        highlightedText: '40',
        text: 'порций',
      },
      {
        highlightedText: '2',
        text: 'мыши в подарок',
      },
    ],
    weight: {
      value: '2',
      unit: 'кг',
    },
    footerText: {
      selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
      disabled: 'Печалька, с рыбой закончился.',
    },
  },
  {
    id: 3,
    isAvailable: false,
    name: 'Нямушка',
    taste: 'с курой',
    description: 'Сказочное заморское яство',
    features: [
      {
        highlightedText: '100',
        text: 'порций',
      },
      {
        highlightedText: '5',
        text: 'мышей в подарок',
      },
      {
        text: 'заказчик доволен',
      },
    ],
    weight: {
      value: '5',
      unit: 'кг',
    },
    footerText: {
      selected: 'Филе из цыплят с трюфелями в бульоне.',
      disabled: 'Печалька, с курой закончился.',
    },
  },
];
