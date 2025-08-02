import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { gnomeRacialTraits } from "@site/src/data/racial-traits/gnome-racials";

# Gnomes

---

## Gnome Details
- **Ability Scores:** Gnomes gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Gnomes are Humanoid creatures with the Gnome subtype.
- **Size:** Gnomes are Small creatures and gain a +1 size bonus to their AC, a +1 size bonus on attack rolls, a –1 penalty to their CMB and CMD, and a +4 size bonus on Stealth checks.
- **Hit Points:** Gnomes are clever and surprisingly resilient, and gain an additional 6 hit points at 1st level.
- **Speed:** Gnomes have a base speed of 30 feet.
- **Languages:** Gnomes begin play speaking Common, Gnome, and Sylvan. Gnomes with high Intelligence scores can choose from the following: Draconic, Dwarven, Elven, Giant, Goblin, and Orc.

### Gnomish Resistance
Gnomes gain spell resistance equal to 6 + their character level.

### Keen Senses
Gnomes receive a +2 racial bonus on Perception checks.

### Low-Light Vision
Gnomes can see twice as far as humans in conditions of dim light.

---

## Gnome Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Common Gnome
Common Gnomes gain the following racial traits;
- **Common Gnome Magic (2 RP):** Common Gnomes add +1 to the DC of any illusion spells or spell-like abilities they cast. Common Gnomes also gain the following spell-like abilities: At Will—*prestidigitation*; 1/day—*speak with animals*. The caster level for these effects is equal to the Common Gnome’s level. The DC for these spell-like abilities is equal to 10 + the spell’s level + the Common Gnome’s Charisma modifier.
- **Illusion Resistance (1 RP):** Common Gnomes gain a +2 racial saving throw bonus against illusion spells and effects.
- **Obsessive (1 RP):** Common Gnomes gain a +2 racial bonus on a Profession skill of their choice, and it becomes a class skill.

### Deep Gnome
Deep Gnomes gain the following racial traits;
- **Darkvision (1 RP):** Deep Gnomes can see perfectly in the dark up to 30 feet.
- **Deep Gnome Magic (2 RP):** Deep Gnomes add +1 to the DC of any illusion spells or spell-like abilities they cast. Deep Gnomes also gain the following spell-like abilities: At Will—*ghost sound*; 1/day—*disguise self*. The caster level for these effects is equal to the Deep Gnome’s level. The DC for these spell-like abilities is equal to 10 + the spell’s level + the Deep Gnome’s Charisma modifier.
- **Stonecunning (1 RP):** Deep Gnomes gain a +2 bonus on Perception checks to notice unusual stonework, such as traps and hidden doors located in stone walls or floors. They receive a check to notice such features whenever they pass within 10 feet of them, whether or not they are actively looking.

---

## Gnome Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As a Gnome, you select from among the following racial traits.

<RacialTraitTable traits={[...gnomeRacialTraits]} />