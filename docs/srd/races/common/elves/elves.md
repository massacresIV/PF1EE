import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { elfRacialTraits } from "@site/src/data/racial-traits/elf";

# Elves

Elves are a tall, long-lived people, often considered aloof by most other peoples.

As an ancient people, elves have seen great change and have the perspective that can come only from watching the arc of history. Elves value elegance, intellect, and pragmatism, with many elves striving to improve their manners, appearance, and culture. Their studies delve into a level of detail that most shorter-lived peoples simply lack the time to rival, allowing Elves to reach heights (particularly when in comes to arcane magic) that make the achievements of shorter-lived people look like childsplay. Their long lifespan often leads to Elves developing a different perspective on time, especially when contrasted against other peoples such as Humans, causing many of them to lose sense of time, even their exact age. Their own understanding of time can cause issues when it comes to their connections with others, being unable to appreciate bonds spanning several years the way a Human might. This difference of perspective can cause Elves to appear cold, distant and indifferent to others, especially when the two would value their years of friendship differently. This leads to them being slow to build friendships outside their kinsfolk, as Elves who spend their lives among shorter-lived peoples often become morose after watching generations of companions age and die. Regardless of the company they keep, all of these factors culminate in Elves being slow to emotional maturity which stands in stark contrast to their usual intellectual pragmatism. Due to their slow forming bonds, it takes them far longer to understand and overcome their own feelings, insecurities, and even social faux pas.

---

## Elf Details
- **Ability Scores:** Elves gain a +2 bonus to any two different ability scores of their choice.
- **Type:** Elves are Humanoids with the Elf subtype.
- **Size:** Elves are Medium creatures and thus receive no bonuses or penalties due to their size.
- **Hit Points:** Elves are graceful but fragile, and gain an additional 4 hit points at 1st level.
- **Speed:** Elves have a base speed of 30 feet.
- **Languages:** Elves begin play speaking Common and Elven. Elves with high Intelligence scores can choose from the following: Celestial, Draconic, Gnoll, Gnome, Goblin, Orc, and Sylvan.

### Elven Immunities
Elves are immune to magic sleep effects and gain a +2 racial saving throw bonus against enchantment spells and effects.

### Keen Senses
Elves receive a +2 racial bonus on Perception checks.

### Low-Light Vision
Elves can see twice as far as humans in conditions of dim light.

---

## Elf Lineages
You select a lineage at 1st level to reflect abilities passed down to you from your ancestors or common among those of your race in the environment where you were born or grew up. You have only one lineage and can’t change it later. A lineage is not the same as a culture or ethnicity, though some cultures or ethnicities might have more or fewer members from a particular lineage.

### High Elf
High Elves gain the following racial traits;
- **Arcane Insight (2 RP):** High Elves can cast *Detect Magic* at will as a spell-like ability, using their total character level as caster level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the High Elf’s Intelligence modifier.
- **Eidetic Recall (2 RP):** High Elves gain a +1 racial bonus on all Knowledge checks, and once per day, they may reroll a Knowledge check and take the better result.

### Dark Elf
Dark Elves gain the following racial traits;
- **Umbral Magic (3 RP):** Dark Elves can cast *dancing lights, darkness, and faerie fire*, once each per day, using their total character level as caster level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the Dark Elf’s Charisma modifier.
- **Darkvision (1 RP):** Dark Elves can see perfectly in the dark up to 60 feet, but lose their racial ability to see in areas of dim light (Low-Light Vision).

### Moon Elf
Moon Elves gain the following racial traits;
- **Moonlight (2 RP):** Moon Elves can cast *light* at will as a spell-like ability, using their total character level as caster level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the Moon Elf’s Charisma modifier.
- **Moonkissed (2 RP):** Moon Elves gain a +1 racial bonus on saving throws.

### Wood Elf
Wood Elves gain the following racial traits;
- **Nature’s Embrace (3 RP):** Wood Elves can cast *Barkskin, Naturewatch, and Speak with Animals*, once each per day, using their total character level as caster level. The DC for the spell-like abilities is equal to 10 + the spell’s level + the Wood Elf’s Wisdom modifier.
- **Rooted Resilience (1 RP):** Wood Elves gain a +1 racial bonus on saving throws against poison and disease.

---

## Elf Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As an Elf, you select from among the following racial traits.

<RacialTraitTable traits={[...elfRacialTraits]} />