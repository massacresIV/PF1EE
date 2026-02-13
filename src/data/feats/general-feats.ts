export const generalFeats = [
{
    id: "channel-surge",
    name: "Channel Surge",
    categories: ["General Feats"],
    prerequisites: "Channel energy or Fervor class feature",
    changes: "Adjusted language for class changes. Now usable by Warpriests.",
    markdownContent: `# Channel Surge
*You can amplify the power of your channel energy or fervor.*

**Prerequisites:** Channel energy or Fervor class feature.

**Benefit:** When you channel energy or use fervor, you may expend two uses of the ability as a full-round action to increase the amount of healing or damage you do by +50%.`
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
    id: "disciple-of-the-sword",
    name: "Disciple of the Sword",
    categories: ["General Feats"],
    prerequisites: "Weapon Focus (heavy blades); champion 4th level, cleric 4th level, or inquisitor 4th level; worshiper of Iomedae.",
    changes: `Added Champion and Warpriest. Lowered level requirement from 4th to 3rd. Adjusted the feat to only work for longswords despite EitR changes to Weapon Focus & Weapon Specialization.`,
    markdownContent: `# Disciple of the Sword
*Your dedication to mastering Iomedae’s favored weapon puts other to shame.*

**Prerequisites:** Weapon Focus (heavy blades); champion 4th level, cleric 4th level, or inquisitor 4th level; worshiper of Iomedae.

**Benefit:** **Benefit:** You gain the benefits of Weapon Specialization (heavy blades), but only when wielding a longsword. In addition, you may treat your champion, cleric, inquisitor, or warpriest levels as fighter levels for the purpose of qualifying for Greater Weapon Focus (heavy blades) and Greater Weapon Specialization (heavy blades); however, these feats apply only when you wield a longsword. You may also use this feat in place of Weapon Specialization (heavy blades) to qualify for Greater Weapon Specialization (heavy blades).`,
},
{
    id: "extra-channel",
    name: "Extra Channel",
    categories: ["General Feats"],
    prerequisites: "Channel Energy class feature",
    changes: "Adjusted language for class changes.",
    markdownContent: `# Extra Channel
*You can use your channel energy ability more often.*

**Prerequisites:** Channel Energy class feature.

**Benefit:** You can use your Channel Energy ability two additional times per day.

**Special:** If a character with the Fervor class feature and the ability to Channel Energy takes this feat, they gain four additional uses of Fervor per day, but these can only be used to channel energy.`
},
{
    id: "extra-fervor",
    name: "Extra Fervor",
    categories: ["General Feats"],
    prerequisites: "Fervor class feature",
    changes: "Renamed from Extra Lay on Hands. Can now be taken by Warpriests.",
    markdownContent: `# Extra Fervor
*You can use your fervor ability more often.*

**Prerequisites:** Fervor class feature.

**Benefit:** You can use your fervor ability two additional times per day.

**Special:** You can gain Extra Fervor multiple times. Its effects stack.`
},
{
    id: "fervent-restoration",
    name: "Fervent Restoration",
    categories: ["General Feats"],
    prerequisites: "Fervor class feature",
    changes: "Renamed from Reward of Life due to themes. Now usable by Warpriests. Now applies when healing via negative energy.",
    markdownContent: `# Fervent Restoration
*When you use fervour to heal a creature, you are also healed.*

**Prerequisites:** Fervor class feature.

**Benefit:** Each time you use your Fervor ability to heal a creature other than yourself, you heal additional hit points equal to the ability score modifier used by your Fervor class feature. This applies whether the Fervor is used to heal living creatures or undead via positive or negative energy. This ability has no effect if you use Fervor to deal damage to any creature.`
},
{
    id: "greater-mercy",
    name: "Greater Mercy",
    categories: ["General Feats"],
    prerequisites: "Charisma 13, Fervor class feature, Mercy class feature",
    changes: "Adjusted language for class changes.",
    markdownContent: `# Greater Mercy
*Your Fervor healing is enhanced when no conditions are present on the target.*

**Prerequisites:** Charisma 13, Fervor class feature, Mercy class feature.

**Benefit:** When you use your Fervor ability to heal damage on a target that can benefit from your Mercies, and the target has no conditions your Mercies can remove, it instead heals an additional +1d6 points of damage.`
},
{
    id: "hellknight-obedience",
    name: "Hellknight Obedience",
    categories: ["General Feats"],
    prerequisites: "Knowledge (planes) 3 ranks, must swear allegiance to a single Hellknight order.",
    changes: `Added fast-tracking boon acquisition through prestige class levels, matching the rates of the deific obedience prestige class counter parts.`,
    markdownContent: `# Hellknight Obedience
*Performing daily Hellknight reckonings grants you special boons.*

**Prerequisites:** Knowledge (planes) 3 ranks, must swear allegiance to a single Hellknight order.

**Benefit:** Upon taking this feat, you gain proficiency in all of your Hellknight order’s favored weapons. Additionally, by meditating and inflicting strenuous reckonings upon yourself, you unlock the power behind your order’s doctrine. Each Hellknight order has its own unique reckoning—a trial of obedience and pain. When coupled with the necessary reflection and meditation, this reckoning takes 1 hour per day to perform. Once you have performed your order’s reckoning, you gain the benefit of a special ability as indicated in the Reckoning entry for the Hellknight order to which you’ve sworn allegiance.

If you have at least 12 Hit Dice, you also gain the first boon granted by the Hellknight order.

If you have at least 16 Hit Dice, you also gain the Hellknight order’s second boon. If you have 20 Hit Dice or more, you also gain the Hellknight order’s third boon. Unless a specific duration or number of uses per day is listed in a boon’s description, the boon’s effects are constant.

If you have levels in the Hellknight or Hellknight Signifer prestige classes, each level you possess in either prestige class counts as 1 1/3 Hit Dice plus a base of 3 for the purpose of determining when you gain your boons. These effective Hit Dice are added to any other Hit Dice from other classes to determine your total Hit Dice for boon progression.

If you ever fail to perform a daily reckoning, you lose all access to the benefits and boons granted by this feat until you next perform the reckoning.

You can take this feat only if you are associated with a Hellknight order, whether you’re in training to become a Hellknight, already a member, or otherwise aligned with the order—the specifics are left to you and the GM to determine. Once per year, you can change your Hellknight allegiance, but doing so requires the approval of the Hellknight order you wish to join. If you are ever cast out of the Hellknight order to which you’ve sworn allegiance, you lose the benefits of this feat until you restore yourself in the Hellknights’ esteem. The details of this are left to the GM’s discretion.

## Reckonings
Similar to an ascetic’s flagellations or a champion’s atonement, Hellknight reckonings are rites of mortification a Hellknight uses to focus her mind, excise unwanted thoughts, and bring herself closer to the champion of law her order idealizes. A reckoning is typically a personal matter, performed in private by a willing, unarmored Hellknight while she meditates on some aspect of the Measure and the Chain.

Hellknights are assumed to police their own thoughts and perform reckonings as necessary. If a Hellknight doesn’t regularly perform reckonings as part of her scheduled meditations, she doesn’t lose any abilities or suffer negative effects—however, she might be censured by her fellow Hellknights if they learn of this dereliction.

**Performing a Reckoning:** Performing the physical component of a reckoning typically takes 10 minutes and deals 1d4 points of nonlethal damage. A particularly righteous or conflicted Hellknight might choose to perform a longer, more extreme version of a reckoning. In this case, the reckoning deals 1d4 additional points of lethal damage. A devoted Hellknight with the Hellknight Obedience feat can undergo an hour-long nonlethal reckoning to gain the benefit of a special ability, in addition to boons available for those with 12, 16, or 20 Hit Dice. See the major Hellknight orders for descriptions of their specific reckonings and the boons these provide. Additionally, Hellknights with the Hellknight Obsession feat who choose to deal the lethal damage to themselves can access a suite of beneficial effects. The damage a reckoning deals cannot be reduced by any damage reduction or other ability or effect.`,
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

This use of your channel energy does not deal damage or provide healing.

**Special:** If an undead creature fails its saving throw but is already affected by another creature’s Turn Undead or Rebuke Undead ability, you must succeed at an opposed Charisma check against the original source to impose your effect. On a success, your effect replaces the existing one. On a failure, your effect does not take hold.`
},
{
    id: "reactive-healing",
    name: "Reactive Healing",
    categories: ["General Feats"],
    prerequisites: "Quick Channel or Quicken Spell; Channel Energy or Fervor class feature",
    changes: "Adjusted language for class changes.",
    markdownContent: `# Reactive Healing
*You can channel healing energy in response to an attack that would knock you unconscious.*

**Prerequisites:** Quick Channel or Quicken Spell; Channel Energy or Fervor class feature.

**Benefit:** When damage from an attack or effect would reduce you to 0 or fewer hit points, you can expend one use of channel energy (of a form that would heal you) or fervor (of a form that would heal you) as an immediate action to heal yourself. This healing affects only you, even if the ability would normally affect other creatures.`
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

This use of channel energy has no other effect (it does not heal or harm creatures).

**Special:** If an undead creature fails its saving throw but is already affected by another creature’s Turn Undead or Rebuke Undead ability, you must succeed at an opposed Charisma check against the original source to impose your effect. On a success, your effect replaces the existing one. On a failure, your effect does not take hold.`
},
{
    id: "ultimate-mercy",
    name: "Ultimate Mercy",
    categories: ["General Feats"],
    prerequisites: "Charisma 19, Greater Mercy, Fervor class feature, Mercy class feature",
    changes: "Adjusted language for class changes.",
    markdownContent: `# Ultimate Mercy
*You can channel your Fervor to restore life to the dead.*

**Prerequisites:** Charisma 19, Greater Mercy, Fervor class feature, Mercy class feature.

**Benefit:** You can expend 10 uses of your Fervor ability to bring a single dead creature you touch back to life, functioning as the raise dead spell. The caster level for this effect is equal to your Champion level. You must provide the material component for raise dead, or choose to accept 1 temporary negative level; this level automatically disappears after 24 hours and cannot be overcome or removed in any way except by waiting for the duration to expire.`
},
{
    id: "word-of-healing",
    name: "Word of Healing",
    categories: ["General Feats"],
    prerequisites: "Fervor class feature",
    changes: "Now usable by Warpriests.",
    markdownContent: `# Word of Healing
*You can channel your Fervor to heal allies at a distance.*

**Prerequisites:** Fervor class feature.

**Benefit:** You can use your Fervor ability to heal another creature at a range of 30 feet as a standard action that does not provoke attacks of opportunity. You must be able to speak and have a free hand to use this ability. The target heals half the amount they would have received from a use of Fervor, provided the creature would normally be healed by your Fervor. Additionally, the creature also gains the benefits of any Mercies you may possess as normal.`
},
{
    id: "zealous-charge",
    name: "Zealous Charge",
    categories: ["General Feats"],
    prerequisites: "Fervor class feature",
    changes: "Renamed from Radiant Charge. Now lets you choose how many fervor charges to expend rather than all. Now usable by Warpriests.",
    markdownContent: `# Zealous Charge
*You can infuse your charge attacks with divine energy from your Fervor.*

**Prerequisites:** Fervor class feature.

**Benefit:** When you hit with a charge attack, you can expend any number of remaining uses of your Fervor ability to deal extra damage equal to 1d6 per use of Fervor expended, plus the ability score modifier used by your Fervor class feature. This damage is divine in nature and is not reduced by damage reduction, energy immunities, or energy resistances. You may choose how many uses of Fervor to expend for this effect.`
},
{
    id: "zealous-might",
    name: "Zealous Might",
    categories: ["General Feats"],
    prerequisites: "Fervor class feature",
    changes: "Renamed from Reward of Gracee. Now grants either a Sacred or Profane bonus depending on positive/negative channelling. Now usable by Warpriests.",
    markdownContent: `# Zealous Might
*You gain a bonus to attack rolls when using your Fervor ability.*

**Prerequisites:** Fervor class feature.

**Benefit:** Each time you use your Fervor ability, you gain a +1 sacred or profane bonus on all attack rolls for 1 round. The type of bonus matches the energy you channel with Fervor: sacred if your Fervor channels positive energy, or profane if your Fervor channels negative energy.`
}
];
