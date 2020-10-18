'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Truths', [
      {
        "id": 1,
        truth: 'May the force be with you',
        argument: 'The force is and should be with us all, especially those who reside effortlessly within its natural currents.',
        tags: 'Star Wars, Jedi, Blessing',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        "id": 2,
        truth: 'Never tell me the odds',
        argument: 'Knowing the odds beforehand can hinder performance, and possibly effect the outcome, all the way down to the quantum level.',
        tags: 'Star Wars, Superstition, Space Pirate Code',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        "id": 3,
        truth: `If it's your job to eat a frog, eat it first thing in the morning.  If it's your job to eat two frogs, eat the big one first.`,
        argument: 'Getting the hard work out of the way first is superior to the alternative because it reduces anxiety and the potential for dread.',
        tags: 'Good advice, American Literature, Work Ethic',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        "id": 4,
        truth: `The world won't be destroyed by those who do evil, but by those who watch them without doing anything`,
        argument: 'People have an innate right and freedom to choose for themselves whether to be bad or good, whether to do bad or good.  And the universe is not shy or embarrassed about dealing out losing hands anytime, anywhere, and to anyone.  So reliably preventing bad things from happening seems to be impossible.  Our only hope in combatting such things rests in the hope that the majority of the population are good people who will fight back against evil, so that the forces of good may ultimately prevail.',
        tags: 'Genius, Physicist, Dystopian Regret, Accountability, Responsibility',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
      {
        "id": 5,
        truth: 'People say nothing is impossible, but I do nothing every day',
        argument: 'That which is, is also the opposite of its opposite. The act of not doing is also an act of doing not.',
        tags: 'Cartoons, Simple Wisdom, Language Paradox, Zen Koan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
