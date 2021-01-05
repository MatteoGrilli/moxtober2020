import { Prompt } from '../model/prompt.model';

export const WIP_PROMPTS = [
  {
    prompt: 'Harvest',
    matt: {
      description: [
        "When I saw this prompt I knew I wanted it to be a Scarecrow, so I looked up existing effects for the tribe and... it wasn't great. Scarecrows are kinda all over the place, really. But! Giving you lands felt like something that could fit this prompt, so I went with that. The limit of once per turn allows this to cost 4 mana and hit the field early in the game!",
      ],
      bullshit: [
        'Crows in the artwork: 46',
        '(ok, maybe 45, one is kinda debatable)',
      ],
    },
    albi: {
      description: [
        'What says "Harvest" better than crops? And what says crops fields better than Lands? I wanted to represent the idea of seasons cycles by making the land produce colorless mana only when not cultivated and making it produce more and more mana with each passing season, while crops grow. At the end of harvest season, the cycle restart again.',
      ],
      bullshit: [
        'Farmers fed: 5',
        'Seeds planted: many',
        'Scarecrows needed: just this guy on the left',
      ],
    },
  },
  {
    prompt: 'Curio',
    matt: {
      description: [
        "We subconsciously both agreed on the curio being some kind of low-cost artifact. I wanted something that made you wonder what could be inside, but having the artifact enter the battlefield just to be sacrificed didn' really work. I needed an effect that you wanted to use for some time, but not for the whole game, and making this a mana rock felt perfect.",
      ],
      bullshit: [
        'Exiled card: the combo piece you are missing',
        'Opponent removes it while tapped: definitely',
      ],
    },
    albi: {
      description: [
        "This one was inspired by the duplicating goblet scene from Harry Potter, with a hint of gambling. I liked the idea of a self-replicating little trinket that really serves no purpose by itself, but that could be used in combos or to fulfill another card's requirements. For flavor, this cursed coin is capable of doubling your wealth or... crushing it to nothing.",
      ],
      bullshit: [
        'Total flips won globally: yes',
        'Average coins created per flip: 0.5',
        "Currently existing copies: let's say... 7",
      ],
    },
  },
  {
    prompt: 'Binding',
    matt: {
      description: [
        'I went with the idea of having two players play a game of tug-of-war. This kind of design can be very dangerous, as the player building the deck around the card has the obvious advantage. To alleviate this problem I used a general trigger (something that both players still do plenty anyway) and an effect that gives the players a bit of freedom (ironically).',
      ],
      bullshit: ['players affected: 2', 'with panharmonicon: up to 4'],
    },
    albi: {
      description: [
        "This guy traps other creatures using his demonic hooks, incapacitating them until he's got hold onto them and eventually forcing them to fight as his minions, for a cost. Given his ability to take control of other creatures I didn't want him to be able to stick around for too long on the battlefield, that's why the toughness in range for burn spells.",
      ],
      bullshit: [
        'Hands: 2',
        'Chains: 2',
        'Hooks: 2',
        "Oh, yeah, it's all coming together",
      ],
    },
  },
  {
    prompt: 'Smog',
    matt: {
      description: [
        'At the right rate, negative anthems can be terrifying, shutting down most aggressive boards in an instant. This started out as an enchantment, but it felt too uninteractive. The small body allows the opponent some freedom, as decks that tipically fear this effect can easily deal 2 damage to a creature. Except maybe white weenies.',
      ],
      bullshit: [
        'Other negative anthems:',
        'Kaervek, the Spiteful',
        "Night of Souls' betrayal",
      ],
    },
    albi: {
      description: [
        'I admit this is not one of the most interesting cards, but I wanted to make a Wurm creature and SMOG was the only theme that kinda inspired me in that sense. This big boy emits toxic gases affecting every creature that gets near enough to inhale it. These gases are also great Fungi, which start growing at a much higher rate on any substrate, usually corpses.',
      ],
      bullshit: ["Massacre Wurm's long lost cusin"],
    },
  },
  {
    prompt: 'Cynic',
    matt: {
      description: [
        'So, this card wanted you to take a demon from your graveyard and summon it for an opponent. Ideally, they suffer the negative ETB, get to use the demon for one attack and after that, you get it back. Unfortunately, even big demons have... fair ETBs. Possibly because they do it the other way around: first get the splashy effect, then try to cheat the cost. Classic black.',
      ],
      bullshit: [
        'Worst synergy: Trecherous Pit-Dweller',
        'Best synergy: Trecherous Pit-Dweller',
      ],
    },
    albi: {
      description: [
        'While designing this, I wanted to focus on the feeling of suspicion that comes from looking at the opponent\'s untapped two last island. You know what I\'m referring to. I wanted the endstep trigger to describe that "Ha ha! I knew it!" moment where you force the enchanted opponent to discard the very counter you knew they were holding.',
      ],
      bullshit: ['ok, before your endstep, I tap all my lands', '... Oh.'],
    },
  },
  {
    prompt: 'Lance',
    matt: {
      description: [
        'Didn\'t want to make an equipment, but I still wanted to make something that synergized with equipments. I started from "a combat trick that makes your creature impale the enemy" and ended up with liking the idea of calling back to another famous equipment (at least in standard).',
      ],
      bullshit: ['Turns a Short Sword into an Embercleave'],
    },
    albi: {
      description: [
        "I don't usually like equipments and I'm not really that excited about this card either. It's just my own twist on Embercleave, but for angels. The effect of this card came from the image, that I found while browsing ArtStation, looking for inspiration. The result is an artifact that is pretty heavy in every deck but an Angel tribal or a commander.",
      ],
    },
  },
  {
    prompt: 'Mithril',
    matt: {
      description: [
        "I wondered how little an effect like this can cost. Making this both an artifact and an enchantment makes this more susceptible to removal, though I feel that even at 3 mana, an artifact like this would break no format. The flavour text here was me trying to sneak in a reference to a possible planeswalker card that I couldn't fit. Maybe next year?",
      ],
      bullshit: [
        'Plane 1: Theros',
        'Plane 2: Mirrodin',
        'Language in the runes: Sindarin',
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Rider',
    matt: {
      description: [
        "The rider grants his ability to the mount and vice versa! To be fair, giving a dragon vigilance is quite strong in limited. On the flip side, tapping a big flyer to make a small flyer doesn't work as well. But hey, you don't need an actual flying dragon!",
      ],
      bullshit: [
        'Can ride a dragon egg: yes',
        'Can ride a wyvern: no',
        'Can ride Bolas: ( ͡° ͜ʖ ͡°)',
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Tyrant',
    matt: {
      description: [
        `I decided to picture a tyrant as someone who abuses his power to suppress opposition.
        The restriction on the activated ability is there to prevent you from spamming it: it sure is easy to
        ammass tokens, but there are multiple ways to easily keep them in check. It also makes the ability feel
        like it's there to protect your status as the monarch, which feels in flavour.`,
      ],
      bullshit: [
        'Best friends with Kaervek, the Spiteful',
        'Has a pet massacre wurm',
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Brew',
    matt: {
      description: [
        `I knew I wanted this to be a modal card. I first found the artwork, so I wanted to make it a Rakshasa, which is in Sultai. Then I looked
        for an effect for each color that could serve a different purpose: +2/+2 makes an evasive creature big, while menace
        makes a big creature elusive. Blue is the weirder, but I loved the reference to Crazed Alchemist in Hearthstone.`,
      ],
      bullshit: ['Also sells funnel cakes'],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Pact',
    matt: {
      description: [
        `The idea was to create a demon that granted you its power, but in exchange got something back when you died. Bestow felt like a perfect fit, mechanically.
        I don't quite remember where the idea of stealing the creature's identity came from, but it looked quite the unique twist on bestow.`,
      ],
      bullshit: [
        '"What will it cost?"',
        '"You just gestured to all of me"'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Fortune',
    matt: {
      description: [
        `This card has you play a simple minigame in which you can push your luck to get more cards. Of course, you are encouraged to
        put this in a deck with low-cost spells. As a bonus, it removes all lands you find on top, since they cost 0. Thinking back, I feel like the cost might
        be a bit too low: in an aggressive deck, this could easily net you 2-3 nonland cards for 3 mana.`,
      ],
      bullshit: [
        'Ironically works best with careful planning'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Dread',
    matt: {
      description: [
        `I'm not great with storytelling, so I'll just explain it here: The flavour text hints at sirens being able to erase bad dreams, so the creature
        first falls asleep (taps). But instead of removing just that one bad thought you wanted to delete (exile a card), the siren instead wipes your
        entire mind (exile all). This effect is not worth a card, though, so you get one back.`,
      ],
      bullshit: [
        'never trust sirens',
        'even if you did, you wouldn\'t remember'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Firstborn',
    matt: {
      description: [
        `Another card that was more flavour than mechanic. The beautiful artwork represents Edgar Markov discovering the curse of vampirism. The card stemmed
        from it, but I fear that the end result is a bit too clunky: it has a restriction on your creature, and a rider with a second restriction that you
        can't really control. And it costs four.`,
      ],
      bullshit: [
        'would have been better to just swallow it whole'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Tale',
    matt: {
      description: [
        `It's double faced! After the unknown adventurer returns with a big catch he gets paid handsomely and becomes rich. The transform
        condition feels appropriate in green, but the Gold token is a ramp tool more fit for other colors, like white. Still, green does create
        Gold tokens occasionally (The First Iroan Games). All in all, it feels solid at uncommon.`,
      ],
      bullshit: [
        'one gold doesn\'t make you rich',
        'not even legendary'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Eclipse',
    matt: {
      description: [
        `My first thought went to Moonmist. Then to morph. Then to Ixidron. While writing the flavour text, I came up with the idea of an eclipse that
        makes every creature look the same, hence the second part of the effect. The wording comes from Scrambleverse. At 4 mana this could possibly be
        a very strong control tool for those decks that don't play creatures.`,
      ],
      bullshit: [
        'ally: colorless 2/2',
        'enemy: colorless 2/2',
        'best counter against the morph meta'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Blasphemy',
    matt: {
      description: [
        `I feel like this is my weakest design. I wanted a spell that could be used to sacrifice a God, but I couldn't really put together the card.
        There really is no incentive to sacrifice a God here. Instead you are heavily encouraged to sacrifice something minor, like a Cartouche,
        or something negative, like Demonic Pact.`,
      ],
      bullshit: [
        'Demonic Pact: not a God',
        'Cartouche of Zeal: not a God',
        'Cannot sacrifice Rhonas',
        'Not likely to sacrifice Heliod'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Charm',
    matt: {
      description: [
        `Catherine started out as the 'I want to make someone monarch' card. In some way, I wanted her to be able to influence the monarch to profit you.
        What can an advisor do? Well, a lot actually. What if I gave the player more than one choice? Modal effects are also known as charms, so that felt
        perfect for the prompt. Finally, I just needed the effects.`,
      ],
      bullshit: [
        'Should have ordered the effects by color',
        'W casts Silence',
        'U casts Counterspell',
        'R casts Shunt'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Spectre',
    matt: {
      description: [
        `Spectres in Magic usually do one of two things when they hit face: discard cards from the hand or exile them from the top of the library.
        I wanted to add a third option that felt in line by removing cards from a different zone: the graveyard. This effect felt Orzhov, so I placed
        it in those colors, and added a small white rider that followed the flavour (feeding = gaining life).`,
      ],
      bullshit: [
        'Sorceries have souls too, didn\'t you know?'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Bludgeon',
    matt: {
      description: [
        `A simple common that sinergizes with equipments. The 'as long as ~ is equipped' effect is almost exclusive to white. Red has 4 creatures
        that benefit from being equipped, and they all do it in a different way. Trample seems a good fit: it allows the creature to get some damage
        through even if it's blocked, which definitely feels like a red equipment payoff.`,
      ],
      bullshit: [
        'Don\'t listen to the flavour text',
        'Give him a Colossus Hammer'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Postmortem',
    matt: {
      description: [
        `Vis is a Lich that keeps his victims on brink of death to drain them of their energy. The starting point was 'keep an opponent alive'. The
        following question was, of course, 'but why?'. In a multiplayer setting, you give an opponent some more time alive so maybe they can harm
        you other opponents. In 1v1, you get a drain effect and an overstatted body.`,
      ],
      bullshit: [
        'Learned from Demons in Grixis'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Trinket',
    matt: {
      description: [
        `Though at first sight this could feel a little too specific, there is a format in which this card could be very relevant: Commander.
        It's not difficult to snatch a mana rock on turn two with this. At worst, this can be used later to get plenty of other goodies: Skullclamp,
        Ashnod's Altar, Lightning Greaves, Strionic Resonator and more.`,
      ],
      bullshit: [
        'Shortest flavour text',
        'Steal Stonecoil Serpent',
        'X = 24'
      ],
    },
    albi: { description: '' },
  },
  {
    prompt: 'Rakish',
    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Etching',
    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Flaunt',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Obfuscate',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Chitinous',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Meat',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Anxiety',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Brink',

    matt: { description: '' },
    albi: { description: '' },
  },
  {
    prompt: 'Punchline',

    matt: { description: '' },
    albi: { description: '' },
  },
];

export const PROMPTS: Prompt[] = [];

WIP_PROMPTS.forEach((p: any, i) => {
  p.matt.image = '/assets/cards/matt_' + (i + 1) + '.png';
  p.albi.image = '/assets/cards/albi_' + (i + 1) + '.png';
  PROMPTS.push(p);
});
(WIP_PROMPTS.find((p) => p.prompt === 'Tale') as any).matt.image2 =
  '/assets/cards/matt_15b.png';
