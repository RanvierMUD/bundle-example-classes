'use strict';

module.exports = [
  {
    name: 'mana',
    base: 100,
    formula: {
      requires: ['intellect'],
      fn: function (character, mana, intellect) {
        return mana + (intellect * 10);
      }
    },
  },
  { name: 'favor', base: 10 },
];
