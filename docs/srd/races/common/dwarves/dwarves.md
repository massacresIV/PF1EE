import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { dwarfRacialTraits } from "@site/src/data/racial-traits/dwarf";

# Dwarves

---

## Dwarf Details
- **Ability Scores:** Dwarves gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Dwarves are Humanoids with the Dwarf subtype.
- **Size:** Dwarves are Medium creatures and thus receive no bonuses or penalties due to their size.
- **Hit Points:** Dwarves are very tough and gain an additional 8 hit points at 1st level.
- **Speed:** Dwarves have a base speed of 20 feet, but their speed is never modified by armor or encumbrance.
- **Languages:** Dwarves begin play speaking Common and Dwarven. Dwarves with high Intelligence scores can choose from the following: Giant, Dwarf, Goblin, Orc, Terran, and Undercommon.

### Hardy
Dwarves gain a +2 racial bonus on saving throws against poison, spells, and spell-like abilities.

### Darkvision
Dwarves can see perfectly in the dark up to 60 feet.

---

## Dwarf Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Deep Dwarf
Deep Dwarves gain the following racial traits;
- **Deep Dwarf Immunities (1 RP):** Deep Dwarves are immune to paralysis, phantasms, and poison.
- **Deep Dwarf Magic (3 RP):** Deep Dwarves can cast Enlarge Person, and Invisibility, once each per day, using their total character level as caster level.

### Surface Dwarf
Surface Dwarves gain the following racial traits;
- **Greed (1 RP):** Surface Dwarves gain a +2 racial bonus on Appraise checks made to determine the price of non-magical goods that contain precious metals or gemstones.
- **Stonecunning (1 RP):** Surface Dwarves gain a +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.
- **Weapon Familiarity (2 RP):** Surface Dwarves are proficient with battleaxes, heavy picks, and warhammers, and treat any weapon with the word “dwarven” in its name as a martial weapon.

---

## Dwarf Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As a Dwarf, you select from among the following racial traits.

<RacialTraitTable traits={[...dwarfRacialTraits]} />