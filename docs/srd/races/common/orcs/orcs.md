import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { orcRacialTraits } from "@site/src/data/racial-traits/orc-racials";

# Orcs

---

## Orc Details
- **Ability Scores:** Orcs gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Orcs are Humanoids with the Orc subtype.
- **Size:** Orcs are Medium creatures and thus receive no bonuses or penalties due to their size.
- **Hit Points:** Orcs are fierce and hardy, gaining an additional 8 hit points at 1st level.
- **Speed:** Orcs have a base speed of 30 feet.
- **Languages:** Orcs begin play speaking Common and Orc. Orcs with high Intelligence scores can choose from the following: Dwarven, Giant, Gnoll, Goblin, Undercommon.

### Ferocity
Orcs receive Endurance as a bonus feat at 1st level.

### Darkvision
Orcs can see perfectly in the dark up to 30 feet.

---

## Orc Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Common Orc
- **Diehard (2 RP):** Common Orcs gain Diehard as a bonus feat at 1st level.

### Deep Orc

---

## Orc Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As an Orc, you select from among the following racial traits.

<RacialTraitTable traits={[...orcRacialTraits]} />