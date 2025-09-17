import React from "react";
import RacialTraitTable from "@site/src/components/RacialTraitTable";
import { aasimarRacialTraits } from "@site/src/data/racial-traits/aasimar-racials";

# Aasimars
To play a character with a Aasimar lineage, first select your race, just like you would for any character. You gain hit points, type, size, speed, languages, racial traits, and other abilities from that race. Then, instead of choosing a lineage from those normally available to that race, apply your chosen Aasimar lineage. You gain all the features from your Aasimar lineage, some of which might modify or replace statistics, abilities, or traits from your race.

**When you apply an Aasimar lineage, you gain the Aasimar subtype,** while retaining any racial subtypes, creature size, and racial traits associated with your base race (e.g., Dwarf, Elf, Human).

Since a Aasimar lineage is a lineage, you can only apply one, and you cannot take another lineage in addition to your Aasimar lineage.

When selecting racial traits, you can choose from those available to your race as well as those available to your Aasimar lineage.

---

## Aasimar Lineages

### Agathion-Blooded
Agathion-Blooded possess bestial aspects and calm dispositions, and often act as peaceful intermediaries between lawful and chaotic agents of good. Agathion-Blooded gain the following racial traits:
- **Nature’s Whisper (1 RP)**: Agathion-Blooded gain a +1 racial bonus on Handle Animal and Survival checks.
- **Sonic Ward (1 RP):** Agathion-Blooded have Sonic resistance 5.
- **Call of the Wild (2 RP):** Agathion-Blooded can cast *Summon Nature's Ally II* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Agathion-Blooded’s Charisma modifier.

### Angel-Blooded
Angel-Blooded are mortal paragons of exceptional beauty, and they serve as exemplars of good and light regardless of the myriad forms they may take. Angel-Blooded gain the following racial traits:
- **Celestial Understanding (1 RP)**: Angel-Blooded gain a +1 racial bonus on Heal and Knowledge (Planes) checks.
- **Radiant Ward (1 RP):** Angel-Blooded have Acid resistance 5.
- **Aura of Change (2 RP):** Angel-Blooded can cast *Alter Self* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Angel-Blooded’s Charisma modifier.

### Archon-Blooded
Archon-Blooded are champions of justice and of doling out punishment to the wicked, and often believe chaos is the cause of all mortal suffering. Archon-Blooded gain the following racial traits:
- **Judicator’s Way (1 RP)**: Archon-Blooded gain a +1 racial bonus on Intimidate and Sense Motive checks.
- **Storm Ward (1 RP):** Archon-Blooded have Electric resistance 5.
- **Eternal Flame (2 RP):** Archon-Blooded can cast *Continual Flame* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Archon-Blooded’s Charisma modifier.

### Azata-Blooded
Azata-Blooded epitomize freedom and joy, and travel the world to liberate less fortunate individuals. Azata-Blooded gain the following racial traits:
- **Silver Voice (1 RP)**: Azata-Blooded gain a +1 racial bonus on Diplomacy and Perform checks.
- **Frost Ward (1 RP):** Azata-Blooded have Cold resistance 5.
- **Glittering Path (2 RP):** Azata-Blooded can cast *Glitterdust* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Azata-Blooded’s Charisma modifier.

### Garuda-Blooded
Their shimmering avian features make Garuda-Blooded instantly recognizable. Though they can act rashly, Garuda-Blooded never shirk their duty after making a commitment. Garuda-Blooded gain the following racial traits:
- **Skyward (1 RP)**: Garuda-Blooded gain a +1 racial bonus on Acrobatics and Fly checks.
- **Lightning Ward (1 RP):** Garuda-Blooded have Electric resistance 5.
- **Eyes of the Aerie (2 RP):** Garuda-Blooded can cast *See Invisibility* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Garuda-Blooded’s Charisma modifier.

### Peri-Blooded
Masters of fire magic, Peri-Blooded feel the dual pull of their peri forebear as well as that of a fallen angel further down their ancestry, and wrestle with their urges to do both good and evil. Peri-Blooded gain the following racial traits:
- **Flame-Forged (1 RP)**: Peri-Blooded gain a +1 racial bonus on Knowledge (Planes) and Spellcraft checks.
- **Fire Ward (1 RP):** Peri-Blooded have Fire resistance 5.
- **Pyric Call (2 RP):** Peri-Blooded can cast *Pyrotechnics* once per day, using their total character level as caster level. The DC for the spell-like ability is equal to 10 + the spell’s level + the Peri-Blooded’s Charisma modifier.

## Aasimar Racial Traits
At 1st level, you gain one racial trait, and you gain an additional racial trait every 4 levels thereafter (at 5th, 9th, 13th, and 17th levels). As an Aasimar, you may select from the racial traits available to your base race, as well as those listed below.

<RacialTraitTable traits={[...aasimarRacialTraits]} />