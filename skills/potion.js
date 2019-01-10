'use strict';

const { Broadcast, Heal, SkillType } = require('ranvier');

/**
 * Health potion item spell
 */
module.exports = {
  name: 'Potion',
  type: SkillType.SPELL,
  requiresTarget: true,
  targetSelf: true,

  run: state => function (args, player) {
    const stat = this.options.stat || 'health';
    const amount = Math.round(player.getMaxAttribute('health') * (this.options.restores / 100));
    const heal = new Heal(stat, amount, player, this);

    Broadcast.sayAt(player, `<bold>You drink the potion and a warm feeling fills your body.</bold>`);
    heal.commit(player);
  },

  info: function (player) {
    return `Restores <b>${this.options.restores}%</b> of your total ${this.options.stat}.`;
  }
};
