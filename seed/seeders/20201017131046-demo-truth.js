'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Truths', [
      {
        id: 1,
        truth: 'May the force be with you.',
        argument: 'The force is and should be with us all, especially those who reside effortlessly within its natural currents.',
        tags: 'Star Wars, Jedi, Blessing',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1
      },
      {
        id: 2,
        truth: 'Never tell me the odds.',
        argument: 'Knowing the odds beforehand can hinder performance, and possibly effect the outcome, all the way down to the quantum level.',
        tags: 'Star Wars, Superstition, Space Pirate Code',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2
      },
      {
        id: 3,
        truth: `If it's your job to eat a frog, eat it first thing in the morning.  If it's your job to eat two frogs, eat the big one first.`,
        argument: 'Getting the hard work out of the way first is superior to the alternative because it reduces anxiety and the potential for dread.',
        tags: 'Good advice, American Literature, Work Ethic',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3
      },
      {
        id: 4,
        truth: `The world won't be destroyed by those who do evil, but by those who watch them without doing anything.`,
        argument: 'People have an innate right and freedom to choose for themselves whether to be bad or good, whether to do bad or good.  And the universe is not shy or embarrassed about dealing out losing hands anytime, anywhere, and to anyone.  So reliably preventing bad things from happening seems to be impossible.  Our only hope in combatting such things rests in the hope that the majority of the population are good people who will fight back against evil, so that the forces of good may ultimately prevail.',
        tags: 'Genius, Physicist, Dystopian Regret, Accountability, Responsibility',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 4
      },
      {
        id: 5,
        truth: 'People say nothing is impossible, but I do nothing every day.',
        argument: 'That which is, is also the opposite of its opposite. The act of not doing is also an act of doing not.',
        tags: 'Cartoons, Simple Wisdom, Language Paradox, Zen Koan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 5
      },
      {
        id: 6,
        truth: 'Happiness is the absence of the striving for happiness.',
        argument: 'You cannot fully possess a thing while you are still in search of said thing. Those who have happiness have not the need to seek it out. So cease the search for happiness and it is yours for the owning.',
        tags: 'Taoism, Ancient Wisdom, Eastern Wisdom, Good advice',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 6
      },
      {
        id: 7,
        truth: `At the end of the day people won't remember what you said or did, they will remember how you made them feel.`,
        argument: `Of course people may remember your words or actions, but more than that, they will remember whether they felt good or bad when you were present. If your presence and contributions result in others feeling good, then they will remember you fondly, regardless of what you say or do, and you will be a desired asset to them. On the other hand, if they your presence and contributions made them feel bad, then you are a pariah or anathema to them.`,
        tags: 'Poetry, Sociology, Old Schools Wisdom, Good advice',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 7
      },
      {
        id: 8,
        truth: `The world is moved along not just by the mighty shoves of its heroes, but by the aggregate of the tiny pushes of each honest worker.  So while it's normal to want to accomplish great things, we should each strive to accomplish small things as though there were great and noble.`,
        argument: `See the final line of Walt Whitman's O me! O Life!`,
        tags: 'Sociology, Humanity, Value, Miracle, Brilliance, Wisdom, Genius',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 8
      },
      {
        id: 9,
        truth: `The unexamined life is not worth living.`,
        argument: `Some say that if a tree falls in the forest, and no one is there to here it, it may not make a sound. Well, what about a life that farts into existence, resolves its own momentum, and blips out without ever being noticed? Would that make a sound? Would that be worth the effort it took to conceive it?`,
        tags: 'Philosophy, Ancient Wisdom, Greeks Philosopher',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 9
      },
      {
        id: 10,
        truth: `No one can make you feel inferior without your consent.`,
        argument: `Over the course of a life, one generates lists of that which makes one happy, or sad, or angry, etc.  Even generated are lists of those we listen to or who's opinions matter. Normally, those lists are created by subconscious processes. But lucky mortals we are, we can pull the creation and curation of those lists out of the subconscious and directly into the realm of the conscious mind.`,
        tags: 'Strength, Equality, Self Worth',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 10
      },
      {
        id: 11,
        truth: `The smoker you drink, the player you get.`,
        argument: `No argument necessary. 😎`,
        tags: 'Classic Rock, Party Wisdom, Drunken Slogan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 11
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Truths', null, {});
  }
};
