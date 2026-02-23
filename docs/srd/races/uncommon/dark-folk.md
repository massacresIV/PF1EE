import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { caligniRacialTraits } from "@site/src/data/racial-traits/caligni-racials";

# Caligni

---

## Caligni Details
- **Ability Scores:** Caligni gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Caligni are Humanoids with the Dark Folk subtype.
- **Size:** Caligni are Medium creatures and thus receive no bonuses or penalties due to their size.
- **Hit Points:** Calignis are resilient, gaining an additional 8 hit points at 1st level.
- **Speed:** Calignis have a base speed of 30 feet.
- **Languages:** Calignis begin play speaking Common and Dark Folk. Calignis with high Intelligence scores can choose from the following: Dwarven, Giant, Gnome, Goblin, Undercommon.

### Radiant Reprisal (Su)
As a standard action, a Caligni can absorb radiance from a single natural or magical light source within 30 feet that it can see. The light source must be sunlight, moonlight, starlight, or light created by a spell, spell-like ability, or supernatural effect. Absorbing radiance reduces the light level created by that source by one step (bright light becomes normal light, normal light becomes dim light) for 1 round. A Caligni can store only one instance of absorbed radiance at a time.

When the Caligni is struck by a melee or ranged attack from a creature within 10 feet, it can release the stored radiance as an Immediate Action. The attacking creature must succeed at a Fortitude save (DC = 10 + 1/2 the Caligni’s level + the Caligni’s Constitution modifier) or be dazzled for 1 round.

### Darkvision
Calignis can see perfectly in the dark up to 30 feet.

---

## Caligni Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Caligni Skulker
Caligni Skulkers gain the following racial traits;
- **Small Frame (0 RP):** A Caligni Skulker’s size becomes Small. They gain a +1 size bonus to AC, a +1 size bonus on attack rolls, a –1 penalty to CMB and CMD, and a +4 size bonus on Stealth checks.
- **Shadow Affinity (2 RP):** While in dim light or darkness, a Caligni Skulker blends with the shadows. The Caligni Skulker gains concealment (20%) against attacks from creatures more than 10 feet away. In areas of dim light, attacks against the Caligni Skulker have a 50% miss chance instead of the normal 20%, unless the attacker has darkvision or an equivalent ability that ignores dim light. This ability does not grant total concealment; it just increases the miss chance. This is a supernatural ability.
- **Opportunistic Strike (1 RP):** A Caligni Skulker deals a +1 circumstance bonus on attack and damage rolls against creatures that are dazzled or blinded, or when the Caligni Skulker is in dim light or darkness.
- **Veiled Step (1 RP):** A Caligni Skulker receive a +2 racial bonus on stealth checks.

### Caligni Stalker
Caligni Stalkers gain the following racial traits;
- **Darkness Manipulation (3 RP):** Caligni Stalkers gain the following spell-like abilities: At Will—*Detect Magic*; 1/day—*darkness*. The caster level for these effects is equal to the Caligni Stalkers’s level. The DC for these spell-like abilities is equal to 10 + the spell’s level + the Caligni Stalkers’s Charisma modifier.
- **Umbral Reflexes (1 RP):** A Caligni Stalker can exploit absorbed radiance to reposition in the heat of combat. When the Stalker releases stored radiance from Radiant Reprisal, it may immediately move up to 5 feet without provoking attacks of opportunity.

---

## Caligni Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As an Caligni, you select from among the following racial traits.

<RacialTraitTable traits={[...caligniRacialTraits]} />