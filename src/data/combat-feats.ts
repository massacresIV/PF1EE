export const combatFeats = [
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
        id: "weapon-focus",
        name: "Weapon Focus",
        categories: ["Combat Feats"],
        prerequisites: "Proficiency with at least one weapon from the selected weapon group, base attack bonus +1.",
        markdownContent: `# Weapon Focus
*You become more accurate with a specific group of weapons.*

**Prerequisites:** Proficiency with at least one weapon from the selected weapon group, base attack bonus +1.

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
];
