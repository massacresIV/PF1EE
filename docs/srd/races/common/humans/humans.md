import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { humanRacialTraits } from "@site/src/data/racial-traits/human";

# Humans

---

## Human Details
- **Ability Scores:** Humans gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Humans are Humanoids with the Human subtype.
- **Size:**  Humans are Medium creatures and thus receive no bonuses or penalties due to their size.
- **Hit Points:** Humans are resilient, and gain an additional 6 hit points at 1st level.
- **Speed:** Humans have a base speed of 30 feet.
- **Languages:** Humans begin play speaking Common. Humans with high Intelligence scores can choose any languages they want (except secret languages, such as Druidic).

### Adaptability
Humans receive Skill Focus as a bonus feat at 1st level.

### Versatile Training
Humans select any two skills at 1st level. These skills are always treated as class skills for them.

---

## Human Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### Focused-kind
Humans are skillful, but some, rather than being generalists, tend to specialize in a handful of skills. Focused-kind gain the following racial traits;
- **Focused Study:** Focused-kind gain additional Skill Focus feats at 8th and 16th level. 

### Primitive-kind
Primitive-kind devote more of their time to honing the basic skills of how to avoid predators and gather food, rather than to higher-minded pursuits. Primitive-kind gain the following racial traits;
- **Savage Skills:** Primitive-kind receive a +2 racial bonus on Climb, Survival, and Swim skill checks.
- **Savage Surge:** Once per day, Primitive-kind can call upon a well of inner savagery. This grants a +4 bonus to any one Strength-based skill check, Strength check, or weapon damage roll. Using this ability is a Free Action, but it must be used before the check or attack roll is made.

### Versatile-kind
Humanity's adaptability and versatility allows them to pursue almost any calling with a surprising level of competence. Versatile-kind gain the following racial traits;
- **Versatility:** Versatile-kind gain an extra Standard Feat at 1st level.

---

## Human Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As a Human, you select from among the following racial traits.

<RacialTraitTable traits={[...humanRacialTraits]} />