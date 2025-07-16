export const humanFeats = [
    {
        id: "martial-versatility",
        name: "Martial Versatility",
        categories: ["Combat Feats", "Racial Feats"],
        prerequisites: "Fighter level 4th, Weapon Focus, Human.",
        changes: `Now lets you apply Weapon Focus and one combat feat to a second weapon group.`,
        markdownContent: `# Martial Versatility
*Through dedicated training, you can apply your martial expertise across weapon groups with ease.*

**Prerequisites:** Fighter level 4th, Weapon Focus, Human.

**Benefit:** Through 1 hour of focused practice with a different weapon group, you can apply your existing martial training to a second set of arms. Select a weapon group other than the one chosen for Weapon Focus. Choose a single combat feat you possess that has Weapon Focus as a prerequisite, such as Dazzling Display, Disruptive, or Improved Critical. You are treated as having Weapon Focus and the selected feat with the second weapon group in addition to the first, until you choose to practice with a different weapon group or feat.

## Combat Trick
At the start of your turn, you can spend 2 stamina points to treat a weapon from a different group as though it were part of your chosen group for the purposes of Weapon Focus and the feat selected with Martial Versatility, until the start of your next turn.`,    
    },
    {
        id: "martial-mastery",
        name: "Martial Mastery",
        categories: ["Combat Feats", "Racial Feats"],
        prerequisites: "Fighter level 4th, Weapon Focus, Human.",
        changes: `Now lets you apply Weapon Focus and all combat feats to the second weapon group.`,
        markdownContent: `# Martial Mastery
*Your mastery over arms allows you to fluidly adapt your entire fighting style to new weapons.*

**Prerequisites:** Martial Versatility, Fighter level 16th, human.

**Benefit:** When you use Martial Versatility, you apply the benefits of all feats you possess that have Weapon Focus as a prerequisite to the chosen second weapon group. You are treated as having Weapon Focus and each of those feats with the selected weapon group until you choose to practice with a different group.

## Combat Trick
You may instead spend 5 stamina points to treat a weapon from any other group as though it shared the benefits of Weapon Focus and all associated feats you possess, until the start of your next turn.`,    
    },
    {
        id: "surge-of-success",
        name: "Surge of Success",
        categories: ["General Feats", "Racial Feats"],
        prerequisites: "Human.",
        changes: `No longer limited to the end of your next turn. Now uses a success pool more tactical usage.`,
        markdownContent: `# Surge of Success
*Your success drives your further actions.*

**Prerequisites:** Human.

**Benefit:** Whenever you confirm a critical hit or roll a natural 20 on a saving throw, you gain 1 success point. You can have a maximum number of success points equal to your Hit Dice. As a free action before making an attack roll, saving throw, skill check, or ability check, you can spend any number of success points to gain an equal circumstance bonus on that roll.

Unused success points expire 1 hour after they are gained.`,    
    },
];
