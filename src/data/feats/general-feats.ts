export const generalFeats = [
    {
        id: "battle-blessing",
        name: "Battle Blessing",
        categories: ["General Feats"],
        prerequisites: "Ability to cast 1st-level Champion spells",
        changes: `Ported from Dungeons & Dragons 3.5 Complete Champion Feats.`,
        markdownContent: `# Battle Blessing
*You can cast spells more quickly than usual in the heat of battle.*

**Prerequisites:** Ability to cast 1st-level Champion spells.

**Benefits:** You can cast most of your Champion spells faster than normal. If the spell normally requires a standard action, you can cast it as a swift action. If it normally requires a full round to cast, you can cast it as a standard action. Spells with longer or shorter casting times are not affected by this feat.`,
},
    {
        id: "deadly-dealer",
        name: "Deadly Dealer",
        categories: ["General Feats"],
        prerequisites: "Arcane Strike, Sleight of Hand 5 ranks",
        markdownContent: `# Deadly Dealer
*Your skill with handling a deck and your arcane talents allow you to turn mundane cards into weapons.*

**Prerequisites:** Arcane Strike, Sleight of Hand 5 ranks.

**Benefits:** You can throw a card as though it were a dart, with the same damage, range, and other features. You must use the Arcane Strike feat when throwing a card in this way, or else the card lacks the magical force and precision to deal lethal damage. A card is destroyed when thrown in this way.

Harrow cards are treated as masterwork weapons when thrown using this feat, but are still destroyed after they are thrown. A harrow deck can no longer be used as a fortune-telling device after even a single card is thrown.

A spellcaster with this feat can enhance a deck of cards as though it were a ranged weapon with 54 pieces of ammunition. This enhancement functions only when used in tandem with this feat, and has no affect on any other way the cards might be used.

Only a character who possesses this feat can use an enhanced deck of cards; she must still use the Arcane Strike feat to activate the cards’ enhancement.`,
},
{
    id: "deific-obedience",
    name: "Deific Obedience",
    categories: ["General Feats"],
    prerequisites: "Knowledge (religion) 3 ranks, must worship a deity.",
    changes: `Clarifies that characters without levels in evangelist, exalted, or sentinel choose one of those boon types upon first receiving a boon, and all subsequent boons follow that type. Gaining levels in a relevant prestige class replaces your chosen boon type with the appropriate one. Prestige classes still grant boons earlier than normal.`,
    markdownContent: `# Deific Obedience
*Your reverence for a deity is so great that daily prayer and minor sacrifices grant you special boons.*

**Prerequisites:** Knowledge (religion) 3 ranks, must worship a deity.

**Benefit:** Each deity requires a different daily obedience, but all obediences take no more than 1 hour per day to perform. Once you’ve performed the obedience, you gain the benefit of a special ability or resistance as indicated in the Obedience entry for the god to whom you performed the obedience.

If you have at least 12 Hit Dice, you also gain the first boon granted by your deity. When you first become eligible for this boon, choose one type of boon set: **evangelist**, **exalted**, or **sentinel**. All subsequent boons granted by this feat belong to the same category. If you later gain levels in the **evangelist**, **exalted**, or **sentinel** prestige classes, your boon type changes to match that class, replacing any previous boons with those appropriate to your new class.

If you have at least 16 Hit Dice, you also gain the second boon. If you have 20 Hit Dice or more, you also gain the third boon. Unless a specific duration or number of uses per day is listed, a boon’s effects are constant.

Characters with levels in the evangelist, exalted, or sentinel prestige classes gain access to their associated boons at lower levels as a benefit of those classes.

If you ever fail to perform a daily obedience, you lose all access to the benefits and boons granted by this feat until you next perform the obedience.`,
},
{
    id: "natural-spell",
    name: "Natural Spell",
    categories: ["General Feats"],
    prerequisites: "Ability to use any polymorph effect",
    changes: `Adjusted to work for all polymorph effects.`,
    markdownContent: `# Natural Spell
*You can cast spells even while in a form that cannot normally cast spells.*

**Prerequisites:** Ability to use any polymorph effect.

**Benefit:** You can complete the verbal and somatic components of spells while affected by a polymorph effect that changes you into a creature of the animal, dragon, elemental, magical beast, plant, or vermin type. You substitute various noises and gestures for the normal verbal and somatic components of a spell.

You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while you are in a form that could not ordinarily.`,
},
{
  id: "rebuke-undead",
  name: "Rebuke Undead",
  categories: ["General Feats"],
  prerequisites: "Channel Negative Energy class feature.",
  changes: "Command Undead renamed to Rebuke Undead, intended for parity with Turn Undead. Commanded Undead no longer permanent, but minutes per level to match the Control Undead spell limitations.",
  markdownContent: `# Rebuke Undead
*With a wave of malevolent divine energy, you assert control over the restless dead, cowing them into submission or forcing them to obey your will.*

**Prerequisites:** Channel Negative Energy class feature.

**Benefit:** You can, as a standard action, expend one use of your channel energy to rebuke all undead within 30 feet. Undead that fail a Will save (DC = 10 + ½ your effective channel level + your Charisma modifier) become rebuked for 1 minute. While rebuked, undead stand motionless, unable to take any actions. This condition ends immediately if the undead is attacked or targeted by a harmful spell or ability. Intelligent undead may attempt a new saving throw at the end of each of their turns; success ends the effect immediately.

In addition, you may assume control over any number of undead that failed their saving throws, so long as their combined Hit Dice do not exceed your effective channel level. These commanded undead cease to be rebuked and act normally on their next turn, following your commands as if affected by the control undead spell. This control lasts for 1 minute per effective channel level. If the total Hit Dice of your commanded undead ever exceed your effective channel level, any excess creatures immediately break free of your control and are no longer rebuked. Likewise, undead that regain their freedom after the duration ends cease to be rebuked.

If an undead creature is under the control of another creature, you must succeed at an opposed Charisma check to override their orders whenever they conflict.

This use of your channel energy does not deal damage or provide healing.`
},
{
    id: "reckless-fury",
    name: "Reckless Fury",
    categories: ["General Feats"],
    prerequisites: "Con 13, Rage ability",
    changes: `Ported from Dungeons & Dragons 3.5 Races of Stone Feats.`,
    markdownContent: `# Reckless Fury
*You are considered extreme even among other barbaric warriors, and you enter a deeper state of rage than others.*

**Prerequisites:** Con 13, Rage ability.

**Benefit:** Whenever you activate your rage ability, you can choose to enter a Reckless Rage. During a Reckless Rage, the morale bonuses to your Strength and Constitution increases by +2, but you take an additional -2 penalty to your Armor Class. These increases and penalties last until your Reckless Rage ends.

**Special:** If you have the variant rage class feature, you instead increase the bonus to melee attack rolls, melee damage rolls, thrown weapon damage rolls by 1 instead. Furthermore, you gain 1 additional temporary hitpoint per Hit Die. Finally, you take an additional -2 penalty to your Armor Class.`,
},
{
    id: "selective-channel",
    name: "Selective Channel",
    categories: ["General Feats"],
    prerequisites: "Cha 13, Channel energy class feature.",
    changes: `Now excludes all allies or enemies, depending on whether you channel to heal or harm.`,
    markdownContent: `# Selective Channel
*You can choose whom to affect when you channel energy.*

**Prerequisite:** Cha 13, channel energy class feature.

**Benefit:** When you positive channel energy to heal the living or channel negative energy to heal the undead, you do not affect enemies. When you channel positive energy to damage undead or channel negative energy to damage living, you do not affect allies.

**Normal:** All targets in a 30-foot burst are affected when you channel energy. You can only choose whether or not you are affected.`,
},
{
    id: "steadfast-determination",
    name: "Steadfast Determination",
    categories: ["General Feats"],
    prerequisites: "Endurance",
    changes: `Ported from Dungeons & Dragons 3.5 Player Handbook II Feats.`,
    markdownContent: `# Steadfast Determination
*Your physical durability allows you to shrug off attacks that would cripple a lesser person. Rather than depend on agility or willpower, you use your raw toughness to survive.*

**Prerequisites:** Endurance.

**Benefit:** You can use your Constitution modifier in place of your Wisdom modifier on Will saves. You do not automatically fail Fortitude saves on a roll of natural 1.`,
},
{
  id: "turn-undead",
  name: "Turn Undead",
  categories: ["General Feats"],
  prerequisites: "Channel Positive Energy class feature.",
  changes: `Now also roll your channel energy dice to determine the number of undead HD you can destroy outright. Only affects undead with HD equal to half or lower your channel energy level.`,
  markdownContent: `# Turn Undead

**Prerequisites:** Channel Positive Energy class feature.

**Benefit:** You can, as a standard action, expend one use of your channel energy to cause all undead within 30 feet of you to flee. Undead that fail a Will save (DC = 10 + ½ your effective channel level + your Charisma modifier) flee from you for 1 minute. Intelligent undead may attempt a new saving throw at the end of each of their turns; success ends the effect immediately. This movement provokes attacks of opportunity as normal.

In addition, when you use this ability, roll your channel energy damage dice (1d6 + 1d6 per two effective channel levels beyond 1st) to determine the total Hit Dice of undead you can destroy outright. Undead with the fewest HD are affected first. Only undead with Hit Dice equal to or less than half your effective channel level (minimum 1) can be destroyed this way.

This use of channel energy has no other effect (it does not heal or harm creatures).`
},
];
