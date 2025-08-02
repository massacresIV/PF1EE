export const itemcreationFeats = [
    {
        id: "brew-potion",
        name: "Brew Potion",
        categories: ["Item Creation Feats"],
        prerequisites: "Caster level 1st.",
        changes: `Prerequisites lowered for access at first level. Crafting duration standardized to 100gp per hour.`,
        markdownContent: `# Brew Potion
*You can create magic potions.*

**Prerequisite:** Caster level 1st.

**Benefit:** You can create a potion of any 3rd-level or lower spell that you know and that targets one or more creatures or objects. Brewing a potion takes 1 hour per 100 gp of the potion’s base price, rounded down to the nearest 100 gp (minimum 1 hour). When you create a potion, you set the caster level, which must be sufficient to cast the spell in question and no higher than your own level. To brew a potion, you must use up raw materials costing one half of this base price.

When you create a potion, you make any choices that you would normally make when casting the spell. Whoever drinks the potion is the target of the spell and spells with a range of personal cannot be made into potions.

The base potion costs are given on the tables below:

**Standard Potion Costs**
<table class="classTable">
    <thead>
        <tr>
            <th align="left"><b>Spell Level</b></th>
            <th align="center"><b>9th-Level Casters (Wizard, Cleric, Druid, Sorcerer, etc.)</b></th>
            <th align="center"><b>6th-Level Casters (Bard, Inquisitor, Summoner, etc.)</b></th>
            <th align="center"><b>4th-Level Casters (Paladin, Ranger, Bloodrager, etc.)</b></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left">0</td>
            <td align="center">25 gp</td>
            <td align="center">25 gp</td>
            <td align="center">25 gp</td>
        </tr>
        <tr>
            <td align="left">1st</td>
            <td align="center">50 gp</td>
            <td align="center">50 gp</td>
            <td align="center">200 gp</td>
        </tr>
        <tr>
            <td align="left">2nd</td>
            <td align="center">300 gp</td>
            <td align="center">400 gp</td>
            <td align="center">400 gp</td>
        </tr>
        <tr>
            <td align="left">3rd</td>
            <td align="center">750 gp</td>
            <td align="center">1,050 gp</td>
            <td align="center">1,500 gp</td>
        </tr>
    </tbody>
</table>`,    
    },
];
