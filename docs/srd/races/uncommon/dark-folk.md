import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { darkfolkRacialTraits } from "@site/src/data/racial-traits/darkfolk-racials";

# Dark Folk

---

## Dark Folk Details
- **Ability Scores:** Dark Folk gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Dark Folk are Humanoids with the Dark Folk subtype.
- **Size:** At 1st level, a Dark Folk may choose to be either Small or Medium. Small Dark Folk gain a +1 size bonus to AC, a +1 size bonus on attack rolls, a –1 penalty to CMB and CMD, and a +4 size bonus on Stealth checks. Medium Dark Folk receive no bonuses or penalties due to their size.
- **Hit Points:** Dark Folks are resilient, gaining an additional 8 hit points at 1st level.
- **Speed:** Dark Folks have a base speed of 30 feet.
- **Languages:** Dark Folks begin play speaking Common and Dark Folk. Dark Folks with high Intelligence scores can choose from the following: Dwarven, Giant, Gnome, Goblin, Undercommon.

### See in Darkness
Dark Folk have the see in darkness special ability, allowing them to see perfectly in darkness of any kind, including that created by *Deeper Darkness*.

---

## Dark Folk Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Caligni
Caligni gain the following racial traits;
- **Dark Magic (3 RP):** Caligni gain the following spell-like abilities: At Will—*detect magic*; 1/day—*darkness*. The caster level for these effects is equal to the Caligni’s level. The DC for these spell-like abilities is equal to 10 + the spell’s level + the Caligni’s Charisma modifier.
- **Death Throes (1 RP):** When a Caligni is slain, its body combusts in a flash of searing light. All creatures within a 10-foot burst must succeed at a Fortitude save (DC = 10 + 1/2 the Caligni’s Hit Dice + the Caligni’s Constitution bonus) or be blinded for 1d6 rounds. The corpse left behind is a third of the Caligni’s size, withered and unrecognizable as the individual. Raise dead and similar spells cast upon these remains restore a Caligni as normal.

---

## Dark Folk Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As an Dark Folk, you select from among the following racial traits.

<RacialTraitTable traits={[...darkfolkRacialTraits]} />