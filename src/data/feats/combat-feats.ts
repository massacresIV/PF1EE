export const combatFeats = [
{
    id: "acrobatic-spellcaster",
    name: "Acrobatic Spellcaster",
    categories: ["Combat Feats"],
    prerequisites: "Combat Casting",
    changes: "Removed Skill Focus prerequisite. New Combat Trick.",
    markdownContent: `# Acrobatic Spellcaster
*Your skillful movements prevent foes from disrupting your spells.*

**Prerequisites:** Combat Casting.

**Benefit:** When you succeed at an Acrobatics check to move through a threatened square without provoking attacks of opportunity or to move through an enemy’s space, creatures denied attacks of opportunity by your Acrobatics check also cannot make attacks of opportunity against you when you cast spells for the remainder of your turn.

**Normal:** Casting a spell within an enemy’s reach provokes attacks of opportunity even after you succeed at an Acrobatics check to move through a threatened square.

## Combat Trick
When attempting an Acrobatics check to move through threatened squares, you can spend up to 5 stamina points to gain a bonus on that check equal to the number of stamina points you spent.`
},
{
    id: "agile-combatant",
    name: "Agile Combatant",
    categories: ["Combat Feats"],
    markdownContent: `# Agile Combatant
*You’ve learned to use your quickness in place of brute force when performing combat maneuvers.*

**Benefit:** You add your Dexterity bonus to your base attack bonus and size bonus when determining your Combat Maneuver Bonus (CMB) instead of your Strength bonus.

**Normal:** You add your Strength bonus to your base attack bonus and size bonus when determining your CMB.

**Special:** With or without this feat, when you are using a finesse weapon, you may use your Dexterity bonus in place of your Strength bonus when attempting a disarm, sunder, or trip maneuver.

This feat also allows you to add your Dexterity bonus in place of your Strength bonus when attempting a bull rush, grapple, hamstring, or overrun maneuver.

## Combat Trick
You can spend a number of stamina points equal to your Dexterity bonus while attempting combat maneuver checks. For every 2 stamina points that you spend in this way, you are considered to be one size category larger than your actual size when determining whether you can affect a target creature with your combat maneuver and when calculating your size bonus for that check.`
},
{
    id: "anticipate-dodge",
    name: "Anticipate Dodge",
    categories: ["Combat Feats"],
    prerequisites: "Dodge; Base Attack Bonus +6, Brawler level 4th, or Monk level 4th.",
    changes: "Lowered BAB prerequisite by 1.",
    markdownContent: `# Anticipate Dodge
*Your knowledge of mobility and your attack prowess allow you to thwart elusive opponents.*

**Prerequisites:** Dodge; Base Attack Bonus +6, Brawler level 4th, or Monk level 4th.

**Benefit:** You automatically know whether a creature you can see has a dodge bonus to its AC. You gain up to a +2 bonus on attack rolls against a target that has a dodge bonus. This bonus cannot exceed the dodge bonus of the creature you attack.

## Combat Trick
You can spend 1 stamina point to increase the maximum bonus from Anticipate Dodge by 2 (this is still limited by the creature’s dodge bonus, however).`
},
{
    id: "arcane-strike",
    name: "Arcane Strike",
    categories: ["Combat Feats"],
    prerequisites: "Ability to cast arcane spells",
    markdownContent: `# Arcane Strike
*You draw upon your arcane power to enhance your weapons with magical energy.*

**Prerequisites:** Ability to cast arcane spells.

**Benefit:** As a swift action, you can imbue your weapons with a fraction of your power. For 1 round, your weapons deal +1 damage and are treated as magic for the purpose of overcoming damage reduction. 

For every five caster levels you possess, this bonus increases by +1, to a maximum of +5 at 20th level.

## Combat Trick

You can spend any number of stamina points to increase the duration of this feat’s effects by 1 round for each stamina point spent.`
},
{
    id: "arcane-armor-training",
    name: "Arcane Armor Training",
    categories: ["Combat Feats"],
    prerequisites: "Light Armor Proficiency, ability to cast arcane spells",
    changes: "No longer requires an action to use. Reduction increased from 10% to 15%.",
    markdownContent: `# Arcane Armor Training
*You have learned how to cast spells while wearing armor.*

**Prerequisites:** Light Armor Proficiency, ability to cast arcane spells.

**Benefit:** You reduce the arcane spell failure chance due to the armor you are wearing by 15% for any spells you cast.`
},
{
    id: "arcane-armor-mastery",
    name: "Arcane Armor Mastery",
    categories: ["Combat Feats"],
    prerequisites: "Arcane Armor Training, Medium Armor Proficiency, ability to cast arcane spells",
    changes: "No longer requires an action to use. Reduction increased from 20% to 25%.",
    markdownContent: `# Arcane Armor Training
*You have mastered the ability to cast spells while wearing armor.*

**Prerequisites:** Arcane Armor Training, Medium Armor Proficiency, ability to cast arcane spells.

**Benefit:** You reduce the arcane spell failure chance due to the armor you are wearing by 25% for any spells you cast. This bonus replaces, and does not stack with, the bonus granted by Arcane Armor Training.`
},
{
    id: "armor-focus",
    name: "Armor Focus",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +1, proficiency with selected armor type.",
    changes: "Now applies to all armors of a particular type, rather than a single armor.",
    markdownContent: `# Armor Focus
*Your familiarity with a specific type of armor increases the amount of protection you receive from it.*

**Prerequisites:** Base attack bonus +1, proficiency with selected armor type.

**Benefit:** Select one type of armor, such as light, medium, or heavy. The AC bonus granted by the selected armor type increases by 1.

**Special:** You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new type of armor. The Armor Focus feat counts as the armor training class feature for the purpose of armor mastery feat prerequisites and determines what types of armor you can use with armor mastery feats.`
},
{
    id: "barroom-brawler",
    name: "Barroom Brawler",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +4.",
    changes: "",
    markdownContent: `# Barroom Brawler
*You have learned how to mimic the combat tricks and forms of others.*

**Prerequisites:** Base attack bonus +4.

**Benefit:** Once per day as a Move Action, you can gain the benefit of a combat feat that you do not possess for 1 minute. You must otherwise meet the feat’s requirements.

**Special:** If you have the Martial Flexibility class feature, this feat instead grants you one additional use per day of that ability.

## Combat Trick
You can spend 5 stamina points to use this feat as a Swift Action instead of a Move Action. If you have the Martial Flexibility class feature, you can spend 5 stamina points to use that class feature as a Swift Action instead of a Move Action, or as a Free Action instead of a Swift Action.`
},
{
    id: "bleeding-critical",
    name: "Bleeding Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +11",
    markdownContent: `# Bleeding Critical
*Your critical hits cause opponents to bleed profusely.*

**Prerequisites:** Critical Focus, base attack bonus +11.

**Benefit:** Whenever you score a critical hit with a slashing or piercing weapon, your opponent takes 2d6 points of bleed damage each round on their turn, in addition to the damage dealt by the critical hit. Bleed damage can be stopped by a DC 15 Heal check or through any magical healing. The effects of this feat stack.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "blind-fight",
    name: "Blind-Fight",
    categories: ["Combat Feats"],
    markdownContent: `# Blind-Fight
*You are skilled at attacking opponents that you cannot clearly perceive.*

**Benefit:** In melee, every time you miss because of concealment (see Combat), you can reroll your miss chance percentile roll one time to see if you actually hit.
An invisible attacker gets no advantages related to hitting you in melee. That is, you don't lose your Dexterity bonus to Armor Class, and the attacker doesn't get the usual +2 bonus for being invisible. The invisible attacker's bonuses do still apply for ranged attacks, however.
You do not need to make Acrobatics skill checks to move at full speed while blinded.

**Normal:** Regular attack roll modifiers for invisible attackers trying to hit you apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility also applies.

**Special:** The Blind-Fight feat is of no use against a character who is the subject of a blink spell.

## Combat Trick

Once per round, when you hit a creature that benefits from concealment, you can spend 2 stamina points to ignore the miss chance from that creature’s concealment until the end of your next turn.`
},
{
    id: "blinding-critical",
    name: "Blinding Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +15",
    markdownContent: `# Blinding Critical
*Your critical hits blind your opponents.*

**Prerequisites:** Critical Focus, base attack bonus +15.

**Benefit:** Whenever you score a critical hit, your opponent is permanently blinded. A successful Fortitude save reduces this to dazzled for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on creatures that do not rely on eyes for sight or creatures with more than two eyes (although multiple critical hits might cause blindness, at the GM’s discretion). Blindness can be cured by heal, regeneration, remove blindness, or similar abilities.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "catch-off-guard",
    name: "Catch Off-Guard",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, Dex 13",
    markdownContent: `# Catch Off-Guard
*Foes are surprised by your skilled use of unorthodox and improvised weapons.*

**Prerequisites:** Unarmed Combatant, Dex 13

**Benefit:** You do not suffer any penalties for using an improvised weapon. Unarmed opponents are flat-footed against any attacks you make with an improvised weapon. You receive a +1 circumstance bonus on attack rolls made with thrown splash weapons.

**Normal:** You take a –4 penalty on attack rolls made with an improvised weapon.

## Combat Trick

When making an attack with an improvised weapon against an armed opponent, you can spend 5 stamina points. If you do, the target is considered flat-footed during that attack. An opponent who recognizes you and has seen you use Catch Off-Guard in this way is immune to this effect.`
},
{
    id: "channel-smite",
    name: "Channel Smite",
    categories: ["Combat Feats"],
    prerequisites: "Channel energy class feature",
    markdownContent: `# Channel Smite
*You can channel your divine energy through a melee weapon you wield.*

**Prerequisites:** Channel energy class feature.

**Benefit:** Before you make a melee attack roll, you can choose to spend one use of your channel energy ability as a swift action. If you channel positive energy and hit an undead creature, that creature takes an amount of additional damage equal to the damage dealt by your channel positive energy ability. If you channel negative energy and hit a living creature, that creature takes an amount of additional damage equal to the damage dealt by your channel negative energy ability. Your target can make a Will save, as normal, to halve this additional damage. If your attack misses, the channel energy ability is still expended with no effect.

## Combat Trick

When making an attack using this feat, you can spend a number of stamina points up to the number of dice in your channel energy. For each stamina point you spend in this way, add an additional 1d6 points of positive or negative energy damage to your Channel Smite attack. This damage is also halved if the target succeeds at its Will save against the Channel Smite attack.`
},
{
    id: "combat-reflexes",
    name: "Combat Reflexes",
    categories: ["Combat Feats"],
    markdownContent: `# Combat Reflexes
*You can make additional attacks of opportunity.*

**Benefit:** You may make a number of additional attacks of opportunity per round equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat-footed.

**Normal:** Without this feat, you can make only one attack of opportunity per round and cannot make attacks of opportunity while flat-footed.

**Special:** Combat Reflexes does not allow a rogue to use her opportunist ability more than once per round.`
},
{
    id: "cleave",
    name: "Cleave",
    categories: ["Combat Feats"],
    prerequisites: "Str 13, base attack bonus +1",
    changes: "Removed adjacency restriction.",
    markdownContent: `# Cleave
*You can strike two foes with a single swing, continuing your momentum into a second target.*

**Prerequisites:** Str 13, base attack bonus +1.

**Benefit:** As a standard action, you can make a single attack at your full base attack bonus against a creature within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against another creature within reach.

You can only make one additional attack per round with this feat. When you use this feat, you take a -2 penalty to your Armor Class until your next turn.`
},
{
    id: "critical-focus",
    name: "Critical Focus",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +9",
    markdownContent: `# Critical Focus
*You are trained in the art of causing pain.*

**Prerequisites:** Base attack bonus +9.

**Benefit:** You receive a +4 circumstance bonus on attack rolls made to confirm critical hits.`
},
{
    id: "critical-mastery",
    name: "Critical Mastery",
    categories: ["Combat Feats"],
    prerequisites: "Critical Focus, any two critical feats, 14th-level fighter",
    markdownContent: `# Critical Mastery
*Your critical hits cause two additional effects.*

**Prerequisites:** Critical Focus, any two critical feats, 14th-level fighter.

**Benefit:** When you score a critical hit, you can apply the effects of two critical feats in addition to the damage dealt.

**Normal:** You can only apply the effects of one critical feat to a given critical hit in addition to the damage dealt.`
},
{
    id: "crusaders-fist",
    name: "Crusader's Fist",
    categories: ["Combat Feats"],
    prerequisites: "Fervor class feature, Unarmed Combatant, base attack bonus +6",
    changes: "Adjusted for EitR and Champion class.",
    markdownContent: `# Crusader's Fist
*You pour divine energy into the enemy you strike.*

**Prerequisites:** Fervor class feature, Unarmed Combatant, base attack bonus +6.

**Benefit:** When you attack with an unarmed strike and hit a creature that you can harm with your fervor ability, you can use a Swift Action to expend a daily use of fervor to deal its normal damage as if you had hit with fervor's normal touch attack. This extra damage is not multiplied on a critical hit.

## Combat Trick
When you use Crusader’s Fist and confirm a critical hit, you can spend 5 stamina points to multiply the extra damage for that critical hit.`
},
{
    id: "dazzling-display",
    name: "Dazzling Display",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus",
    markdownContent: `# Dazzling Display
*Your skill with your favored weapon can frighten enemies.*

**Prerequisite:** Weapon Focus.

**Benefit:** While wielding a weapon from the group in which you have Weapon Focus, you can perform a bewildering show of prowess as a full-round action. Make an Intimidate check to demoralize all foes within 30 feet who can see your display.`
},
{
    id: "deadly-stroke",
    name: "Deadly Stroke",
    categories: ["Combat Feats"],
    prerequisites: "Dazzling Display, Greater Weapon Focus, Shatter Defenses, base attack bonus +11",
    markdownContent: `# Deadly Stroke
*With a well-placed strike, you can bring a swift and painful end to most foes.*

**Prerequisites:** Dazzling Display, Greater Weapon Focus, Shatter Defenses, base attack bonus +11.

**Benefit:** As a standard action, make a single attack with a weapon from the group in which you have Greater Weapon Focus against a stunned or flat-footed opponent. If you hit, you deal double the normal damage and the target takes 1 point of Constitution bleed (see Conditions). The additional damage and bleed is not multiplied on a critical hit.`
},
{
    id: "deafening-critical",
    name: "Deafening Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +13",
    markdownContent: `# Deafening Critical
*Your critical hits cause enemies to lose their hearing.*

**Prerequisites:** Critical Focus, base attack bonus +13.

**Benefit:** Whenever you score a critical hit against an opponent, the victim is permanently deafened. A successful Fortitude save reduces the deafness to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. This feat has no effect on deaf creatures. This deafness can be cured by heal, regeneration, remove deafness, or a similar ability.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "defensive-combat-training",
    name: "Defensive Combat Training",
    categories: ["Combat Feats"],
    markdownContent: `# Defensive Combat Training
*You excel at defending yourself from all manner of combat maneuvers.*

**Benefit:** You treat your total Hit Dice as your base attack bonus when calculating your Combat Maneuver Defense (see Combat).`
},
{
    id: "deflect-arrows",
    name: "Deflect Arrows",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Unarmed Combatant or Shield Focus.",
    markdownContent: `# Deflect Arrows
*You can knock arrows and other projectiles off course, preventing them from hitting you.*

**Prerequisites:** Dex 13, Unarmed Combatant or Shield Focus.

**Benefit:** Once per round when you would normally be hit with an attack from a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not flat-footed. Attempting to deflect a ranged attack doesn’t count as an action. Unusually massive ranged weapons (such as boulders or ballista bolts) and ranged attacks generated by natural attacks or spell effects can’t be deflected.  
You must have at least one hand free and holding nothing (Unarmed Combatant) or a shield in one of your hands (Shield Focus) to use this feat.`
},
{
    id: "deft-maneuvers",
    name: "Deft Maneuvers",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13",
    changes: "Corrected feat description to include all intended maneuver types.",
    markdownContent: `# Deft Maneuvers
*You are skilled in a variety of dextrous combat maneuvers.*

**Prerequisites:** Dex 13.

**Benefit:** You do not provoke an attack of opportunity when performing a dirty trick, disarm, reposition, steal, or trip combat maneuver. In addition, you receive a +2 bonus on checks with these combat maneuvers. You can make a Bluff check to feint in combat as a move action. You also receive a +2 bonus to your Combat Maneuver Defense against these combat maneuvers.

**Normal:** You provoke an attack of opportunity when performing these combat maneuvers. Feinting in combat is a standard action.`
},
{
    id: "dodge",
    name: "Dodge",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13",
    changes: `Merged Dodge & Mobility Combat Tricks.`,
    markdownContent: `# Dodge
*Your training and reflexes allow you to react swiftly to avoid an opponent’s attacks.*

**Prerequisite:** Dex 13.

**Benefit:** You gain a +1 dodge bonus to your AC. This bonus increases to +5 against attacks of opportunity caused when you move out of or within a threatened tile. A condition that makes you lose your Dex bonus to AC also makes you lose the benefits of this feat.

## Combat Trick
When you move your speed or farther, you can spend a number of stamina points up to double your Dexterity bonus. If you do, until the start of your next turn, you gain an increase to the dodge bonus granted by the Dodge feat equal to half the number of stamina points you spent. This dodge bonus is doubled against attacks of opportunity provoked by movement.`,    
},
{
    id: "disruptive",
    name: "Disruptive",
    categories: ["Combat Feats"],
    prerequisites: "6th-level fighter",
    markdownContent: `# Disruptive
*Your training makes it difficult for enemy spellcasters to safely cast spells near you.*

**Prerequisites:** 6th-level fighter.

**Benefit:** The DC to cast spells defensively increases by +4 for all enemies that are within your threatened area. This increase to casting spells defensively only applies if you are aware of the enemy’s location and are capable of taking an attack of opportunity. If you can only take one attack of opportunity per round and have already used that attack, this increase does not apply.`
},
{
    id: "double-slice",
    name: "Double Slice",
    categories: ["Combat Feats"],
    prerequisites: "Str 15 or Dex 15, Two-Weapon Fighting",
    changes: "Now requires either Strength or Dexterity.",
    markdownContent: `# Double Slice
*Your off-hand weapon while dual-wielding strikes with greater power.*

**Prerequisites:** Str 15 or Dex 15, Two-Weapon Fighting.

**Benefit:** Add your Strength bonus to damage rolls made with your off-hand weapon.

**Normal:** You normally add only half of your Strength modifier to damage rolls made with a weapon wielded in your off-hand.`
},
{
    id: "drunken-brawler",
    name: "Drunken Brawler",
    categories: ["Combat Feats"],
    prerequisites: "Great Fortitude.",
    changes: "Prerequisite changed from Endurance to Great Fortitude and removed deity restriction. In line with other alcohol-themed feats. Added Combat Trick.",
    markdownContent: `# Drunken Brawler
*You have learned how to fight effectively while drunk.*

**Prerequisites:** Great Fortitude.

**Benefit:** When you drink an alcoholic beverage, you take a –2 penalty on Reflex saving throws, but gain a number of temporary hit points equal to your character level, and gain a +2 alchemical bonus on Fortitude and Will saving throws. These bonuses last 1 hour or until the temporary hit points gained by this effect are lost, whichever occurs first. Regardless, the penalty lasts for a full hour.

## Combat Trick
When drinking an alcoholic beverage to use this feat, you can spend 5 stamina points to double the amount of temporary hit points you receive.`
},
{
    id: "exhausting-critical",
    name: "Exhausting Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, Tiring Critical, base attack bonus +15",
    markdownContent: `# Exhausting Critical
*Your critical hits cause opponents to become exhausted.*

**Prerequisites:** Critical Focus, Tiring Critical, base attack bonus +15.

**Benefit:** When you score a critical hit on a foe, your target immediately becomes exhausted. This feat has no effect on exhausted creatures.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess the Critical Mastery feat.`
},
{
    id: "far-shot",
    name: "Far Shot",
    categories: ["Combat Feats"],
    prerequisites: "Precise Shot",
    markdownContent: `# Far Shot
*You are more accurate at longer ranges.*

**Prerequisites:** Precise Shot.

**Benefit:** You only suffer a -1 penalty per full range increment between you and your target when using a ranged weapon.

**Normal:** You suffer a -2 penalty per full range increment between you and your target.`
},
{
    id: "gang-up",
    name: "Gang Up",
    categories: ["Combat Feats"],
    prerequisites: "",
    changes: "Removed old Combat Expertise INT prerequisites.",
    markdownContent: `# Gang Up
*You are adept at using greater numbers against foes.*

**Prerequisites:** None.

**Benefit:** You are considered to be flanking an opponent if at least two of your allies are threatening that opponent, regardless of your actual positioning.

**Normal:** You must be positioned opposite an ally to flank an opponent.`
},
{
    id: "gorgons-fist",
    name: "Gorgon's Fist",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, Scorpion Stance, base attack bonus +6",
    markdownContent: `# Gorgon's Fist
*With one well-placed blow, you leave your target reeling.*

**Prerequisites:** Unarmed Combatant, Scorpion Stance, base attack bonus +6.

**Benefit:** As a standard action, make a single unarmed melee attack against a foe who is either entangled or prone. If the attack hits, you deal damage normally and the target is flat-footed until the end of your next turn unless it makes a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier).`
},
{
    id: "great-cleave",
    name: "Great Cleave",
    categories: ["Combat Feats"],
    prerequisites: "Str 13, Cleave, base attack bonus +4",
    changes: "Removed adjacency restriction to match updated Cleave targeting.",
    markdownContent: `# Great Cleave
*You can strike down a host of nearby foes in a single sweeping motion.*

**Prerequisites:** Str 13, Cleave, base attack bonus +4.

**Benefit:** As a standard action, you can make a single attack at your full base attack bonus against a creature within reach. If you hit, you deal damage normally and can make an additional attack (using your full base attack bonus) against another creature within reach. If that attack also hits, you can continue to make additional attacks against other creatures, as long as each new target is within your reach.

You cannot attack the same creature more than once during this attack action. When you use this feat, you take a -2 penalty to your Armor Class until your next turn.`
},
{
    id: "great-hatred",
    name: "Great Hatred",
    categories: ["Combat Feats"],
    prerequisites: "Hatred racial trait",
    changes: "Removed racial restriction, adjusted language to trigger with Hatred style, now applies on all attacks.",
    markdownContent: `# Great Hatred
*Your rage burns with vast intensity.*

**Prerequisites:** Hatred racial trait.

**Benefit:** Your bonus on attack rolls against targets of your hatred racial trait increases by 1.`
},
{
    id: "greater-bull-rush",
    name: "Greater Bull Rush",
    categories: ["Combat Feats"],
    prerequisites: "Powerful Maneuvers, base attack bonus +6, Str 13",
    markdownContent: `# Greater Bull Rush
*Your bull rush attacks throw enemies off balance.*

**Prerequisites:** Powerful Maneuvers, base attack bonus +6, Str 13.

**Benefit:** You receive a +2 bonus on checks made to bull rush a foe. This bonus stacks with the bonus granted by Powerful Maneuvers. Whenever you bull rush an opponent, his movement provokes attacks of opportunity from all of your allies (but not you).

**Normal:** Creatures moved by bull rush do not provoke attacks of opportunity.`
},
{
    id: "greater-disarm",
    name: "Greater Disarm",
    categories: ["Combat Feats"],
    prerequisites: "Deft Maneuvers, base attack bonus +6, Dex 13",
    markdownContent: `# Greater Disarm
*You can knock weapons far from an enemy’s grasp.*

**Prerequisites:** Deft Maneuvers, base attack bonus +6, Dex 13.

**Benefit:** You receive a +2 bonus on combat maneuver checks made to disarm a foe. This bonus stacks with the bonus granted by Deft Maneuvers. Whenever you successfully disarm an opponent, the weapon lands 15 feet away from its previous wielder, in a random direction.

**Normal:** Disarmed weapons and gear land at the feet of the disarmed creature.`
},
{
    id: "greater-feint",
    name: "Greater Feint",
    categories: ["Combat Feats"],
    prerequisites: "Deft Maneuvers, base attack bonus +6, Dex 13",
    markdownContent: `# Greater Feint
*You are skilled at making foes overreact to your attacks.*

**Prerequisites:** Deft Maneuvers, base attack bonus +6, Dex 13.

**Benefit:** Whenever you use feint to cause an opponent to lose his Dexterity bonus, he loses that bonus until the beginning of your next turn, in addition to losing his Dexterity bonus against your next attack.

**Normal:** A creature you feint loses its Dexterity bonus against your next attack.`
},
{
    id: "greater-grapple",
    name: "Greater Grapple",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, base attack bonus +6, Str 13 or Dex 13",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Greater Grapple
*Maintaining a grapple is second nature to you.*

**Prerequisites:** Unarmed Combatant, base attack bonus +6, Str 13 or Dex 13.

**Benefit:** You receive a +2 bonus on checks made to grapple a foe. This bonus stacks with the bonus granted by Unarmed Combatant. Once you have grappled a creature, maintaining the grapple is a move action. This feat allows you to make two grapple checks each round (to move, harm, or pin your opponent), but you are not required to make two checks. You only need to succeed at one of these checks to maintain the grapple.

**Normal:** Maintaining a grapple is a standard action.`
},
{
    id: "greater-hamstring",
    name: "Greater Hamstring",
    categories: ["Combat Feats"],
    prerequisites: "Powerful Maneuvers, base attack bonus +6, Str 13",
    markdownContent: `# Greater Hamstring
*You can stop enemies in their tracks.*

**Prerequisites:** Powerful Maneuvers, base attack bonus +6, Str 13.

**Benefit:** You receive a +2 bonus on checks made to hamstring a foe. This bonus stacks with the bonus granted by Powerful Maneuvers. When you successfully hamstring an opponent using an attack of opportunity, that opponent cannot move for the rest of his turn.`
},
{
    id: "greater-overrun",
    name: "Greater Overrun",
    categories: ["Combat Feats"],
    prerequisites: "Powerful Maneuvers, base attack bonus +6, Str 13",
    markdownContent: `# Greater Overrun
*Enemies must dive to avoid your dangerous move.*

**Prerequisites:** Powerful Maneuvers, base attack bonus +6, Str 13.

**Benefit:** You receive a +2 bonus on checks made to overrun a foe. This bonus stacks with the bonus granted by Powerful Maneuvers. Whenever you overrun opponents, they provoke attacks of opportunity if they are knocked prone by your overrun.

**Normal:** Creatures knocked prone by your overrun do not provoke an attack of opportunity.`
},
{
    id: "greater-penetrating-strike",
    name: "Greater Penetrating Strike",
    categories: ["Combat Feats"],
    prerequisites: "Penetrating Strike, Weapon Focus, 16th-level fighter",
    markdownContent: `# Greater Penetrating Strike
*Your attacks penetrate the defenses of most foes.*

**Prerequisites:** Penetrating Strike, Weapon Focus, 16th-level fighter.

**Benefit:** Your attacks with weapons from the group in which you have Weapon Focus ignore up to 10 points of damage reduction. This amount is reduced to 5 points for damage reduction without a type (such as DR 10/-).`
},
{
    id: "greater-shield-focus",
    name: "Greater Shield Focus",
    categories: ["Combat Feats"],
    prerequisites: "Shield Focus, Shield Proficiency, base attack bonus +1, 8th-level fighter",
    markdownContent: `# Greater Shield Focus
*You are skilled at deflecting blows with your shield.*

**Prerequisites:** Shield Focus, Shield Proficiency, base attack bonus +1, 8th-level fighter.

**Benefit:** Increase the AC bonus granted by any shield you are using by 1. This bonus stacks with the bonus granted by Shield Focus. Additionally, the AC bonus against ranged weapons granted by Shield Focus now affects ranged touch attacks (including rays and similar magical effects).`
},
{
    id: "greater-steal",
    name: "Greater Steal",
    categories: ["Combat Feats"],
    prerequisites: "Deft Maneuvers, base attack bonus +6, Dex 13.",
    Changes: "Added a Combat Trick to allow selection without the Dex 13 prerequisite and stamina-based benefits.",
    markdownContent: `# Greater Steal
*You have a knack for snatching items from your opponents in combat.*

**Prerequisite(s):** Deft Maneuvers, base attack bonus +6, Dex 13.  

**Changes:** Added a Combat Trick to allow selection without the Dex 13 prerequisite and stamina-based benefits.

**Benefit:** You receive a +2 bonus on checks made to steal an item from a foe. This bonus stacks with the bonus granted by Deft Maneuvers. If you successfully steal an item from a foe during combat, it does not notice the theft until after combat is over or if it attempts to use the missing item.  

**Normal:** Creatures automatically notice items taken from them through the steal combat maneuver.  

## Combat Trick
You can select this feat even if you don’t meet the ability score prerequisite (Dexterity 13). You gain the benefits of this feat only as long as you have at least 1 stamina point in your stamina pool. When attempting a Steal combat maneuver with a whip, you can spend 2 stamina points to negate the –4 penalty on the check.`
},
{
    id: "greater-sunder",
    name: "Greater Sunder",
    categories: ["Combat Feats"],
    prerequisites: "Powerful Maneuvers, base attack bonus +6, Str 13",
    markdownContent: `# Greater Sunder
*Your devastating strikes cleave through weapons and armor and into their wielders, damaging both item and wielder alike in a single terrific strike.*

**Prerequisites:** Powerful Maneuvers, base attack bonus +6, Str 13.

**Benefit:** You receive a +2 bonus on checks made to sunder an item. This bonus stacks with the bonus granted by Powerful Maneuvers. Whenever you sunder to destroy a weapon, shield, or suit of armor, any excess damage is applied to the item’s wielder. No damage is transferred if you decide to leave the item with 1 hit point.`
},
{
    id: "greater-trip",
    name: "Greater Trip",
    categories: ["Combat Feats"],
    prerequisites: "Deft Maneuvers, base attack bonus +6, Dex 13",
    markdownContent: `# Greater Trip
*You can make free attacks on foes that you knock down.*

**Prerequisites:** Deft Maneuvers, base attack bonus +6, Dex 13.

**Benefit:** You receive a +2 bonus on checks made to trip a foe. This bonus stacks with the bonus granted by Deft Maneuvers. Whenever you successfully trip an opponent, that opponent provokes attacks of opportunity.

**Normal:** Creatures do not provoke attacks of opportunity from being tripped.`
},
{
    id: "greater-two-weapon-defense",
    name: "Two-Weapon Defense, Greater",
    categories: ["Combat Feats"],
    prerequisites: "Str 17 or Dex 17, Two-Weapon Defense, Two-Weapon Fighting, base attack bonus +6.",
    changes: `Ported from Dungeons & Dragons 3.5 Complete Warrior Feats. Elephant in the Room adjustment. Now requires either Strength or Dexterity.`,
    markdownContent: `# Two-Weapon Defense, Greater
*You gain a significant defensive advantage while fighting with two weapons.*

**Prerequisites:** Str 17 or Dex 17, Two-Weapon Defense, Two-Weapon Fighting, base attack bonus +6.

**Benefit:** When wielding a weapon with the *double* weapon quality or two weapons (other than natural weapons or unarmed strikes), you gain a +2 shield bonus to your Armor Class. This bonus increases to +3 when your base attack bonus reaches +11.

When you are fighting defensively or using the total defense action, this shield bonus increases by +2 (to a total of +4, or +6 at base attack bonus +11).`,    
},
{
    id: "greater-two-weapon-fighting",
    name: "Greater Two-Weapon Fighting",
    categories: ["Combat Feats"],
    prerequisites: "Str 15 or Dex 15, Two-Weapon Fighting, base attack bonus +6",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Greater Two-Weapon Fighting
*You are skilled at fighting with two weapons.*

**Prerequisites:** Str 15 or Dex 15, Two-Weapon Fighting, base attack bonus +6.

**Benefit:** In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty. When your base attack bonus reaches +11, you also gain a third attack with your off-hand weapon, albeit at a -10 penalty.

**Normal:** Without this feat, you can only get a single extra attack with an off-hand weapon.

## Combat Trick

When making an attack of opportunity, you can spend 5 stamina points to also make an attack of opportunity with your off-hand weapon. That second attack takes a –5 penalty.`
},
{
    id: "greater-vital-strike",
    name: "Greater Vital Strike",
    categories: ["Combat Feats"],
    prerequisites: "Improved Vital Strike, Vital Strike, base attack bonus +16",
    markdownContent: `# Greater Vital Strike
*You can make a single attack that deals incredible damage.*

**Prerequisites:** Improved Vital Strike, Vital Strike, base attack bonus +16.

**Benefit:** When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon’s damage dice for the attack four times and add the results together before adding bonuses from Strength, weapon abilities (such as flaming), precision-based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.`
},
{
    id: "greater-weapon-focus",
    name: "Greater Weapon Focus",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus with the selected weapon group, base attack bonus +1, 8th-level fighter",
    markdownContent: `# Greater Weapon Focus
*Choose one weapon group listed under the fighter’s Weapon Training class feature for which you have already selected Weapon Focus. You are a master at your chosen weapon type.*

**Prerequisites:** Weapon Focus with the selected weapon group, base attack bonus +1, 8th-level fighter.

**Benefit:** You gain a +1 bonus on attack rolls you make using the selected weapon group. This bonus stacks with other bonuses on attack rolls, including those from Weapon Focus.

**Special:** You can gain Greater Weapon Focus multiple times. Its effects do not stack. Each time you take the feat, it applies to a new weapon group.`
},
{
    id: "greater-weapon-specialization",
    name: "Greater Weapon Specialization",
    categories: ["Combat Feats"],
    prerequisites: "Greater Weapon Focus with the selected weapon group, Weapon Specialization with the selected weapon group, 12th-level fighter",
    markdownContent: `# Greater Weapon Specialization
*Choose one weapon group listed under the fighter’s Weapon Training class feature for which you possess the Weapon Specialization feat. Your attacks with these weapons are more devastating than normal.*

**Prerequisites:** Greater Weapon Focus with the selected weapon group, Weapon Specialization with the selected weapon group, 12th-level fighter.

**Benefit:** You gain a +2 bonus on all damage rolls you make using any weapon from the selected group. This bonus to damage stacks with other damage roll bonuses, including any you gain from Weapon Specialization.

**Special:** You can gain Greater Weapon Specialization multiple times. Its effects do not stack. Each time you take the feat, it applies to a new weapon group.`
},
{
    id: "improved-critical",
    name: "Improved Critical",
    categories: ["Combat Feats"],
    prerequisites: "Proficiency with at least one weapon from the selected weapon group, base attack bonus +8",
    markdownContent: `# Improved Critical
*Choose one weapon group listed under the fighter’s Weapon Training class feature. Attacks made with your chosen weapons are quite deadly.*

**Prerequisites:** Proficiency with at least one weapon from the selected weapon group, base attack bonus +8.

**Benefit:** When using any weapon from the selected group, your threat range is doubled.

**Special:** You can gain Improved Critical multiple times. The effects do not stack. Each time you take the feat, it applies to a new weapon group. This effect doesn’t stack with any other effect that expands the threat range of a weapon.`
},
{
    id: "improved-initiative",
    name: "Improved Initiative",
    categories: ["Combat Feats"],
    markdownContent: `# Improved Initiative
*Your quick reflexes allow you to react rapidly to danger.*

**Benefit:** You get a +4 bonus on initiative checks.`
},
{
    id: "improved-precise-shot",
    name: "Improved Precise Shot",
    categories: ["Combat Feats"],
    prerequisites: "Dex 19, Precise Shot, base attack bonus +11",
    markdownContent: `# Improved Precise Shot
*Your ranged attacks ignore anything but total concealment and cover.*

**Prerequisites:** Dex 19, Precise Shot, base attack bonus +11.

**Benefit:** Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks.

**Normal:** See the normal rules on the effects of cover and concealment in Combat.`
},
{
    id: "improved-shield-bash",
    name: "Improved Shield Bash",
    categories: ["Combat Feats"],
    prerequisites: "Shield Proficiency",
    markdownContent: `# Improved Shield Bash
*You can protect yourself with your shield, even if you use it to attack.*

**Prerequisites:** Shield Proficiency.

**Benefit:** When you perform a shield bash, you may still apply the shield’s shield bonus to your AC.

**Normal:** Without this feat, a character that performs a shield bash loses the shield’s shield bonus to AC until his next turn (see Equipment).`
},
{
    id: "improved-vital-strike",
    name: "Improved Vital Strike",
    categories: ["Combat Feats"],
    prerequisites: "Vital Strike, base attack bonus +11",
    markdownContent: `# Improved Vital Strike
*You can make a single attack that deals a large amount of damage.*

**Prerequisites:** Vital Strike, base attack bonus +11.

**Benefit:** When you use the attack action, you can make one attack at your highest base attack bonus that deals additional damage. Roll the weapon’s damage dice for the attack three times and add the results together before adding bonuses from Strength, weapon special abilities (such as flaming), precision based damage, and other damage bonuses. These extra weapon damage dice are not multiplied on a critical hit, but are added to the total.`
},
{
    id: "improvised-weapon-mastery",
    name: "Improvised Weapon Mastery",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, Catch Off-Guard, base attack bonus +6",
    markdownContent: `# Improvised Weapon Mastery
*You can turn nearly any object into a deadly weapon, from a razor-sharp chair leg to a sack of flour.*

**Prerequisites:** Unarmed Combatant, Catch Off-Guard, base attack bonus +6.

**Benefit:** Increase the amount of damage dealt by an improvised weapon by one step (for example, 1d4 becomes 1d6) to a maximum of 1d8 (2d6 if the improvised weapon is two-handed). The improvised weapon has a critical threat range of 19-20, with a critical multiplier of ×2.`
},
{
    id: "intimidating-prowess",
    name: "Intimidating Prowess",
    categories: ["Combat Feats"],
    markdownContent: `# Intimidating Prowess
*Your physical might is intimidating to others.*

**Benefit:** Add your Strength modifier to Intimidate skill checks in addition to your Charisma modifier.`
},
{
    id: "iron-guard",
    name: "Iron Guard",
    categories: ["Combat Feats"],
    prerequisites: "Shield Focus, Shield Proficiency, base attack bonus +6",
    markdownContent: `# Iron Guard
*You are skilled at shielding yourself from flames and magical effects.*

**Prerequisites:** Shield Focus, Shield Proficiency, base attack bonus +6.

**Benefit:** You gain the benefits of the rogue's evasion class ability as long as you have a heavy shield or tower shield in one hand. Unlike evasion, you do not need to be wearing light or medium armor to benefit from this effect.`
},
{
    id: "lightning-stance",
    name: "Lightning Stance",
    categories: ["Combat Feats"],
    prerequisites: "Dex 17, Dodge, Wind Stance, base attack bonus +11",
    markdownContent: `# Lightning Stance
*The speed at which you move makes it nearly impossible for opponents to strike you.*

**Prerequisites:** Dex 17, Dodge, Wind Stance, base attack bonus +11.

**Benefit:** If you take two actions to move or a withdraw action in a turn, you gain 50% concealment for 1 round.`
},
{
    id: "lunge",
    name: "Lunge",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +6",
    markdownContent: `# Lunge
*You can strike foes that would normally be out of reach.*

**Prerequisites:** Base attack bonus +6.

**Benefit:** You can increase the reach of your melee attacks by 5 feet until the end of your turn by taking a -2 penalty to your AC until your next turn. You must decide to use this ability before any attacks are made.`
},
{
    id: "manyshot",
    name: "Manyshot",
    categories: ["Combat Feats"],
    prerequisites: "Dex 17, Precise Shot, Rapid Shot, base attack bonus +6",
    markdownContent: `# Manyshot
*You can fire multiple shots at a single target.*

**Prerequisites:** Dex 17, Precise Shot, Rapid Shot, base attack bonus +6.

**Benefit:** When making a full-attack action with a bow, crossbow, or sling, your first attack fires two projectiles. If the attack hits, both arrows, bolts, or bullets hit. Apply precision-based damage (such as sneak attack) and critical hit damage only once for this attack. Strength bonuses apply to each projectile, as do other damage bonuses, such as a ranger’s favored enemy bonus. Damage reduction and resistances apply separately to each arrow, bolt, or bullet.`
},
{
  id: "martial-weapon-proficiency",
  name: "Martial Weapon Proficiency",
  categories: ["Combat Feats"],
  changes: "Now grants proficiency with all martial weapons, not just a single weapon.",
  markdownContent: `# Martial Weapon Proficiency
*You are trained in the use of martial weapons.*

**Benefit:** You make attack rolls with all martial weapons without the non-proficient penalty.

**Normal:** When using a weapon with which you are not proficient, you take a –4 penalty on attack rolls.`,
},
{
    id: "medusas-wrath",
    name: "Medusa’s Wrath",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, Gorgon’s Fist, Scorpion Stance, base attack bonus +11",
    markdownContent: `# Medusa’s Wrath
*You can take advantage of your opponent’s confusion, delivering multiple blows.*

**Prerequisites:** Unarmed Combatant, Gorgon’s Fist, Scorpion Stance, base attack bonus +11.

**Benefit:** Whenever you use the full-attack action and make at least one unarmed strike, you can make two additional unarmed strikes at your highest base attack bonus. These bonus attacks must be made against a dazed, flat-footed, paralyzed, staggered, stunned, or unconscious foe.`
},
{
    id: "mounted-archery",
    name: "Mounted Archery",
    categories: ["Combat Feats"],
    prerequisites: "Ride 1 rank, Mounted Combat",
    markdownContent: `# Mounted Archery
*You are skilled at making ranged attacks while mounted.*

**Prerequisites:** Ride 1 rank, Mounted Combat.

**Benefit:** The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.`
},
{
    id: "mounted-blade",
    name: "Mounted Blade",
    categories: ["Combat Feats"],
    prerequisites: "Mounted Combat, Ride-By Attack, Ride 3 ranks",
    changes: "Changed from General feat to Combat feat. No longer requires the second creature to be adjaent to the first.",
    markdownContent: `# Mounted Blade
*You can use the momentum of your mount to carry your weapon through one foe and into another.*

**Prerequisite(s):** Mounted Combat, Ride-By Attack, Ride 3 ranks.

**Benefit(s):** When you use the Ride-By Attack feat, if your attack hits, you can also make an attack against another creature within reach. You take a –5 penalty on this additional attack, which does not benefit from any effects of a charge.`
},
{
    id: "mounted-combat",
    name: "Mounted Combat",
    categories: ["Combat Feats"],
    prerequisites: "Ride 1 rank",
    markdownContent: `# Mounted Combat
*You are adept at guiding your mount through combat.*

**Prerequisites:** Ride 1 rank.

**Benefit:** Once per round when your mount is hit in combat, you may attempt a Ride check (as an immediate action) to negate the hit. The hit is negated if your Ride check result is greater than the opponent’s attack roll.`
},
{
    id: "mutual-hatred",
    name: "Mutual Hatred",
    categories: ["Combat Feats"],
    markdownContent: `# Mutual Hatred
*Others hate you, and their hatred feeds your own.*

**Prerequisite(s):** None.

**Benefit(s):** You gain a +1 bonus on attack rolls and damage rolls against creatures whose hatred racial trait or favored enemy class feature applies to you. For instance, an orc would gain this bonus against all dwarves and against rangers who chose humanoid (orc) as a favored enemy.`
},
{
    id: "oversized-two-Weapon-fighting",
    name: "Oversized Two-Weapon Fighting",
    categories: ["Combat Feats"],
    prerequisites: "Str 15, Two-Weapon Fighting.",
    changes: `Ported from Dungeons & Dragons 3.5 Complete Adventurer Feats.`,
    markdownContent: `# Oversized Two-Weapon Fighting
*You are adept at wielding larger than normal weapons in your off hand.*

**Prerequisite:** Str 15, Two-Weapon Fighting.

**Benefit:** When wielding a one-handed weapon in your off-hand, you take penalties for fighting with two weapons as if you were wielding a light weapon in your off-hand.`,    
},
{
    id: "parting-shot",
    name: "Parting Shot",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Dodge, Shot on the Run, base attack bonus +6",
    markdownContent: `# Parting Shot
*You are an expert skirmisher, able to rain missiles upon your enemies whether advancing or retreating.*

**Prerequisites:** Dex 13, Dodge, Shot on the Run, base attack bonus +6.

**Benefit:** Once per encounter, when using the withdraw action, you can make a single ranged attack at any point during your movement.

**Normal:** You cannot attack when using the withdraw action.`
},
{
    id: "penetrating-strike",
    name: "Penetrating Strike",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus, base attack bonus +1, 12th-level fighter",
    markdownContent: `# Penetrating Strike
*Your attacks are capable of penetrating the defenses of some creatures.*

**Prerequisites:** Weapon Focus, base attack bonus +1, 12th-level fighter.

**Benefit:** Your attacks with weapons from the group in which you have Weapon Focus ignore up to 5 points of damage reduction. This feat does not apply to damage reduction without a type (such as DR 10/–).`
},
{
    id: "pinpoint-targeting",
    name: "Pinpoint Targeting",
    categories: ["Combat Feats"],
    prerequisites: "Dex 19, Improved Precise Shot, Precise Shot, base attack bonus +16",
    markdownContent: `# Pinpoint Targeting
*You can target the weak points in your opponent’s armor.*

**Prerequisites:** Dex 19, Improved Precise Shot, Precise Shot, base attack bonus +16.

**Benefit:** As a standard action, make a single ranged attack. The target does not gain any armor, natural armor, or shield bonuses to its Armor Class. You do not gain the benefit of this feat if you move this round.`
},
{
    id: "point-blank-master",
    name: "Point-Blank Master",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Specialization with the selected weapon group",
    markdownContent: `# Point-Blank Master
*You are adept at firing ranged weapons in close quarters.*

**Prerequisites:** Weapon Specialization with the selected weapon group.

**Benefit:** Choose the bows, crossbows, or thrown group listed under the fighter’s Weapon Training class feature. You do not provoke attacks of opportunity when firing any weapon from the selected group while threatened.

**Normal:** Using a ranged weapon while you are threatened provokes attacks of opportunity.`
},
{
    id: "point-blank-shot",
    name: "Point-Blank Shot",
    categories: ["Combat Feats"],
    prerequisites: "Precise Shot",
    markdownContent: `# Point-Blank Shot
*You are especially accurate when making ranged attacks against close targets.*

**Prerequisite:** Precise Shot

**Benefit:** You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.`
},
{
    id: "powerful-maneuvers",
    name: "Powerful Maneuvers",
    categories: ["Combat Feats"],
    prerequisites: "Str 13, base attack bonus +1",
    markdownContent: `# Powerful Maneuvers
*You are skilled in a variety of strength-focused combat maneuvers.*

**Prerequisites:** Str 13, base attack bonus +1

**Benefit:** You do not provoke an attack of opportunity when performing a bull rush, hamstring, overrun, or sunder combat maneuver. In addition, you receive a +2 bonus on checks with these combat maneuvers. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to bull rush, hamstring, or overrun you or sunder your gear.  
Targets of your overrun attempts may not choose to avoid you.

**Normal:** You provoke an attack of opportunity when performing a bull rush, hamstring, overrun, or sunder combat maneuver.`
},
{
    id: "precise-shot",
    name: "Precise Shot",
    categories: ["Combat Feats"],
    markdownContent: `# Precise Shot
*You are adept at firing ranged attacks into melee.*

**Benefit:** You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard –4 penalty on your attack roll.`
},
{
    id: "quick-draw",
    name: "Quick Draw",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +1.",
    changes: `Combined with Quick Stow.`,
    markdownContent: `# Quick Draw
*You effortlessly stow items, as well as draw and sheath weapons faster than most.*

**Prerequisite:** Base attack bonus +1.

**Benefits:** You can draw a weapon as a Free Action instead of as a Move Action. You can draw a hidden weapon (see the Sleight of Hand skill) as a move action. A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow). Alchemical items, potions, scrolls, and wands cannot be drawn quickly using this feat.

You do not provoke an attack of opportunity when sheathing a weapon, and you can combine a Move Action to sheathe a weapon with a regular Move Action. (You can both stow and draw a weapon as part of the same move action in this way.) If you have the Two-Weapon Fighting feat, you can sheathe two light or one-handed weapons in the time it would normally take to sheathe one.

You can also quickly stow items in a backpack or other container that you are wearing or carrying. When you successfully use an action to pick up an item (including when you steal an item with a successful Sleight of Hand check or steal combat maneuver check), you can stow the item as part of the same action used to acquire it. You can try to hide this object by attempting a Sleight of Hand check with a –20 penalty, opposed by the Perception check results of all opponents.

**Normal:** Without this feat, you may draw a weapon as a move action, or (if your base attack bonus is +1 or higher) as a free action as part of movement. Without this feat, you can draw a hidden weapon as a standard action.

## Combat Trick
As long as you have at least 1 stamina point in your stamina pool, you can sheathe a weapon as a swift action.`,    
},
{
    id: "rapid-reload",
    name: "Rapid Reload",
    categories: ["Combat Feats"],
    prerequisites: "Proficiency with at least one weapon from the selected weapon group.",
    changes: `One-Handed and Two-Handed Firearm reload speeds reduced one step.`,
    markdownContent: `# Rapid Reload  
*You can reload certain weapons from a chosen weapon group with exceptional speed.*

**Prerequisite:** Proficiency with at least one weapon from the selected weapon group.

**Benefit:** Choose one weapon group from those listed under the fighter’s Weapon Training class feature (such as crossbows, firearms, or thrown weapons). When wielding a weapon from the chosen group with the *Short Reload* weapon quality (such as a light crossbow, hand crossbow, sling, halfling sling staff, or one-handed firearm), you can reload it as a free action. When wielding a weapon from the chosen group with the *Long Reload* weapon quality (such as a heavy crossbow or two-handed firearm), you can reload it as a move action.

You do not provoke attacks of opportunity when reloading a weapon from the chosen group if the reload time is reduced to a free action. Reloading a weapon from the chosen group that requires more than a free action still provokes attacks of opportunity as normal.

If you reload a weapon from the chosen group as a free action, you may make as many attacks with that weapon during a full-attack action as you could if wielding a bow.

**Normal:** Without this feat, reloading a weapon with the *Short Reload* quality requires a move action, and reloading a weapon with the *Long Reload* quality requires a full-round action. Reloading a weapon typically provokes an attack of opportunity.

**Special:** You can take this feat multiple times. Each time you do, it applies to a different weapon group.`,    
},
{
    id: "rapid-shot",
    name: "Rapid Shot",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Precise Shot",
    markdownContent: `# Rapid Shot
*You can make an additional ranged attack.*

**Prerequisites:** Dex 13, Precise Shot.

**Benefit:** When making a full-attack action with a ranged weapon, you can fire one additional time this round at your highest bonus. All of your attack rolls take a -2 penalty when using Rapid Shot.`
},
{
    id: "ride-by-attack",
    name: "Ride-By Attack",
    categories: ["Combat Feats"],
    prerequisites: "Ride 1 rank, Mounted Combat",
    markdownContent: `# Ride-By Attack
*While mounted and charging, you can move, strike at a foe, and then continue moving.*

**Prerequisites:** Ride 1 rank, Mounted Combat.

**Benefit:** When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can’t exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack.`
},
{
    id: "savage-charge",
    name: "Savage Charge",
    categories: ["Combat Feats"],
    prerequisites: "Str 15, Spring Attack, Vital Strike, base attack bonus +8",
    markdownContent: `# Savage Charge
*You fearlessly dive into battle, bringing the full weight of your weapon down on your opponent.*

**Prerequisites:** Str 15, Spring Attack, Vital Strike, base attack bonus +8.

**Benefit:** You can Vital Strike as part of a charge action or Spring Attack.`
},
{
    id: "scorpion-stance",
    name: "Scorpion Stance",
    categories: ["Combat Feats"],
    prerequisites: "Unarmed Combatant, Deft Maneuvers or Powerful Maneuvers",
    markdownContent: `# Scorpion Stance
*You are skilled at incapacitating larger opponents.*

**Prerequisites:** Unarmed Combatant, Deft Maneuvers or Powerful Maneuvers.

**Benefit:** You can bull rush, hamstring, overrun, or trip an opponent who is up to two size categories larger than you. You are treated as one size category larger while grappling.

**Special:** By spending 1 point from his ki pool, a monk can bull rush, hamstring, overrun, or trip an opponent who is up to three size categories larger than him and is treated as two size categories larger while grappling. This effect lasts for a number of rounds equal to his Wisdom modifier.

**Normal:** You can only bull rush, hamstring, overrun, or trip an opponent who is no more than one size category larger than you.`
},
{
    id: "shatter-defenses",
    name: "Shatter Defenses",
    categories: ["Combat Feats"],
    prerequisites: "Dazzling Display, base attack bonus +6",
    markdownContent: `# Shatter Defenses
*Your skill with your chosen weapon group leaves opponents unable to defend themselves if you strike them when their defenses are already compromised.*

**Prerequisites:** Dazzling Display, base attack bonus +6.

**Benefit:** Any shaken, frightened, or panicked opponent hit by you this round is flat-footed to your attacks until the end of your next turn. This includes any additional attacks you make this round.`
},
{
    id: "shield-focus",
    name: "Shield Focus",
    categories: ["Combat Feats"],
    prerequisites: "Shield Proficiency, base attack bonus +1",
    markdownContent: `# Shield Focus
*You are skilled at deflecting blows with your shield.*

**Prerequisites:** Shield Proficiency, base attack bonus +1.

**Benefit:** Increase the AC bonus granted by any shield you are using by 1. This bonus increases to 5 against ranged attacks (not including spell effects, natural attacks, or massive ranged weapons).`
},
{
    id: "shield-master",
    name: "Shield Master",
    categories: ["Combat Feats"],
    prerequisites: "Improved Shield Bash, Shield Proficiency, Shield Slam, Two-Weapon Fighting, base attack bonus +11",
    markdownContent: `# Shield Master
*Your mastery of the shield allows you to fight with it without hindrance.*

**Prerequisites:** Improved Shield Bash, Shield Proficiency, Shield Slam, Two-Weapon Fighting, base attack bonus +11.

**Benefit:** You do not suffer any penalties on attack rolls made with a shield while you are wielding another weapon. Add your shield’s enhancement bonus to attacks and damage rolls made with the shield as if it was a weapon enhancement bonus.`
},
{
    id: "shield-proficiency",
    name: "Shield Proficiency",
    categories: ["Combat Feats"],
    markdownContent: `# Shield Proficiency
*You are trained in how to properly use a shield.*

**Benefit:** When you use a shield (except a tower shield), the shield’s armor check penalty only applies to Strength- and Dexterity-based skills.

**Normal:** When you are using a shield with which you are not proficient, you take the shield’s armor check penalty on attack rolls and on all skill checks that involve moving.`
},
{
    id: "shield-slam",
    name: "Shield Slam",
    categories: ["Combat Feats"],
    prerequisites: "Improved Shield Bash, Shield Proficiency, Two-Weapon Fighting, base attack bonus +6",
    markdownContent: `# Shield Slam
*In the right position, your shield can be used to send opponents flying.*

**Prerequisites:** Improved Shield Bash, Shield Proficiency, Two-Weapon Fighting, base attack bonus +6.

**Benefit:** Any opponents hit by your shield bash are also hit with a free bull rush attack, substituting your attack roll for the combat maneuver check (see Combat). This bull rush does not provoke an attack of opportunity. Opponents who cannot move back due to a wall or other surface are knocked prone after moving the maximum possible distance. You may choose to move with your target if you are able to take a 5-foot step or to spend an action to move this turn.`
},
{
    id: "shot-on-the-run",
    name: "Shot on the Run",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Dodge, Precise Shot, base attack bonus +4",
    markdownContent: `# Shot on the Run
*You can move, fire a ranged weapon, and move again before your foes can react.*

**Prerequisites:** Dex 13, Dodge, Precise Shot, base attack bonus +4.

**Benefit:** As a full-round action, you can move up to your speed and make a single ranged attack at any point during your movement.

**Normal:** You cannot move before and after an attack with a ranged weapon.`
},
{
    id: "sickening-critical",
    name: "Sickening Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +11",
    markdownContent: `# Sickening Critical
*Your critical hits cause opponents to become sickened.*

**Prerequisites:** Critical Focus, base attack bonus +11.

**Benefit:** Whenever you score a critical hit, your opponent becomes sickened for 1 minute. The effects of this feat do not stack. Additional hits instead add to the effect’s duration.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
  id: "simple-weapon-proficiency",
  name: "Simple Weapon Proficiency",
  categories: ["Combat Feats"],
  markdownContent: `# Simple Weapon Proficiency
*You are trained in the use of simple weapons.*

**Benefit:** You make attack rolls with all simple weapons without the non-proficient penalty.

**Normal:** When using a weapon with which you are not proficient, you take a –4 penalty on attack rolls.`,
},
{
    id: "small-but-deadly",
    name: "Small but Deadly",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus, Small Size or smaller",
    changes: "Added increased dice step. Moved from General Feats to Combat Feats.",
    markdownContent: `# Small but Deadly
*You have learned to make the most of certain weapons, despite your physical weakness.*

**Prerequisite(s):** Weapon Focus, Small Size or smaller.

**Benefit(s):** Weapons from your selected weapon group deal damage as if one size category larger than they actually are. Additionally, you ignore your Strength penalty to damage when making attacks with such weapons.`
},
{
    id: "snatch-arrows",
    name: "Snatch Arrows",
    categories: ["Combat Feats"],
    prerequisites: "Dex 15, Deflect Arrows, Unarmed Combatant",
    markdownContent: `# Snatch Arrows
*Instead of knocking an arrow or ranged attack aside, you can catch it in mid-flight.*

**Prerequisites:** Dex 15, Deflect Arrows, Unarmed Combatant.

**Benefit:** When using the Deflect Arrows feat you may choose to catch the weapon instead of just deflecting it. Thrown weapons can immediately be thrown back as an attack against the original attacker (even though it isn’t your turn) or kept for later use.  
You must have at least one hand free (holding nothing) to use this feat.`
},
{
    id: "spellbreaker",
    name: "Spellbreaker",
    categories: ["Combat Feats"],
    prerequisites: "Disruptive, 10th-level fighter",
    markdownContent: `# Spellbreaker
*You can strike at enemy spellcasters who fail to cast defensively when you threaten them.*

**Prerequisites:** Disruptive, 10th-level fighter.

**Benefit:** Enemies in your threatened area that fail their checks to cast spells defensively provoke attacks of opportunity from you.

**Normal:** Enemies that fail to cast spells defensively do not provoke attacks of opportunity.`
},
{
    id: "spirited-charge",
    name: "Spirited Charge",
    categories: ["Combat Feats"],
    prerequisites: "Ride 1 rank, Mounted Combat, Ride-By Attack",
    markdownContent: `# Spirited Charge
*Your mounted charge attacks deal a tremendous amount of damage.*

**Prerequisites:** Ride 1 rank, Mounted Combat, Ride-By Attack.

**Benefit:** When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance).`
},
{
    id: "spring-attack",
    name: "Spring Attack",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Dodge, base attack bonus +4",
    markdownContent: `# Spring Attack
*You can deftly move up to a foe, strike, and withdraw before he can react.*

**Prerequisites:** Dex 13, Dodge, base attack bonus +4.

**Benefit:** As a full-round action, you can move up to your speed and make a single melee attack without provoking any attacks of opportunity from the target of your attack. You can move both before and after the attack, but you must move at least 10 feet before the attack and the total distance that you move cannot be greater than your speed. You cannot use this ability to attack a foe that is adjacent to you at the start of your turn.

**Normal:** You cannot move before and after an attack.

## Combat Trick

You can spend 5 stamina points to use this feat as a standard action instead of a full-round action.`
},
{
    id: "staggering-critical",
    name: "Staggering Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +13",
    markdownContent: `# Staggering Critical
*Your critical hits cause opponents to slow down.*

**Prerequisites:** Critical Focus, base attack bonus +13.

**Benefit:** Whenever you score a critical hit, your opponent becomes staggered for 1d4+1 rounds. A successful Fortitude save reduces the duration to 1 round. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "starry-grace",
    name: "Starry Grace",
    categories: ["Combat Feats"],
    prerequisites: "Cha 15, proficient with starknives.",
    changes: "Changed Starry Grace to Charisma to attack and damage rolls. Adjusted prerequisites.",
    markdownContent: `# Starry Grace
*You wield the starknife with a graceful flair, letting personal presence guide your aim instead of agility.*

**Prerequisites:** Cha 15, proficient with starknives.

**Benefit:** When wielding a starknife and using the Finesse property to apply your Dexterity modifier to attack and damage rolls, you may instead choose to apply your Charisma modifier to those rolls. If you do, you do not add any other ability modifier to the attack or damage rolls, even if one would normally apply (such as Strength or Dexterity).

When throwing a starknife, you may apply your Charisma modifier to attack and damage rolls instead of your Strength modifier (within the weapon’s first range increment) or your Dexterity modifier (beyond the first range increment), provided you are using the Finesse property for that attack.

In addition, if you have the panache class feature and at least 1 panache point, you gain a +5 bonus to your movement speed on your move action after taking an attack action, your Spring Attack, or a charge with a starknife.
`,    
},
{
    id: "step-up",
    name: "Step Up",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +1",
    markdownContent: `# Step Up
*You can close the distance when a foe tries to move away.*

**Prerequisites:** Base attack bonus +1.

**Benefit:** Whenever an adjacent foe attempts to take a 5-foot step away from you, you may also make a 5-foot step as an immediate action so long as you end up adjacent to the foe that triggered this ability. If you take this step, you cannot take a 5-foot step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement.

## Combat Trick

As long as you have at least 1 stamina point in your stamina pool, on the turn after you use this feat, you can still take a 5-foot step, and you don’t reduce your speed if you take an action to move due to this feat.`
},
{
    id: "strike-back",
    name: "Strike Back",
    categories: ["Combat Feats"],
    prerequisites: "Base attack bonus +11",
    markdownContent: `# Strike Back
*You can strike at foes that attack you using their superior reach, by targeting their limbs or weapons as they come at you.*

**Prerequisites:** Base attack bonus +11.

**Benefit:** You can ready an action to make a melee attack against any foe that attacks you in melee, even if the foe is outside of your reach.`
},
{
    id: "stunning-critical",
    name: "Stunning Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, Staggering Critical, base attack bonus +17",
    markdownContent: `# Stunning Critical
*Your critical hits cause opponents to become stunned.*

**Prerequisites:** Critical Focus, Staggering Critical, base attack bonus +17.

**Benefit:** Whenever you score a critical hit, your opponent becomes stunned for 1d4 rounds. A successful Fortitude save reduces this to staggered for 1d4 rounds. The DC of this Fortitude save is equal to 10 + your base attack bonus. The effects of this feat do not stack. Additional hits instead add to the duration.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "stunning-fist",
    name: "Stunning Fist",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Wis 13, Unarmed Combatant, base attack bonus +8",
    markdownContent: `# Stunning Fist
*You know just where to strike to temporarily stun a foe.*

**Prerequisites:** Dex 13, Wis 13, Unarmed Combatant, base attack bonus +8.

**Benefit:** You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + 1/2 your character level + your Wis modifier), in addition to dealing damage normally.  

A defender who fails this saving throw is stunned for 1 round (until just before your next turn). A stunned character drops everything held, can’t take actions, loses any Dexterity bonus to AC, and takes a -2 penalty to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned.

**Special:** A monk receives Stunning Fist as a bonus feat at 1st level, even if he does not meet the prerequisites. A monk may attempt a stunning attack a number of times per day equal to his monk level, plus one more time per day for every four levels he has in classes other than monk.`
},
{
    id: "surprise-follow-through",
    name: "Surprise Follow-Through",
    categories: ["Combat Feats"],
    prerequisites: "Str 13, Cleave, base attack bonus +1",
    changes: "Merged Surprise Follow-Through and Improved Surprise Follow-Through into one feat, scaling with BAB.",
    markdownContent: `# Surprise Follow-Through
*Your sweeping strikes catch foes off-guard as you batter your way through the battlefield.*

**Prerequisites:** Str 13, Cleave, Power Attack, base attack bonus +1.

**Benefit:** When using Cleave or Great Cleave, the second creature you attack on your turn is denied its Dexterity bonus to AC against your attack.

When your base attack bonus reaches +6, this effect applies to all creatures you attack after the first when using Cleave or Great Cleave.`
},
{
    id: "swift-aid",
    name: "Swift Aid",
    categories: ["Combat Feats"],
    prerequisites: "Int 13, base attack bonus +6",
    changes: "Adjusted language for clarity when used with other abilities that affect the Aid Another action.",
    markdownContent: `# Swift Aid
*With a quick but harmless swipe, you can aid an ally’s assault.*

**Prerequisite(s):** Int 13, base attack bonus +6

**Benefit(s):** You can attempt the Aid Another action as a Swift Action, but reduce the total bonus granted by half.

**Normal:** Aid Another is a standard action.`
},
{
    id: "tiring-critical",
    name: "Tiring Critical",
    categories: ["Combat Feats", "Critical Feats"],
    prerequisites: "Critical Focus, base attack bonus +13",
    markdownContent: `# Tiring Critical
*Your critical hits cause opponents to become fatigued.*

**Prerequisites:** Critical Focus, base attack bonus +13.

**Benefit:** Whenever you score a critical hit, your opponent becomes fatigued. This feat has no additional effect on a fatigued or exhausted creature.

**Special:** You can only apply the effects of one critical feat to a given critical hit unless you possess Critical Mastery.`
},
{
    id: "titan-grip",
    name: "Titan Grip",
    categories: ["Combat Feats"],
    prerequisites: "Str 15, base attack bonus +1.",
    changes: `Homebrew.`,
    markdownContent: `# Titan Grip
*Some warriors scoff at blades too big to lift—you build your legend with them.*

**Prerequisites:** Str 15, base attack bonus +1

**Benefit:** You can wield melee weapons one size category larger or smaller than your own without the usual –2 penalty, provided you adjust your grip. A larger weapon must be treated as one step heavier (light becomes one-handed; one-handed becomes two-handed). A smaller weapon may be treated as one step lighter (two-handed becomes one-handed; one-handed becomes light).

When using this feat, a weapon does not retain special weapon properties—such as reach or finesse—if it is not being wielded in the manner appropriate to its original size category. For example, a Small glaive wielded one-handed loses the reach property, and a Large rapier wielded two-handed cannot be used with Weapon Finesse.

This feat does not grant additional reach or space when using larger weapons and does not allow you to wield weapons more than one size category different from your own.

**Normal:** A creature that wields a melee weapon not sized for them takes a cumulative –2 penalty on attack rolls for each size category of difference between wielder and weapon.`,    
},
{
    id: "tower-shield-proficiency",
    name: "Tower Shield Proficiency",
    categories: ["Combat Feats"],
    prerequisites: "Shield Proficiency",
    markdownContent: `# Tower Shield Proficiency
*You are trained in how to properly use a tower shield.*

**Prerequisite:** Shield Proficiency.

**Benefit:** When you use a tower shield, the shield’s armor check penalty only applies to Strength- and Dexterity-based skills.

**Normal:** A character using a shield with which he is not proficient takes the shield’s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.`
},
{
    id: "trample",
    name: "Trample",
    categories: ["Combat Feats"],
    prerequisites: "Ride 1 rank, Mounted Combat",
    markdownContent: `# Trample
*While mounted, you can ride down opponents and trample them under your mount.*

**Prerequisites:** Ride 1 rank, Mounted Combat.

**Benefit:** When you attempt to overrun an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets.`
},
{
    id: "two-weapon-defense",
    name: "Two-Weapon Defense",
    categories: ["Combat Feats"],
    prerequisites: "Str 15 or Dex 15, Two-Weapon Fighting.",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Two-Weapon Defense
*You are skilled at defending yourself while dual-wielding.*

**Prerequisites:** Str 15 or Dex 15, Two-Weapon Fighting.

**Benefit:** When wielding a weapon with the *double* weapon quality or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC.

When you are fighting defensively or using the total defense action, this shield bonus increases to +2.`,    
},
{
    id: "two-weapon-fighting",
    name: "Two-Weapon Fighting",
    categories: ["Combat Feats"],
    prerequisites: "Str 15 or Dex 15",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Two-Weapon Fighting
*You can fight with a weapon wielded in each of your hands. You can make one extra attack each round with the secondary weapon.*

**Prerequisite:** Str 15 or Dex 15.

**Benefit:** Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See table below:

**Normal:** If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand. If your off-hand weapon is a finesse weapon, the penalties are reduced by 2 each. An unarmed strike is always considered a finesse weapon.


<table class="classTable">
<thead>
    <tr>
        <th align="left"><b>Circumstances</b></th>
        <th><b>Primary Hand</b></th>
        <th><b>Off-Hand</b></th>
    </tr>
</thead>
<tbody>
    <tr><td align="left">Normal Penalties</td><td>-6</td><td>-10</td></tr>
    <tr><td align="left">Off-Hand is a Light Weapon</td><td>-4</td><td>-8</td></tr>
    <tr><td align="left">Two-Weapon Fighting Feat</td><td>-4</td><td>-4</td></tr>
    <tr><td align="left">Off-Hand is a Light Weapon and Two-Weapon Fighting Feat</td><td>-2</td><td>-2</td></tr>
</tbody>
</table>

## Combat Trick
You can spend any number of stamina points to reduce the penalty from Two-Weapon Fighting on attacks made with a weapon in your primary hand by 1 for every 2 stamina points you spent. This benefit lasts until the start of your next turn. You can’t reduce the penalty below 0.`,    
},
{
    id: "two-weapon-pounce",
    name: "Two-Weapon Pounce",
    categories: ["Combat Feats"],
    prerequisites: "Str 15 or Dex 15, Two-Weapon Fighting, base attack bonus +6.",
    changes: `Ported from Dungeons & Dragons 3.5 Player's Handbook II Feats. Now requires either Strength or Dexterity.`,
    markdownContent: `# Two-Weapon Pounce
*When you charge an opponent while wielding two weapons, you can make two quick attacks. You trade the momentum and power of the charge for the opportunity to use your second weapon.*

**Prerequisite:** Str 15 or Dex 15, Two-Weapon Fighting, base attack bonus +6.

**Benefit:** When you are making a charge and wielding weapons in both hands, you can attack with both of your weapons. If you do so, you lose the bonus on attack rolls normally granted by a charge. The -2 penalty to AC from charging still applies.

**Normal:** When making a charge, you get a single attack at the end of your movement.`,    
},
{
    id: "two-weapon-rend",
    name: "Two-Weapon Rend",
    categories: ["Combat Feats"],
    prerequisites: "Str 17 or Dex 17, Double Slice, Greater Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11.",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Two-Weapon Rend
*Striking with both of your weapons simultaneously, you can use them to deliver devastating wounds.*

**Prerequisites:** Str 17 or Dex 17, Double Slice, Greater Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11.

**Benefit:** If you hit an opponent with both your primary hand and your off-hand weapon, you deal an additional 1d10 points of damage plus 1-1/2 times your Strength modifier. You can only deal this additional damage once each round.`,    
},
{
    id: "unarmed-combatant",
    name: "Unarmed Combatant",
    categories: ["Combat Feats"],
    prerequisites: "Str 13 or Dex 13.",
    changes: `Now requires either Strength or Dexterity.`,
    markdownContent: `# Unarmed Combatant
*You are skilled at grappling and fighting while unarmed.*

**Prerequisite:** Str 13 or Dex 13.

**Benefit:** You are considered to be armed even when unarmed - you do not provoke attacks of opportunity when you attack foes while unarmed. Your unarmed strikes now deal 1d6 damage if you are medium sized or 1d4 damage if you are small sized, and you can deal lethal or nonlethal damage, at your choice. You do not provoke an attack of opportunity when performing a grapple combat maneuver. In addition, you receive a +2 bonus on checks made to grapple a foe. You also receive a +2 bonus to your Combat Maneuver Defense whenever an opponent tries to grapple you.

**Normal:** Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack. You provoke an attack of opportunity when performing a grapple combat maneuver.

## Combat Trick
When you deal nonlethal damage with an unarmed strike, you can spend up to 5 stamina points to deal an amount of additional nonlethal damage equal to double the amount of stamina points you spent. Additionally, when you are the target of a grapple combat maneuver to initiate or maintain a grapple, you can spend a number of stamina points up to your Strength or Dexterity bonus, whichever is greater. Your CMD against that grapple attempt increases by that number.`,    
},
{
    id: "vast-hatred",
    name: "Vast Hatred",
    categories: ["Combat Feats"],
    prerequisites: "Hatred racial trait",
    changes: "Removed racial restriction, adjusted language to work with other hatred feats.",
    markdownContent: `# Vast Hatred
*Your rage stretches beyond normal bounds.*

**Prerequisite(s):** Hatred racial trait

**Benefit(s):** Select two creature types (and subtypes where appropriate) from the list of potential favored enemies from the ranger class ability. Any bonuses granted against targets of your Hatred racial trait also apply to creatures of the selected types (and subtypes).

**Special:** You may take this feat more than once. Its benefits do not stack. Each time you select this feat, you select two additional creature types to which your hatred racial trait applies.`
},
{
    id: "weapon-focus",
    name: "Weapon Focus",
    categories: ["Combat Feats"],
    prerequisites: "Proficiency with at least one weapon from the selected weapon group.",
    changes: `Removed BAB prerequisite.`,
    markdownContent: `# Weapon Focus
*You become more accurate with a specific group of weapons.*

**Prerequisites:** Proficiency with at least one weapon from the selected weapon group.

**Benefit:** Choose one weapon group listed under the fighter’s Weapon Training class feature. You gain a +1 bonus on all attack rolls you make using any weapon from the selected group.

**Special:** You can take this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new weapon group.

## Combat Trick
Once per round, you can spend 2 stamina points to gain your Weapon Focus bonus on attack rolls with a weapon with which you don’t have Weapon Focus. This bonus lasts until the start of your next turn.`,    
},
{
    id: "weapon-grace",
    name: "Weapon Grace",
    categories: ["Combat Feats"],
    prerequisites: "Dex 15.",
    changes: "Merged Fencing, Slashing and Starry Grace to streamline Dex-to-damage feats and broaden coverage from Fencing Grace to cover rapier-adjacent weapons.",
    markdownContent: `# Weapon Grace
*You can use one-handed piercing and slashing weapons as if they had finesse.*

**Prerequisites:** Dex 15.

**Benefits:** Choose one weapon group from those listed under the fighter’s weapon training class feature. When wielding a light or one-handed piercing or slashing weapon from the chosen weapon group that is appropriately sized for you, you treat that weapon as though it had the finesse weapon quality. Additionally, when wielding such a weapon one-handed, you can treat it as a one-handed piercing melee weapon for all feats and class abilities that require such a weapon.

**Special:** If you possess the panache class feature and have at least 1 panache point, you gain a +2 bonus to your CMD against disarm attempts made against you while wielding a weapon that qualifies for this feat.`,    
},
{
    id: "weapon-specialization",
    name: "Weapon Specialization",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus with the selected weapon group, fighter level 4th",
    markdownContent: `# Weapon Specialization
*You are skilled at dealing damage with one type of weapon. Choose one weapon group listed under the fighter’s Weapon Training class feature for which you have already selected the Weapon Focus feat. You deal extra damage when using these weapons.*

**Prerequisites:** Weapon Focus with the selected weapon group, fighter level 4th.

**Benefit:** You gain a +2 bonus on all damage rolls you make using any weapon from the selected group.

**Special:** You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new weapon group.`
},
{
    id: "weapon-versatility",
    name: "Weapon Versatility",
    categories: ["Combat Feats"],
    prerequisites: "Weapon Focus, base attack bonus +1",
    changes: "",
    markdownContent: `# Weapon Versatility
*You can use your favored weapons in unconventional ways.*

**Prerequisite(s):** Weapon Focus, base attack bonus +1

**Benefit(s):** When wielding a weapon from your selected weapon group, you can shift your grip as a Swift Action so that your weapon deals bludgeoning, piercing, or slashing damage instead of the damage type normally dealt by that weapon. You may switch back to the weapon’s normal damage type or another damage type as a Swift Action. If your base attack bonus is +5 or higher, using this feat is a Free Action instead.`
},
{
  id: "whirling-cleave",
  name: "Whirling Cleave",
  categories: ["Combat Feats"],
  prerequisites: "Str 13, Cleave, Great Cleave, base attack bonus +6.",
  changes: "",
  markdownContent: `# Whirling Cleave
*You become a whirlwind of steel on the battlefield.*

**Prerequisites:** Str 13, Cleave, Great Cleave, base attack bonus +6.

**Benefit:** You can take a single 5-foot step during a Cleave or Great Cleave, as long as it brings you within reach of another creature against which you can make an additional attack. This 5-foot step is a free action and does not subtract from your normal movement for the round.`,
},
{
    id: "whirlwind-attack",
    name: "Whirlwind Attack",
    categories: ["Combat Feats"],
    prerequisites: "Dex 13, Combat Reflexes, Dodge, Spring Attack, base attack bonus +4",
    markdownContent: `# Whirlwind Attack
*You can strike out at every foe within reach.*

**Prerequisites:** Dex 13, Combat Reflexes, Dodge, Spring Attack, base attack bonus +4.

**Benefit:** When you use the full-attack action, you can give up your regular attacks and instead make one melee attack at your highest base attack bonus against each opponent within reach. You must make a separate attack roll against each opponent.

When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities.`
},
{
    id: "wind-stance",
    name: "Wind Stance",
    categories: ["Combat Feats"],
    prerequisites: "Dex 15, Dodge, base attack bonus +6",
    markdownContent: `# Wind Stance
*Your erratic movements make it difficult for enemies to pinpoint your location.*

**Prerequisites:** Dex 15, Dodge, base attack bonus +6.

**Benefit:** If you move more than 5 feet this turn, you gain 20% concealment for 1 round against ranged attacks.`
},
];
