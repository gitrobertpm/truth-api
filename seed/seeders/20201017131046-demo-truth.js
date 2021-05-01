'use strict';

const { users } = require('../uuids');
const { truths } = require('../uuids');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Truths', [
      {
        id: truths[0],
        truth: 'May the force be with you.',
        argument: 'The force is and should be with us all, especially those who reside effortlessly within its natural currents.',
        tags: 'Star Wars, Jedi, Blessing',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[0]
      },
      {
        id: truths[1],
        truth: 'Never tell me the odds.',
        argument: 'Knowing the odds beforehand can hinder performance, and possibly effect the outcome, all the way down to the quantum level.',
        tags: 'Star Wars, Superstition, Space Pirate Code',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[1]
      },
      {
        id: truths[2],
        truth: `If it's your job to eat a frog, eat it first thing in the morning.  If it's your job to eat two frogs, eat the big one first.`,
        argument: 'Getting the hard work out of the way first is superior to the alternative because it reduces anxiety and dread, and promotes progress and accomplishment.',
        tags: 'Good advice, American Literature, Work Ethic',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[2]
      },
      {
        id: truths[3],
        truth: `The world won't be destroyed by those who do evil, but by those who watch them without doing anything.`,
        argument: 'Our only hope is for good people to fight back against evil, so that the forces of good may ultimately prevail.  Bad things will happen regardless.  The universe is not shy or embarrassed or thrifty when it comes to dealing out suffering and a losing hand anytime, anywhere, and to anyone.  So we rely on people being good and avoiding bad to prevent any bad that may be avoided.  ',
        tags: 'Genius, Physicist, Dystopian Regret, Accountability, Responsibility',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[3]
      },
      {
        id: truths[4],
        truth: 'People say nothing is impossible, but I do nothing every day.',
        argument: 'That which is, is also the opposite of its opposite. So the act of not doing is also an act of doing not.',
        tags: 'Cartoons, Simple Wisdom, Language Paradox, Zen Koan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[4]
      },
      {
        id: truths[5],
        truth: 'Happiness is the absence of the striving for happiness.',
        argument: 'You cannot fully possess a thing while you are still in search of that thing. Those who have happiness have not the need to seek it out. So cease the search for happiness and it is yours for the owning.',
        tags: 'Taoism, Ancient Wisdom, Eastern Wisdom, Good advice',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[5]
      },
      {
        id: truths[6],
        truth: `At the end of the day people won't remember what you said or did, they will remember how you made them feel.`,
        argument: `Of course people may remember your words or actions, but more than that, they will remember whether they felt good or bad when in your presence. If your effect results in others feeling good, then they will remember you fondly, regardless of what you say or do, and you will be desirable in their measurement. On the other hand, if your effect made them feel bad, then they are likely to avoid you like anything that makes people feel bad, like a cold, or guilt, or unnecessary work that interrupts play or sleep.`,
        tags: 'Poetry, Sociology, Old Schools Wisdom, Good advice',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[6]
      },
      {
        id: truths[7],
        truth: `The world is moved along not just by the mighty shoves of its heroes, but by the aggregate of the tiny pushes of each honest worker.  So while it's normal to want to accomplish great things, we should each strive to accomplish small things as though there were great and noble.`,
        argument: `See the final line of Walt Whitman's [O me! O Life](https://www.poetryfoundation.org/poems/51568/o-me-o-life)!`,
        tags: 'Sociology, Humanity, Value, Miracle, Brilliance, Wisdom, Genius',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[7]
      },
      {
        id: truths[8],
        truth: `The unexamined life is not worth living.`,
        argument: `Some say that if a tree falls in the forest, and no one is there to hear it, it may not make a sound.  Well, obviously that is ridiculous.  Plenty of events have occurred without anyone there to see them.  Otherwise, the tidal wave of the cosmos would not have been able to form, and we would not be here to observe it.  But all those unobserved events feel kind of sad in a way, like a silent movie flickering in an empty theater.  Moreover, what success is likely to be found in a life that goes largely unexamined?  Consider the card player who sits at the table and places large bets without an agile knowledge of the game.  How shall they fare compared to the sharp, who knows the odds and the math and the poetry of the game?  Not knowing how to play the game of life can get you killed.  Conversely, an intimate understanding that can only come from close examination can give life just the advantage it needs to truly flourish and shine.`,
        tags: 'Philosophy, Ancient Wisdom, Greeks Philosopher',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[8]
      },
      {
        id: truths[9],
        truth: `No one can make you feel inferior without your consent.`,
        argument: "Over the course of a life, one inevitably generates lists of that which makes one happy, or sad, or angry, etc.  Likewise, lists are generated containing those we listen to or those whose opinions matter.  Normally, such lists are created by subconscious processes. But lucky mortals as we are, we can pull the creation and curation of those lists out of the subconscious and directly into the realm of the conscious mind.  Additionally, we don't have control over what others say or do.  But we do control how we listen, interpret and respond.",
        tags: 'Strength, Equality, Self Worth',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[9]
      },
      {
        id: truths[10],
        truth: `The smoker you drink, the player you get.`,
        argument: `No argument necessary. 😎`,
        tags: 'Classic Rock, Party Wisdom, Drunken Slogan',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: users[10]
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Truths', null, {});
  }
};
