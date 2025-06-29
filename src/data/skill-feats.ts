export const skillFeats = [
    {
        id: "acrobatic",
        name: "Acrobatic",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Acrobatic
*You are skilled at leaping, jumping, and flying.*

**Benefit:** You get a +1 bonus on Acrobatics and Fly skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "alertness",
        name: "Alertness",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Alertness
*You often notice things that others might miss.*

**Benefit:** You get a +1 bonus on Perception and Sense Motive skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "animal-affinity",
        name: "Animal Affinity",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Animal Affinity
*You are skilled at working with animals and mounts.*

**Benefit:** You get a +1 bonus on Handle Animal and Ride skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
    id: "animal-call",
    name: "Animal Call",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Bluff, 1 rank in Knowledge (nature).",
    markdownContent: `# Animal Call
*You’ve learned how to replicate a number of animal calls native to wilderness environments.*

**Prerequisites:** 1 rank in Bluff, 1 rank in Knowledge (nature).

**Benefit:** Pick one of the ranger’s favored terrains. You can use your Bluff skill to mimic the calls of animals native to that terrain. Creatures with ranks in Knowledge (nature) can use that skill in place of Sense Motive to detect your mimicry and realize that the sound is false.

**Special:** You can take this feat multiple times. Each time you do, select an additional favored terrain to which this feat applies.`,
    },
    {
    id: "animal-disguise",
    name: "Animal Disguise",
    categories: ["Skill Feats"],
    prerequisites: "6 ranks in Disguise, 6 ranks in Knowledge (nature).",
    changes: `Bonus down from +2 to +1.`,
    markdownContent: `# Animal Disguise
*With a little work, you can convincingly disguise yourself as an animal.*

**Prerequisites:** 6 ranks in Disguise, 6 ranks in Knowledge (nature).

**Benefit:** You can use the Disguise skill to appear as an animal of your size category. You must have an appropriate pelt and any other animal parts needed to complete the disguise. You also gain a +1 bonus on Disguise checks when disguising yourself as an animal. Creatures with ranks in Knowledge (nature) can use that skill in place of Sense Motive to detect your disguise.`,
    },
    {
        id: "athletic",
        name: "Athletic",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Athletic
*You possess inherent physical prowess.*

**Benefit:** You get a +1 bonus on Climb and Swim skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "athletic",
        name: "Athletic",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Athletic
*You possess inherent physical prowess.*

**Benefit:** You get a +1 bonus on Climb and Swim skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "breadth-of-experience",
        name: "Breadth of Experience",
        categories: ["Skill Feats"],
        prerequisites: "100+ years old.",
        changes: `Bonus down from +2 to +1.`,
        markdownContent: `# Breadth of Experience
*Although still young for your kind, you have a lifetime of knowledge and training.*

**Benefit:** You get a +1 bonus on all Knowledge and Profession skill checks, and can make checks with those skills untrained.`,    
    },
    {
    id: "brewmaster",
    name: "Brewmaster",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Profession (brewer).",
    changes: `Adjusted for Crafts & Professions. Removed racial restriction. Bonus down from +2 to +1.`,
    markdownContent: `# Brewmaster
*You can concoct potent brews, both delightful and dangerous.*

**Prerequisites:** 1 rank in Profession (brewer).

**Benefit:** You gain a +1 bonus on Profession (brewer) checks. In addition, you add +1 to the save DC of any ingested poison you create.`,
    },
    {
    id: "careful-flyer",
    name: "Careful Flyer",
    categories: ["Skill Feats"],
    prerequisites: "Acrobatic, 5 ranks in Fly.",
    markdownContent: `# Careful Flyer
*You move with ease when you fly at a slower rate.*

**Prerequisites:** Acrobatic, 5 ranks in Fly.

**Benefit:** As long as you take a move action to fly, even when moving less than half your speed, you do not need to succeed at a Fly check to continue flying. When moving less than half your speed in a round, you also gain a +2 bonus on Acrobatics checks to avoid attacks of opportunity and a +2 bonus to your AC against attacks of opportunity you provoke because of movement.

**Normal:** You must succeed at a Fly check to continue flying unless you move at least half your speed.`,
    },
    {
    id: "careful-sneak",
    name: "Careful Sneak",
    categories: ["Skill Feats"],
    prerequisites: "Dexterity 15, 6 ranks in Stealth.",
    changes: `Removed movement speed limiter. Removed feat chain.`,
    markdownContent: `# Careful Sneak
*You know how to move silently even while wearing some forms of armor.*

**Prerequisites:** Dexterity 15, 6 ranks in Stealth.

**Benefit:** You do not apply the armor check penalty for light and medium armor on Stealth skill checks.`,
    },
    {
    id: "careful-speaker",
    name: "Careful Speaker",
    categories: ["Skill Feats"],
    prerequisites: "Wisdom 13.",
    markdownContent: `# Careful Speaker
*The paranoid terror that comes from living in a region with a dangerous government has made you unusually aware of what you say.*

**Prerequisites:** Wisdom 13.

**Benefit:** You gain a +2 bonus on all Bluff checks made to fool someone or pass secret messages (but not to feint in combat), and a +2 bonus on all Will saves against attempts to scry upon you or read your mind.`,
    },
    {
    id: "childlike",
    name: "Childlike",
    categories: ["Skill Feats"],
    prerequisites: "Charisma 13, halfling.",
    markdownContent: `# Childlike
*Your resemblance to a human child tends to make others trust you, perhaps more than they should.*

**Prerequisites:** Charisma 13, halfling.

**Benefit:** You can take 10 on Bluff checks to convince others you are telling the truth, so long as your story makes you appear innocent. You gain a +2 bonus on Disguise checks to pose as a human child, and ignore the penalties for disguising yourself as a different race and age category when doing so.`,
    },
    {
    id: "city-sprinter",
    name: "City Sprinter",
    categories: ["Skill Feats"],
    prerequisites: "Street Smarts.",
    markdownContent: `# City Sprinter
*You are skilled at moving quickly through forbidding parts of cities.*

**Prerequisites:** Street Smarts.

**Benefit:** You do not treat crowds as difficult terrain. You also gain a +2 bonus on Acrobatics checks to move along rooftops and on slippery sections of city streets and sewers.`,
    },
    {
    id: "corsair",
    name: "Corsair",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Profession (sailor).",
    markdownContent: `# Corsair
*You’ve spent much time on the high seas, battling rival ships, gaining fame for you and your shipmates.*

**Prerequisites:** 1 rank in Profession (sailor).

**Benefit:** You get a +2 bonus on Initiative checks made while on a ship and deal an additional +1 damage when using light or one-handed weapons on a ship.`,
    },
    {
    id: "cosmopolitan",
    name: "Cosmopolitan",
    categories: ["Skill Feats"],
    markdownContent: `# Cosmopolitan
*Living in large, exotic cities has put you in touch with many diverse civilizations, cultures, and races.*

**Benefit:** You can speak and read two additional languages of your choice. In addition, choose two Intelligence-, Wisdom-, or Charisma-based skills. Those skills always count as class skills for you.`,
    },
    {
    id: "criminal-reputation",
    name: "Criminal Reputation",
    categories: ["Skill Feats"],
    changes: `Removed prerequisites.`,
    markdownContent: `# Criminal Reputation
*Your acts of audacious larceny have endeared you to the criminal underworld.*

**Benefit:** You gain a +2 bonus on Diplomacy and Intimidate checks when interacting with criminals, whether they’re individual thieves and cutpurses or criminal organizations.

If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.

These bonuses do not stack with those granted by Persuasive, but this feat counts as Persuasive for the purposes of feats and other rules elements with Persuasive as a prerequisite.`,
    },
    {
    id: "cunning",
    name: "Cunning",
    categories: ["Skill Feats"],
    markdownContent: `# Cunning
*You are particularly devious, and can master more skills than others in the same amount of time.*

**Benefit:** You gain 1 additional skill point per Hit Die. When you take this feat, you gain a number of skill points equal to your Hit Dice right away, and every time your Hit Dice increase in the future, you gain an additional skill point as well.`,
    },
    {
        id: "deceitful",
        name: "Deceitful",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Deceitful
*You are skilled at deceiving others, both with the spoken word and with physical disguises.*

**Benefit:** You get a +1 bonus on Bluff and Disguise skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
    id: "deckhand",
    name: "Deckhand",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Profession (sailor).",
    changes: `Renamed from Galley Slave. Removed former/current slave prerequisite. Applies to all ships, and triggers each round rather than each battle. Lowered damage from +2 to +1.`,
    markdownContent: `# Deckhand
*Your experience as a deckhand has given you some unique insight into the world of sailing and naval combat.*

**Prerequisites:** 1 rank in Profession (sailor).

**Benefit:** You get a +2 circumstance bonus on Profession (sailor) checks made while aboard a ship. When fighting on a ship, your first hit each round deals +1 damage.`,
    },
    {
        id: "deft-hands",
        name: "Deft Hands",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Deft Hands
*You have exceptional manual dexterity.*

**Benefit:** You get a +1 bonus on Disable Device and Sleight of Hand skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
    id: "diabolical-negotiator",
    name: "Diabolical Negotiator",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Diplomacy).",
    changes: `Removed deity restriction.`,
    markdownContent: `# Diabolical Negotiator
*You treat the art of negotiation as devilish science.*

**Prerequisites:** Skill Focus (Diplomacy).

**Benefit:** You can add your Intelligence or Wisdom modifier (whichever is higher) on Diplomacy checks instead of your Charisma modifier. You can shift a creature’s attitude more than two steps with Diplomacy, and a creature’s attitude is only decreased by one step if you roll a natural 1 and fail the check by 5 or more.`,
    },
    {
        id: "dilettante",
        name: "Dilettante",
        categories: ["Skill Feats"],
        prerequisites: "2 ranks each in 5 different Knowledge skills.",
        changes: `Bonus down from +2 to +1. Now stacks with Skill Focus.`,
        markdownContent: `# Dilettante
*What some would call dabbling you call a wide range of interests. Your breadth of knowledge offers unexpected insights in many situations.*

**Benefit:** You gain a +1 bonus on Knowledge checks if you have 1–5 ranks in that skill. You can make untrained Knowledge checks with DCs up to 15.

**Normal:** You may only make untrained Knowledge checks for common knowledge (DC 10 or lower).`,    
    },
    {
    id: "divine-deception",
    name: "Divine Deception",
    categories: ["Skill Feats"],
    prerequisites: "5 ranks in Knowledge (religion), 5 ranks in Use Magic Device.",
    markdownContent: `# Divine Deception
*You are skilled at manipulating divine magical items.*

**Prerequisites:** 5 ranks in Knowledge (religion), 5 ranks in Use Magic Device.

**Benefit:** You gain a +5 bonus on Use Magic Device checks to use divine spell-trigger or spell completion items or to emulate a divine class feature.`,
    },
    {
    id: "druidic-decoder",
    name: "Druidic Decoder",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Linguistics, cannot be a druid.",
    markdownContent: `# Druidic Decoder
*You have a natural understanding of the Druidic language.*

**Prerequisites:** 1 rank in Linguistics, cannot be a druid.

**Benefit:** You gain a +5 bonus on Linguistics checks made to decipher writings in the Druidic language. If you have 10 or more ranks in Linguistics, add Druidic to the list of bonus languages available to you.`,
    },
    {
    id: "eagle-eyed",
    name: "Eagle-Eyed",
    categories: ["Skill Feats"],
    prerequisites: "3 ranks in Perception.",
    markdownContent: `# Eagle-Eyed
*Your distance vision is exceptionally keen, enabling you to see well in both normal and dim lighting conditions and providing you an advantage when making ranged attacks.*

**Prerequisites:** 3 ranks in Perception.

**Benefit:** Your distance modifier to the DC of vision-based Perception checks is decreased to +1 per 50 feet in bright or normal light, or +1 per 20 feet in dim light. You also gain a +2 circumstance bonus on ranged attacks against targets more than 100 feet away.`,
    },
    {
    id: "edge-runner",
    name: "Edge Runner",
    categories: ["Skill Feats"],
    prerequisites: "Dexterity 13.",
    markdownContent: `# Edge Runner
*You move with speed and assurance in places that cause others to fall into danger.*

**Prerequisites:** Dexterity 13.

**Benefit:** You can move at full speed while using Acrobatics to balance on narrow surfaces, and do not become flat-footed or lose your Dexterity bonus to AC while doing so. You also gain a +4 bonus on Climb checks to catch yourself while falling. Additionally, you gain a +4 bonus on saving throws against effects that would cause you to fall into a pit (such as create pit or pit traps). This bonus does not apply to your CMD against bull rush or trip attacks.`,
    },
    {
    id: "empty-threats",
    name: "Empty Threats",
    categories: ["Skill Feats"],
    prerequisites: "5 ranks in Bluff.",
    markdownContent: `# Empty Threats
*You have a gift for making authentic-sounding threats you never intend to follow through on.*

**Prerequisites:** 5 ranks in Bluff.

**Benefit:** You can use the Bluff skill to demoralize opponents in combat instead of Intimidate. You can attempt a Bluff check in place of an Intimidate check when using the Dazzling Display feat and feats that list Dazzling Display as a prerequisite. If you use Bluff to demoralize, you cannot use it to feint until the beginning of your next turn, and vice versa.`,
    },
    {
    id: "esoteric-linguistics",
    name: "Esoteric Linguistics",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Linguistics).",
    markdownContent: `# Esoteric Linguistics
*You can decipher even the most exotic of writings, including those that contain magic.*

**Prerequisites:** Skill Focus (Linguistics).

**Benefit:** You can attempt a Linguistics check in place of a Use Magic Device check to activate a scroll, or in place of a Spellcraft check to identify a scroll. You must still have (or emulate) the ability score required to cast a spell of the desired level, and you cannot use Linguistics on the check to emulate the required ability score.`,
    },
    {
        id: "exotic-heritage",
        name: "Exotic Heritage",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Exotic Heritage
*Your blood carries hints of an extraplanar ancestor, granting you a talent for a certain skill.*

**Benefit:** Choose a skill. You gain a +1 bonus on skill checks with that skill. If you have 10 or more ranks in the chosen skill, this bonus increases to +2. This bonus does not stack with that granted by Skill Focus. This feat counts as Skill Focus with the chosen skill for the purpose of meeting the prerequisites of the Eldritch Heritage feat. When you select Eldritch Heritage, if you use this feat as a prerequisite, you can choose a mutated version of your chosen bloodline as though you were a sorcerer with the wildblooded archetype. All other restrictions and requirements of Eldritch Heritage still apply.`,    
    },
    {
    id: "expert-boarder",
    name: "Expert Boarder",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Profession (sailor).",
    changes: `Removed faction prerequisite. Added profession prerequisite.`,
    markdownContent: `# Expert Boarder
*You are as comfortable dangling from a ship’s rigging as you are on stable land.*

**Prerequisites:** 1 rank in Profession (sailor).

**Benefit:** Acrobatics and Climb are class skills for you. You gain a +2 bonus on Acrobatics and Climb checks to climb or swing on a rope or ship’s rigging. You do not provoke attacks of opportunity from climbing or swinging on a rope or ship’s rigging.`,
    },
    {
    id: "expert-cartographer",
    name: "Expert Cartographer",
    categories: ["Skill Feats"],
    prerequisites: "3 ranks in Profession (Cartographer).",
    changes: `Adjusted for Crafts & Professions.`,
    markdownContent: `# Expert Cartographer
*You are skilled at drawing quality maps, making your cartographic works both more useful and more valuable when sold.*

**Prerequisites:** 3 ranks in Profession (Cartographer).

**Benefit:** You gain a +4 bonus on Profession (Cartographer) checks when creating a map, as well as 1 additional Discovery Point (see Discovery Points). If you succeed at the check by 5 or more, the list price of the map increases by 20%.`,
    },
    {
    id: "expert-explorer",
    name: "Expert Explorer",
    categories: ["Skill Feats"],
    prerequisites: "5 ranks in Knowledge (nature) or Survival.",
    markdownContent: `# Expert Explorer
*You are trained to seek out the unknown places of the wild and can explore more efficiently than your untrained rivals.*

**Prerequisites:** 5 ranks in Knowledge (nature) or Survival.

**Benefit:** You gain a +2 bonus on skill checks when using the exploration rules to detect features in a territory. If you succeed at such a skill check by 5 or more, you gain an additional 1d4 Discovery Points.`,
    },
    {
    id: "expert-salvager",
    name: "Expert Salvager",
    categories: ["Skill Feats"],
    prerequisites: "2 ranks in any Profession skill, 2 ranks in Spellcraft.",
    changes: `Adjusted for Crafts & Professions.`,
    markdownContent: `# Expert Salvager
*You are adept at foraging and salvaging raw materials from even the most seemingly sparse of environments.*

**Prerequisites:** 2 ranks in any Profession skill, 2 ranks in Spellcraft.

**Benefit:** You gain a +4 bonus on Profession checks for skills in which you have at least 2 ranks, and on Spellcraft checks when crafting items by foraging alchemical supplies and material components, salvaging raw crafting materials, and salvaging raw magical item materials.`,
    },
    {
        id: "falconry",
        name: "Falconry",
        categories: ["Skill Feats"],
        prerequisites: "Charisma 11, Animal Affinity, animal companion class feature.",
        changes: `Lowered Charisma prerequisite from 13.`,
        markdownContent: `# Falconry
    *You know the secret arts of falconry developed by a prestigious family.*

    **Prerequisites:** Charisma 11, Animal Affinity, animal companion class feature.

    **Benefit:** You improve your affinity with birds of prey, such as eagles, falcons, hawks, and owls. You gain a +2 bonus on Animal Handling checks made to train or control birds of prey. In addition, if you have a bird of prey as an animal companion, your animal companion gains one of the following bonuses chosen when gained: a +1 dodge bonus to AC, a +1 morale bonus on all attack rolls, or a +2 morale bonus on all Will saves.`,
    },
    {
    id: "hellcat-stealth",
    name: "Hellcat Stealth",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Stealth), 6 ranks in Stealth.",
    markdownContent: `# Hellcat Stealth
*You are difficult to see in the light.*

**Prerequisites:** Skill Focus (Stealth), 6 ranks in Stealth.

**Benefit:** You may make Stealth checks in normal or bright light even when observed, but at a -10 penalty.

**Normal:** You cannot make Stealth checks while observed.`,
    },
    {
    id: "hide-worker",
    name: "Hide Worker",
    categories: ["Skill Feats"],
    prerequisites: "3 ranks in Profession (Tanner), 3 ranks in Knowledge (nature).",
    changes: `Adjusted for Crafts & Professions.`,
    markdownContent: `# Hide Worker
*You excel at crafting armor made from the hides of animals or monsters.*

**Prerequisites:** 3 ranks in Profession (Tanner), 3 ranks in Knowledge (nature).

**Benefit:** You gain a +4 bonus on Profession (Tanner) checks to create armor or shields from the hides and leathers of living creatures (such as dragonhide). If you succeed at a Profession (Tanner) check to create such items by 5 or more, you also decrease the cost to make the item by 10%.`,
    },
    {
    id: "historian",
    name: "Historian",
    categories: ["Skill Feats"],
    prerequisites: "1 rank in Knowledge (history), 1 rank in Knowledge (local).",
    changes: `Renamed from Osirionology. Removed Golarion-setting prerequisites. Now you choose a specific nation to specialize in its history.`,
    markdownContent: `# Historian
*You have a broad interest in a particular realm or nation, and are something of an authority in one specialized field.*

**Prerequisites:** 1 rank in Knowledge (history), 1 rank in Knowledge (local).

**Benefit:** Pick one nation and one Intelligence-based skill. You gain a +3 bonus on all checks made using that skill in relation to your chosen nation and its people. In addition, you gain a +1 bonus on all other Intelligence-based skill checks made in relation to your chosen nation and its people.`,
    },
    {
        id: "magical-aptitude",
        name: "Magical Aptitude",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Magical Aptitude
*You are skilled at spellcasting and using magic items.*

**Benefit:** You get a +1 bonus on Spellcraft and Use Magic Device skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
    id: "master-delver",
    name: "Master Delver",
    categories: ["Skill Feats"],
    changes: `Removed Golarion-specific prerequisite.`,
    markdownContent: `# Master Delver
*You’ve spent some time delving into forgotten ruins and have learned a little bit to help you survive.*

**Benefit:** You get a +2 bonus on all Knowledge (dungeoneering) checks and Perception checks made to notice traps. Knowledge (dungeoneering) is always a class skill for you.`,
    },
    {
    id: "master-of-knowledge",
    name: "Master of Knowledge",
    categories: ["Skill Feats"],
    prerequisites: "Intelligence 17, Skill Focus (Knowledge [any]).",
    changes: `Removed deity restriction.`,
    markdownContent: `# Master of Knowledge
*In times of need, you have the answers.*

**Prerequisites:** Intelligence 17, Skill Focus (Knowledge [any]).

**Benefit:** Choose a single Knowledge skill with which you have Skill Focus. Once per day, when you wish to make a check with that Knowledge skill, you need not roll and may treat the result as a natural 20 instead.`,
    },
    {
    id: "master-swimmer",
    name: "Master Swimmer",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Swim), 10 ranks in Swim.",
    markdownContent: `# Master Swimmer
*You’ve trained at swimming in combat and over long distances for so long that you can move through the water like a native.*

**Prerequisites:** Skill Focus (Swim), 10 ranks in Swim.

**Benefit:** You gain a swim speed of 30 feet or your unmodified base land speed, whichever is slower; your racial bonus on Swim checks for having a swim speed is +2, instead of +8.`,
    },
    {
    id: "maze-expert",
    name: "Maze Expert",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Survival), 5 ranks in Survival.",
    markdownContent: `# Maze Expert
*You have a near-perfect sense of direction.*

**Prerequisites:** Skill Focus (Survival), 5 ranks in Survival.

**Benefit:** You gain a +4 bonus on Survival checks to avoid becoming lost and to determine whether you are lost. You also gain a +4 bonus on Intelligence checks to navigate mazes, including to escape a maze spell. Once per day, you can use your intuition to determine whether traveling a particular direction from a fork in the road (or other junction) might be productive or dangerous. This functions like the augury spell, except it provides weal or woe based on traveling in that direction.`,
    },
    {
    id: "mobile-acrobat",
    name: "Mobile Acrobat",
    categories: ["Skill Feats"],
    prerequisites: "Racial bonus to Dexterity.",
    markdownContent: `# Mobile Acrobat
*You harness your acrobatic momentum to quickly propel yourself forward.*

**Prerequisites:** Racial bonus to Dexterity.

**Benefit:** When attempting an Acrobatics check that would reduce your speed, treat your base speed as 10 feet faster before making speed reductions.`,
    },
    {
    id: "monster-spotter",
    name: "Monster Spotter",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Knowledge [Any]), 3 ranks in Knowledge (Any).",
    markdownContent: `# Monster Spotter
*Your knowledge of strange life forms makes you adept at piercing their disguises and detecting their hiding places.*

**Prerequisites:** Skill Focus (Knowledge [Any]), 3 ranks in Knowledge (Any).

**Benefit:** You can substitute a Knowledge skill for opposed Perception checks against creatures’ Disguise and Stealth checks, and for Survival checks to track creatures. You must have 3 ranks in the Knowledge skill that corresponds to the creature’s type.`,
    },
    {
    id: "monstrous-disguise",
    name: "Monstrous Disguise",
    categories: ["Skill Feats"],
    prerequisites: "5 ranks in Disguise, 5 ranks in Knowledge (nature).",
    markdownContent: `# Monstrous Disguise
*You can disguise yourself as a monstrous humanoid.*

**Prerequisites:** 5 ranks in Disguise, 5 ranks in Knowledge (nature).

**Benefit:** You can use the Disguise skill to emulate creatures of the monstrous humanoid type, at a –5 penalty. Creating a monstrous humanoid disguise takes 1d3 hours.`,
    },
    {
    id: "natural-pathseeker",
    name: "Natural Pathseeker",
    categories: ["Skill Feats"],
    prerequisites: "Favored terrain class feature.",
    markdownContent: `# Natural Pathseeker
*You use your surroundings to overcome obstacles.*

**Prerequisites:** Favored terrain class feature.

**Benefit:** While you’re in any of your favored terrains, you apply half your favored terrain bonus to Acrobatics, Climb, and Swim skill checks.`,
    },
    {
    id: "natural-poison-harvester",
    name: "Natural Poison Harvester",
    categories: ["Skill Feats"],
    prerequisites: "6 ranks in Profession (Toxicologist), 6 ranks in Survival.",
    changes: `Adjusted for Crafts & Professions.`,
    markdownContent: `# Natural Poison Harvester
*You are exceedingly proficient at harvesting and distilling poison from venomous monsters.*

**Prerequisites:** 6 ranks in Profession (Toxicologist), 6 ranks in Survival.

**Benefit:** You gain a +2 bonus on Profession (Toxicologist) checks when creating poison harvested from poisonous monsters. When you successfully craft such poisons, the DC of the poison increases by 2.`,
    },
    {
    id: "natural-poison-harvester-improved",
    name: "Natural Poison Harvester, Improved",
    categories: ["Skill Feats"],
    prerequisites: "Natural Poison Harvester, 9 ranks in Profession (Toxicologist), 9 ranks in Survival.",
    changes: `Combined with Natural Poison Antitoxin. Adjusted for Crafts & Professions.`,
    markdownContent: `# Natural Poison Harvester, Improved
*You excel at harvesting poison from the many toxic creatures of the natural world.*

**Prerequisites:** Natural Poison Harvester, 9 ranks in Profession (Toxicologist), 9 ranks in Survival.

**Benefit:** When you successfully harvest poison from a hazard or dead creature, you gain an additional 1d4 doses of poison.

Additionally, when you succeed at a Profession (Toxicologist) check to create an antitoxin using a dose of a natural poison you harvested, you increase the duration of the antitoxin to 4 hours plus an additional hour for every 5 by which your result exceeds the DC.`,
    },
    {
        id: "nature-soul",
        name: "Nature Soul",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Nature Soul
*You are innately in tune with nature and venerate the power and mystery of the natural world.*

**Benefit:** You get a +1 bonus on Knowledge (Nature) and Survival skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
    id: "needle-in-a-haystack",
    name: "Needle in a Haystack",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Perception), 3 ranks in Perception.",
    markdownContent: `# Needle in a Haystack
*Once you have even the trace of a creature you’re tracking, you can’t be thrown off the trail.*

**Prerequisites:** Skill Focus (Perception), 3 ranks in Perception.

**Benefit:** You can use Perception (rather than Survival) to follow tracks. After you track a creature using Perception, you gain a +2 insight bonus on Perception checks to avoid being surprised by that creature for 1 hour. If you have 10 or more ranks in Perception, this bonus increases to +4.`,
    },
    {
    id: "nightmare-scars",
    name: "Nightmare Scars",
    categories: ["Skill Feats"],
    changes: `Removed deity restrictions and effects.`,
    markdownContent: `# Nightmare Scars
*You bear scars in honor of higher powers, whether because you injured yourself in their name or because they saw fit to bless you with them.*

**Benefit:** You gain a +2 bonus on Diplomacy and Handle Animal checks to affect the attitudes of magical beasts and monstrous humanoids. You take a –2 penalty on Diplomacy and Handle Animal checks to affect the attitudes of all other types of creatures. You also gain a +2 bonus on Intimidate checks, and take no penalty on Intimidate checks based on your size.`,
    },
    {
    id: "obfuscate-tracks",
    name: "Obfuscate Tracks",
    categories: ["Skill Feats"],
    prerequisites: "3 ranks in Survival.",
    changes: `Combined and condensed with False Trail. False Trail can now be used in Urban Environments. Simplified the bonuses.`,
    markdownContent: `# Obfuscate Tracks
*You can mislead trackers by covering your tracks and creating false trails.*

**Prerequisites:** 3 ranks in Survival.

**Benefit:** You can increase the DC of Survival checks to track you by 5 at full speed rather than half speed. You can cover the tracks of a number of allies within 30 feet equal to your Wisdom modifier plus half your character level, increasing the DC to track them by the same amount.

Additionally, you can create false trails using misleading footprints, discarded items, torn scraps of clothing, and other signs. You must determine the direction the false trail leads.

A creature tracking you must succeed at a Perception or Survival check (DC = 10 + half your character level + your Wisdom modifier) to recognize the trail as false when first encountering it. On a success, the creature can continue tracking as normal and recognizes the ruse.

A creature that fails to identify a false trail follows it for the determined distance based on the time you spent creating it, then can attempt another Perception or Survival check with a cumulative +5 bonus to recognize the false trail. Each failure extends the trail’s direction by an additional mile before making a new check.

- **Quick:** Takes 10 minutes to create. Follows for 1d4 × 1,000 feet if not recognized.
- **Normal:** Takes 1 hour to create. Follows for 1d4 miles if not recognized.
- **Elaborate:** Takes 4 hours to create. Follows for 2d6 miles if not recognized.

**Special:** If you have the favored terrain class feature and are in that terrain, add your favored terrain bonus to the DC to track you or your allies.`,
    },
    {
    id: "one-eye-open",
    name: "One Eye Open",
    categories: ["Skill Feats"],
    prerequisites: "Wisdom 13, Alertness.",
    markdownContent: `# One Eye Open
*Your senses seek out threats even while you sleep.*

**Prerequisites:** Wisdom 13, Alertness.

**Benefit:** The DCs of your Perception checks don’t increase when you are asleep. If you succeed at a Perception check to notice something dangerous while asleep, you can wake up to confront the danger.

**Normal:** The DC for a Perception check attempted by a sleeping creature increases by 10.`,
    },
    {
    id: "one-with-the-land",
    name: "One with the Land",
    categories: ["Skill Feats"],
    prerequisites: "Favored terrain class feature.",
    markdownContent: `# One with the Land
*Your connection to your favored terrain is so intense that you draw strength from the power of nature itself.*

**Prerequisites:** Favored terrain class feature.

**Benefit:** In your favored terrain, you require only half the normal amount of food, water, and sleep, and your rate of natural healing is doubled. You add half your favored terrain bonus as a bonus on saving throws and Constitution checks to stave off the effects of cold exposure, heat exposure, starvation, and thirst in your favored terrain.`,
    },
    {
    id: "oracular-intuition",
    name: "Oracular Intuition",
    categories: ["Skill Feats"],
    prerequisites: "Mystery class feature.",
    markdownContent: `# Oracular Intuition
*You are highly sensitive to magic and changes in a person’s demeanor.*

**Prerequisites:** Mystery class feature.

**Benefit:** You get a +2 bonus on Sense Motive checks and Spellcraft checks. If you have 10 or more ranks in one of these skills, the bonus increases to +4 for that skill.`,
    },
    {
    id: "orator",
    name: "Orator",
    categories: ["Skill Feats"],
    prerequisites: "Skill Focus (Linguistics).",
    markdownContent: `# Orator
*You’re able to construct statements and commands that are much more convincing than their content would otherwise suggest.*

**Prerequisites:** Skill Focus (Linguistics).

**Benefit:** You can use a Linguistics check in place of a Bluff check to tell a falsehood or conceal information, in place of a Diplomacy check to change the attitude of a creature, or in place of an Intimidate check to force a creature to cooperate. You must deliver your attempt in a language the target understands.`,
    },
    {
    id: "pacify-animal",
    name: "Pacify Animal",
    categories: ["Skill Feats"],
    prerequisites: "Wild Empathy.",
    markdownContent: `# Pacify Animal
*You are able to calm rampaging animals.*

**Prerequisites:** Wild Empathy.

**Benefit:** As a full-round action, you attempt to modify an animal or magical beast with an Intelligence score of 1 or 2 and an attitude of Hostile toward you or your allies. You attempt a Handle Animal check (DC = 10 + the target’s Hit Dice + the target’s Charisma modifier). If you succeed, the target’s attitude toward you and your allies becomes indifferent for 1 minute, and it does not attack during this time. If the target is attacked during this time or if the target can see you or your allies after 1 minute, it becomes hostile again. A creature can be affected by this pacification attempt only once in a 24-hour period.

**Special:** Animal companions and creatures under magical compulsion are harder to pacify; the DC for such creatures equals 15 + the target’s Hit Dice + the target’s Charisma modifier. An animal companion also applies its bonus on Will saves from the devotion ability to this DC, and attacking the animal’s master also breaks this effect. An animal companion’s master can direct the animal to attack again, but the DC of this Handle Animal check is increased by your wild empathy modifier.`,
    },

    {
        id: "persuasive",
        name: "Persuasive",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Persuasive
*You are skilled at swaying attitudes and intimidating others into your way of thinking.*

**Benefit:** You get a +1 bonus on Diplomacy and Intimidate skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
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
        id: "prodigy",
        name: "Prodigy",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Prodigy
*You are naturally skilled at arts, professions, and the acquisition of knowledge.*

**Benefit:** Choose two Perform, or Profession skills in any combination (two Perform skills, a Perform skill and a Profession skill, and so on). You receive a +1 bonus on checks with these skills. If you have 10 or more ranks in any one of these skills, the bonus increases to +2 for that skill.

**Special:** You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to two new skills.`,    
    },
    {
        id: "self-sufficient",
        name: "Self-Sufficient",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Self-Sufficient
*You know how to get along in the wild and how to effectively treat wounds.*

**Benefit:** You get a +1 bonus on Heal and Survival skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "skill-focus",
        name: "Skill Focus",
        categories: ["Skill Feats"],
        changes: `Bonus down from +3/+6 to +2/+4.`,
        markdownContent: `# Skill Focus
*Choose a skill. You are particularly adept at that skill.*

**Benefit:** You get a +2 bonus on all checks involving the chosen skill. If you have 10 or more ranks in that skill, this bonus increases to +4.

**Special:** You can gain this feat multiple times. Its effects do not stack. Each time you take the feat, it applies to a new skill.`,    
    },
    {
        id: "stealthy",
        name: "Stealthy",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2.`,
        markdownContent: `# Stealthy
*You are good at avoiding unwanted attention and slipping out of bonds.*

**Benefit:** You get a +1 bonus on Escape Artist and Stealth skill checks. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
    },
    {
        id: "street-smarts",
        name: "Street Smarts",
        categories: ["Skill Feats"],
        changes: `Bonus down from +2/+4 to +1/+2. Now stacks with Alertness.`,
        markdownContent: `# Street Smarts
*You are able to navigate the streets and personalities of whatever locale you run across.*

**Benefit:** You get a +1 bonus on Knowledge (local) and Sense Motive checks, and Knowledge (local) is always a class skill for you. If you have 10 or more ranks in one of these skills, the bonus increases to +2 for that skill.`,    
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
