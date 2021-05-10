export const CONFIG = {
  folder: 'dtt',
  title: 'Dota 2 heroes as magic cards I dunno'
};

export const PROMPTS = [
  {
    prompt: 'Abaddon',
    description: `Abaddon's signature spell makes him basically immortal, so this card's textbox started with a "{3}: ~ becomes indestructible until EoT. Tap ~.".
    I also wanted to incorporate as many of his abilities in this card, so I decided to make target any creature you control, so that it would recall his Aphotic shield as well.
    Then it struck me: if I make this target any creature, then I can also call back to his ability to disable enemies.
    Finally, I wanted to further incorporate his mastery over life and death by allowing Abaddon to influence your life total, so I gave him lifelink and made his
    ability have an additional cost.`
  },
  {
    prompt: 'Alchemist',
    description: `Alchemist is famous for being able to generate gold, so the first ability was there from the start. Initially, it used to create Gold tokens
    instead of treasures, but since Treasures do appear without flavour text in some mythics, I decided to go with them (remember the Orzhov Treasure token?).
    I also wanted an ability that worked in a similar way to his ultimate, buffing the creature. An X-cost ability felt like the perfect fit because it can
    scale with the Treasures created with his first ability.`
  },
  {
    prompt: 'Ancient Apparition',
    description: `This was a tricky one. Ancient Apparition's signature spell is probably his ultimate, but I couldn't find a way to recreate that in blue. Instead,
    I focused on his lore a bit more: Ancient Apparition wishes for all things to stop, for the whole universe to frozen, so I gave him a tap ability and an aura
    that enhances all your tap effects.`
  },
  {
    prompt: 'Anti-Mage',
    description: `Did you know DotA 2's Anti-Mage doesn't have a canon name yet? Wei also had such a beautiful artwork, I just had to go with her.
    The design of this card is pretty simple, but it feels very effective: DotA2's Anti-Mage burns mana when she hits you, my version taps lands,
    preventing you from accessing your mana. I wanted to give her some kind of evasiveness, to help her get in and activate his ability. Anti-Mage's weapon is
    a pair of blades, so I tried Double strike and I loved it: not only it makes her more difficult to block, but also allows you to procs her on-hit effect twice.`
  },
  {
    prompt: 'Arc Warden',
    description: `Arc Warden is famous for duplicating powerful items like Midas or (back in the days) Divine rapier. I wanted the card to show this aspect of
    the hero, so I made it capable of copying equipments. Arc Warden also creates a copy of itself, so I added that as well. In the end, this one is a bit weird:
    the effects are in blue's pie, but two things are not sitting right with me: one, the copies can create more copies, which can snowball pretty quickly if
    you have enough mana, and second you do keep the copies of the equip even after the copy of Arc Warden dies. Adding in extra clauses made this card even
    more difficult to read, so I decided to just keep this version.`
  }
];
