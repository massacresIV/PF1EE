export const skillFeats = [
    {
        id: "poison-use",
        name: "Poison Use",
        categories: ["Skill Feats"],
        prerequisites: "2 ranks in any Alchemy Profession skill.",
        changes: `All prerequisites calling for the Poison Use class feature instead require this feat.`,
        markdownContent: `# Poison Use
*Your steady hands allow you to handle poison without risk to yourself.*

**Prerequisites:** 2 ranks in any Alchemy Profession skill.

**Benefit:** You are trained in the use of poison and cannot accidentally poison yourself when applying poison to a weapon.`,    
    },
    {
        id: "track",
        name: "Track",
        categories: ["Skill Feats"],
        prerequisites: "Survival 2 ranks.",
        changes: `Now required to follow tracks with a survival DC over 10. All prerequisites calling for the Track class feature instead require this feat.`,
        markdownContent: `# Track
*You are trained in the art of tracking creatures through wilderness, ruins, and urban clutter.*

**Prerequisites:** Survival 2 ranks.

**Benefit:** You can use the Survival skill to follow tracks regardless of the DC. You move at half speed while tracking, or at full speed with a –5 penalty, or at double speed with a –20 penalty. The base DC is determined by the surface and the prevailing conditions, as given on the tables below:

**Base Survival DC’s to Track by Ground Condition**
<table class="classTable">
    <thead>
        <tr>
            <th align="left"><b>Surface</b></th>
            <th><b>Survival DC</b></th>
        </tr>
    </thead>
    <tbody>
        <tr><td align="left">Very Soft Ground</td><td>5</td></tr>
        <tr><td align="left">Soft Ground</td><td>10</td></tr>
        <tr><td align="left">Firm Ground</td><td>15</td></tr>
        <tr><td align="left">Hard Ground</td><td>20</td></tr>
    </tbody>
</table>
<div style={{ marginTop: '3em' }}></div>

**Modifiers to Survival Checks When Tracking**

<table class="classTable">
    <thead>
        <tr><th align="left"><b>Condition</b></th><th><b>Survival DC Modifier</b></th></tr>
    </thead>
    <tbody>
        <tr><td align="left">Every three creatures in the group being tracked</td><td>–1</td></tr>
    </tbody>
    <thead>
        <tr><th align="left" colspan="2"><b>Creature Size being Tracked:<sup>1</sup></b></th></tr>
    </thead>
    <tbody>
        <tr><td align="left">Fine</td><td>+8</td></tr>
        <tr><td align="left">Diminutive</td><td>+4</td></tr>
        <tr><td align="left">Tiny</td><td>+2</td></tr>
        <tr><td align="left">Small</td><td>+1</td></tr>
        <tr><td align="left">Medium</td><td>+0</td></tr>
        <tr><td align="left">Large</td><td>–1</td></tr>
        <tr><td align="left">Huge</td><td>–2</td></tr>
        <tr><td align="left">Gargantuan</td><td>–4</td></tr>
        <tr><td align="left">Colossal</td><td>–8</td></tr>
    </tbody>
    <thead>
        <tr><th align="left" colspan="2"><b>Weather and Time Conditions:</b></th></tr>
    </thead>
    <tbody>
        <tr><td align="left">Every 24 hours since the trail was made</td><td>+1</td></tr>
        <tr><td align="left">Every hour of rain since the trail was made</td><td>+1</td></tr>
        <tr><td align="left">Fresh snow since the trail was made</td><td>+10</td></tr>
    </tbody>
    <thead>
        <tr><th align="left" colspan="2"><b>Poor Visibility:<sup>2</sup></b></th></tr>
    </thead>
    <tbody>
        <tr><td align="left">Overcast or moonless night</td><td>+6</td></tr>
        <tr><td align="left">Moonlight</td><td>+3</td></tr>
        <tr><td align="left">Fog or precipitation</td><td>+3</td></tr>
        <tr><td align="left">Tracked party hides trail (and moves at half speed)</td><td>+5</td></tr>
    </tbody>
</table>
<p class="footnote-free"><sup>1</sup> For a group of mixed sizes, apply only the modifier for the largest size category.</p>
<p class="footnote-free"><sup>2</sup> Apply only the largest modifier from this category.</p>
<div style={{ marginTop: '3em' }}></div>

**Normal:** Without this feat, you cannot attempt to follow tracks with a Survival DC over 10.`,    
    },
    {
        id: "trapfinding",
        name: "Trapfinding",
        categories: ["Skill Feats"],
        prerequisites: "Disable Device 2 ranks, Perception 2 ranks.",
        changes: `All prerequisites calling for the Trapfinding class feature instead require this feat.`,
        markdownContent: `# Trapfinding
*You can perceive and disable traps more readily, both mundane and magical.*

**Prerequisites:** Disable Device 2 ranks, Perception 2 ranks.

**Benefit:** You can use Disable Device to disarm magical traps.

**Normal:** Without this feat, you cannot use Disable Device to disarm magical traps.`,    
    },
    {
        id: "wild-empathy",
        name: "Wild Empathy",
        categories: ["Skill Feats"],
        prerequisites: "Cha 13, Handle Animal 2 ranks.",
        changes: `Now uses a Handle Animal check rather than a Charisma-ability check. All prerequisites calling for the Wild Empathy class feature instead require this feat.`,
        markdownContent: `# Wild Empathy  
*You have a natural rapport with animals and can influence their behavior through subtle cues and gestures.*

**Prerequisites:** Cha 13, Handle Animal 2 ranks.

**Benefit:** You can use the Handle Animal skill to improve the attitude of an animal as if you were using Diplomacy to influence a person. For this purpose, treat your Handle Animal check as a Diplomacy check. Typically, domestic animals begin with an indifferent attitude, while wild animals start unfriendly.

You must be within 30 feet of the animal and under conditions that allow reasonable communication and observation. The exact visibility or environmental conditions required are subject to GM adjudication, considering factors such as ambient light and any special senses possessed by you or the animal. Influencing an animal in this way generally takes about 1 minute, though the time required may vary depending on the situation.

You can also attempt to influence a magical beast with an Intelligence score of 1 or 2, but you take a –4 penalty on the check.

**Normal:** Without this feat, you cannot use Handle Animal to influence an animal’s attitude as you would with Diplomacy.`,    
    },
];
