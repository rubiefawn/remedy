# ![Dromissium logo](assets/icon.svg) Dromissium 0.0.14-i
# Part 1: Rules

Those who play this game have one of two different roles: a Player Character (or PC), or a Storyteller. The Storyteller acts as a game referee and provides an environment with which the Player Characters may interact, explore, and have adventures in.

## General Assumptions

### Round Down

Whenever you divide a number, round down, regardless how close the fractional value is to the nearest integer.

### Specific Overrides General

Many rules are presented as general assumptions about how the game will proceed, and are contradicted by other rules specific to a situation, spell, ability, etc. In these situations, the specific rule takes priority.

### Storyteller Has The Last Word

While these rules are intended to be followed as written, the Storyteller has the authority to modify or reinterpret any of them. Be careful, though; unfair modifications can drain the fun out of an entire game.

## Dice

The game uses several kinds of polyhedral dice. Sets of these can be found both in game stores as well as online. Computer programs, websites, and other tools can be used in lieu of physical dice as well. The following kinds of dice are used:

- The 20-sided die, or **d20**. This is the most commonly used die in the game, used to resolve events, determining success or failure.

- The 12-sided die, or **d12**.

- The 10-sided die, or **d10**. This die works a bit differently. It is numbered 0–9, but a 0 is treated as 10. Numbers between 1 and 100 can be generated using a pair of these, also known as percentile dice, or **d100** (also known as a **d%**). One of the pair is multiplied by ten, and then they are added together, with a 0 being treated as 100. Some d10s are specially marked to be used in this way, displaying multiples of ten on its faces 00–90.

- The 8-sided die, or **d8**.

- The 6-sided die, or **d6**.

- The 4-sided die, or **d4**.

When dice are used, the rules specify how many dice, what kind of dice, and other information. For example, **3d6+7** would mean rolling three six-sided dice, adding their results together, and adding 7 to the total. Sometimes, special symbols will appear to indicate special information about a roll. For example, **2d6<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f525.svg?sanitize=true" height="18">** would indicate 2d6 fire damage, and **2d20<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f53a.svg?sanitize=true" height="18">** would indicate keeping the highest result out of the two twenty-sided dice. Here are all such symbols:

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f53a.svg?sanitize=true" height="18"> Advantage**: the highest result out of the group of dice is kept, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next highest die.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f53b.svg?sanitize=true" height="18"> Disadvantage**: the lowest result out of the group of dice is kept, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next lowest die.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2757.svg?sanitize=true" height="18"> Exploding**: if the result of a die is the maximum number, (e.g., a result of 6 on a d6), the dice is rerolled and added to the total. This may be repeated as long as the result is the maximum number.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f504.svg?sanitize=true" height="18"> Reroll**: if the result of a die is the minimum number, (e.g., a result of 1 on a d20), the dice may be rerolled once. The new result must be used. If the symbol is repeated more than once, the minimum range increases by 1 for each symbol (e.g., **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f504.svg?sanitize=true" height="18"><img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f504.svg?sanitize=true" height="18"><img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f504.svg?sanitize=true" height="18">** permits a reroll with a result of 1–3 on a d20).

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f9ea.svg?sanitize=true" height="18"> Acid**: indicates acid damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2744.svg?sanitize=true" height="18"> Cold**: indicates cold damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f4a2.svg?sanitize=true" height="18"> Battering**: indicates battering damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/26a1.svg?sanitize=true" height="18"> Electric**: indicates electric damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f525.svg?sanitize=true" height="18"> Fire**: indicates fire damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f9e0.svg?sanitize=true" height="18"> Psychic**: indicates psychic damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f31f.svg?sanitize=true" height="18"> Radiant**: indicates radiant damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2623.svg?sanitize=true" height="18"> Toxic**: indicates toxic damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2620.svg?sanitize=true" height="18"> Withering**: indicates withering damage type.

- **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1fa78.svg?sanitize=true" height="18"> Wounding**: indicates wounding damage type.

## Success & Failure

Many situations have a degree of uncertainty, requiring the indifferent randomness of dice to resolve. These are called ability rolls, and use the 20-sided die. Here are the steps to resolving an ability roll:

1. **Roll the dice:** roll the applicable amount of 20-sided dice, determined by the applicable aptitude (see below for rules on aptitude).

2. **Add applicable ability score:** all skill, spells, and weapons are based on one of the six ability scores (see below for rules on ability scores). Find the ability applicable to the roll, and add its score directly to the total.

3. **Apply circumstantial bonuses and penalties:** add dominance, threat, and any other bonus or penalty applicable to the roll, such as those created by spells or abilities.

4. **Compare the result to a target number:** rolls are either compared to the result of someone else's roll, or a static number based on general difficulty. See below for the rules for contests, as well as rolls versus fate.

### Contests

Many rolls require the action of one character or object and the reaction of another character or object. These are called contests, and are the most common kind of roll. When a contest is initiated, both the initiator and the reactor make an applicable ability roll, and whoever has the higher result wins. Ties are always broken in favor of the reactor, and the Storyteller may determine that a contest succeeds or fails automatically, if it is reasonable in the situation (e.g., attempting to seduce a killer robot). Below is a table of examples for common contests, and which skills to use for them. Skills are explained in greater detail later in this rulebook.

| Situation     | **Initiator rolls** | Reactor rolls    |
|:-------------:|:-------------------:|:----------------:|
| Attacking     | Applicable weapon   | Evade            |
| Grappling     | Wrestle             | Resist Restraint |
| Pickpocketing | Steal               | Notice           |
| Haggling      | Persuade            | Judge            |

### Versus Fate

Sometimes, a roll must be made but a contest is not appropriate. Such situations include lifting a heavy box, resisting the harmful effects of a poisoned drink, or tying an effective knot in a stressful situation, etc. These situations are called contests versus fate, and rather than fate rolling, the result is a fixed number determined by the difficulty of the situation, called "the will of fate". Ties are always broken in favor of fate. If the will of fate is greater than the highest number the other party can possibly roll, fate wins the contest immediately without a roll. Below is a reference table for the will of fate. 

| Difficulty        | Will of Fate | Examples                                |
| ----------------- |:-----------:| --------------------------------------- |
| Trivial           | 5–9         | Noticing something in plain sight       |
| Easy              | 10–14       | Finding a specific book in a library    |
| Moderate          | 15–19       | Breaking down a locked wooden door      |
| Hard              | 20–24       | Deciphering an encrypted message        |
| Punishing         | 25–29       | Free-climbing a cliff in a thunderstorm |
| Nearly impossible | 30+         | Inventing a new practice of magic       |

### Aptitude

Aptitude is a reflection of a character's proficiency and skill. A character can have aptitudes for a variety of things, including skills, equipment, weapons, and even spells. Ability rolls without aptitude are **2d20 <img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f53b.svg?sanitize=true" height="18">**. Ability rolls with aptitude are the normal **1d20**. On character sheets, aptitude is denoted by **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/26ab.svg?sanitize=true" height="18">** next to the applicable item.

Not all aptitudes are applicable to rolls. Here are the most common exceptions:

- **Armor:** light, medium, and heavy armor cannot be worn without aptitude of their respective kinds.

- **Language:** a language cannot be read, written, or spoken without aptitude in that language.

#### Mastery

Sometimes a character has expert command over a certain skill or weapon. This is represented by expertise; an upgrade from aptitude. Ability rolls with expertise are **2d20 <img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1f53a.svg?sanitize=true" height="18">**. On character sheets, mastery is denoted by **<img src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/2b50.svg?sanitize=true" height="18">** next to the applicable item.

Not all mastery is applicable to rolls. Here are the most common exceptions:

- **Armor:** mastery with light, medium, or heavy armor allows the disregard of any prerequisites, such as a minimum Strength score, etc.

- **Language:** mastery is not applicable to languages.

### Triumph & Disaster

When making an ability roll, the d20 may produce a 1 or a 20. These fairly rare rolls trigger triumph and disaster, reflecting the extremes of both good and bad luck.

In a contest, if both parties get triumph or disaster, they cancel out and are ignored. If one party gets triumph and another gets disaster, both apply.

#### Disaster

If the natural (or unmodified) result of the roll is 1, this triggers disaster. Regardless of what the result would normally be, the ability roll fails. The Storyteller should also impose additional negative effects as part of disaster. 

#### Triumph

If the natural result of the roll is 20, this triggers triumph. Regardless of what the result would normally be, the ability roll succeeds. The Storyteller should also impose additional positive effects as part of triumph. Triumph on an attack roll causes a critical hit.

Triumph guarantees success. The Storyteller should be cautious and disallow ability rolls for impossible tasks, such as lifting a castle or lying to a god.

### Dominance & Threat

Sometimes, circumstances alter the likelihood of success, such attempting to enter a guarded castle while having a good reputation or trying to barter prices with a merchant whom you just offended. Dominance adds a bonus d6 to a roll, reflecting a positive circumstance, while threat is the opposite: a penalty d6 that is subtracted from a roll. If you have both dominance and threat, they cancel out—however, both dominance and threat stack. Trying to hit a target while being blind, drunk, and set on fire, but having a magic target-seeking arrow might warrant three threats and one dominance, ultimately resulting in just two threats applied to the roll.

## Ability Scores & Skills
Skills are divided into two categories: active skills and reactive skills. Active skills, such as Craft Item and Treat Wound, are employed when "actively" attempting a task, where reactive skills, such as Evade and Judge, are used to "react" to the actions of others through contests. All skills fall under one of the six ability scores: Strength, Agility, Vitality, Erudition, Intuition, and Presence. All skills are listed below, according to their ability score and whether they are active or reactive.

### Strength
Strength represents athleticism and physical power. **Strength directly affects your movement speed and physical attack damage.**

#### Force
This active skill represents brawn or the ability to physically move objects. Force is used to break, lift, open, push, etc.

#### Wrestle
This active skill represents both grip and technique when grabbing, restraining, or wrestling.

#### Resist Restraint
This reactive skill represents the ability to remain unfettered by physical or magical means. Resist Restraint can be used to fight against being tied up with rope, to escape the bite of a giant creature, or to break free from a paralyzing spell.

### Agility
Agility represents reflex and dexterity. **Agility directly affects your initiative and physical attack accuracy.**

#### Sabotage
This active skill represents the subtle methods and steady hand needed to bypass, destroy, or disarm a variety of devices. Sabotage is used to pick locks, disarm traps, or cause devices to malfunction.

#### Sneak
This active skill represents the artistry and cunning of remaining undetected. Sneak is used to disguise oneself, move silently, and steal without being caught.

#### Evade
This reactive skill represents the ability to dodge and parry incoming physical harm. Evade can be used to block a sword, dodge an arrow, or sidestep a trap.

### Vitality
Vitality represents physical fortitude and health. **Vitality directly affects your hit points and stamina.**

#### Resist Death
This reactive skill represents the health and willpower required to hold on to life when death is near. Resist Death can be used to prevent bleeding out or to remain conscious while petrified.

#### Resist Exhaustion
This reactive skill represents endurance and determination required to push on through physically taxing circumstances. Resist Exhaustion can be used to ignore harsh weather, survive without food, or to resist life-draining magic.

#### Resist Toxin
This reactive skill represents constitution and the ability to ignore or resist poisonous substances. Resist Toxin can be used to overcome intoxication or to reduce or ignore harmful effects of poison.

### Erudition
Erudition represents wisdom and intelligence. **Erudition directly affects your aptitudes and spell potency.**

#### Craft Item
This active skill represents the inventive understanding of the construction of items, magical or mundane. Craft Item can be used to build a device from scratch, salvage useful materials, or upgrade an existing item.

#### Craft Spell
This active skill represents the knowledge and comprehension of the arcane. Craft Spell can be used to identify a magical effect, alter an existing spell, or create a new spell.

#### Heal
This active skill represents the steady hand and medical knowledge required to properly treat an ailment. Heal can be used to stitch up a laceration, identify a disease, or to administer the correct antidote for a poison.

#### Navigate
This active skill represents the spatial awareness and memory used when traveling safely. Navigate can be used to draw or understand a map, pilot a ship, or find a safe shortcut through treacherous terrain.

#### Research
This active skill represents both streetwise and scholarly wit used when acquiring new information. Research can be used to identify the manufacturer of an item, learn where an ancient artifact is kept, or understand the cause of a supernatural phenomenon.

#### Reason
This reactive skill represents the mental acuity that allows one to understand logic and identify fallacies. Reason can be used to identify false information or remember critical information in a time of need.

### Intuition
Intuition represents instinct and perception. **Intuition directly affects your magical accuracy.**

#### Inspect
This active skill represents the instinct of knowing what to look for and where. Inspect can be used to find a hidden compartment, notice and read a small inscription, or determine the authenticity of a precious stone.

#### Judge
This reactive skill represents social awareness and insight. Judge can be used to detect a lie or bluff, or to resist bribes and persuasion.

#### Notice
This reactive skill represents physical awareness. Notice can be used to spot a hidden trap, see through a disguise, or feel an evil aura radiating off of an enchanted item.

#### Nullify
This reactive skill represents arcane awareness and resistance. Nullify is used to resist the effects of a variety of spells and other abilities.

### Presence
Presence represents charisma and determination. **Presence directly affects your mana.**

#### Manipulate
This active skill represents cunning and skullduggery. Manipulate is used to coerce, deceive, or intimidate.

#### Perform
This active skill represents charm and theatrics. Perform is used to entertain, orate, and seduce.

#### Persuade
This active skill represents the art of debate. Persuade is used to convince with valid evidence, reason, or appeal.

#### Resist Fear
This reactive skill represents courage and grit. Resist Fear can be used to resist coercion and intimidation, or to stay true in the face of certain death.

#### Resist Possession
This reactive skill represents the strength of individuality. Resist Possession can be used to resist magical domination.

## Adventuring

## Encounters

When a situation arises where every second counts, an encounter begins. Examples of encounters could be combat, a chase, or escaping a collapsing cave. Encounters provide a sense of urgency and rules to back it up.

### Initiative

Once an encounter begins, everyone must roll initiative. Initiative is a temporary score that determines in what order everyone takes their turns. Based purely on luck, initiative rolls are made with 1d100. If a tie occurs, the two parties participate in a Reason contest, with the winner going first.

### Rounds & Turns

Encounters are fast-paced and chaotic. In order to manage this, time is divided into rounds and turns. A round represents about 5–10 seconds of in-game time. Within each round, each participant takes their turn. Turns are taken in order of highest to lowest initiative. When everybody has taken their turn, the next round begins, and the cycle begins again.

This organization of time continues until the Storyteller decides that the encounter has ended.

### Surprise

Certain circumstances may leave one side of an encounter surprised. If the Storyteller determines that an individual or group are surprised, they do not gain any stamina on their first turn (explained below).

### Stamina

Stamina represents how much a creature is physically capable of accomplishing within the course of a round. Each creature has a maximum stamina of 4 + Vitality.

Different things cost stamina during a round. Many actions taken during a turn require stamina, but it can also be used to react to things that happen during others' turns. Stamina is replenished completely at the begininng of a turn.

### Movement

Each turn, each participant in an encounter can move up to an amount equal to their speed (use walking, swimming, or flying speed as applicable). If multiple kinds of movement are used during a turn, the total amount traveled must be less than or equal to the greatest speed used. Movement does not have to be continuous, and can be broken up between other actions during a turn.

You can move through space occupied by another creature, but you cannot end your movement in a space occupied by another creature. In addition, spaces occupied by hostile creatures count as difficult terrain.

#### Difficult Terrain

Some terrain is more difficult to move through than others. Every foot of movement in difficult terrain costs 1 extra foot. Some kinds of difficult terrain may be ignored by certain speeds, such as flying over briars or swimming through water rather than walking. The Storyteller decides what kinds of terrain are difficult, and what movement types are affected.

#### Being Prone

While the prone status effect can describe different kinds of disadvantageous stances, it is most commonly used to describe being knocked down. Standing up to remove this status effect during an encouter costs an amount of movement equal to half your walk speed.

### Actions

Each turn, each participant in an encounter may choose to expend stamina to accomplish a variety of actions. Below is a list of common actions, but the Storyteller may approve additional or even improvised actions as well. Each action is listed with its stamina cost in parentheses.

#### Attack (1+)

#### Cast a Spell (1+)

#### Climb onto a Bigger Creature (2)

#### Dash (2)

#### Disarm (2)

#### Disengage (2)

#### Dodge (2)

#### Help (2)

#### Hide (2)

#### Search (2)

#### Shove (2)

#### Use an Object (1+)

### Holding a Turn

Any participant in an encounter may choose to reduce their initiative score to a minimum of 0 for the rest of the round. This must be declared before their turn is taken, and their original initiative score is restored at the end of their turn.

### Reactions

## Status Effects

Status effects can be either boosts or impairments, affecting a creature’s capabilities for better or worse.

A status effect lasts either until it is removed or for a duration specified by the effect that imposed the status effect. Status effects may come with their own rules on how they can be removed.

Some status effects can be gained multiple times, while others can not. If a status effect does not specify otherwise and it is gained more than once, each instance of the status effect has its own duration but the effect is only applied once.

### Angry

The angry status represents extreme frustration or hatred that clouds one’s thinking.

-  An angry creature suffers threat on all Intuition-based ability rolls.
-  The angry status can be gained more than once.

### Blinded

The blinded status represents temporary or permanent impairment to a sense. When a creature becomes blinded, the imposing effect may specify which sense it blinds (tremorsense, blindsense, sphynxvision, truevision), but if it does not, it is referring to vision & darkvision.

-  A blinded creature automatically fails all ability rolls that require the blinded sense. Blinded creatures also suffer threat on attack and evade rolls.
-  A creature who has more than one applicable sense may ignore the effects of being blinded.

### Crippled

The crippled status represents severe physical impairment not representable through damage.

-  A crippled creature suffers threat on all Strength, Agility, and Vitality-based ability rolls.
-  The crippled status can be gained more than once.

### Deafened

The deafened status represents temporary or permanent impairment to hearing.

-  A deafened creature automatically fails all ability rolls that require hearing.

### Exhausted

The exhausted status represents severe fatigue and strain not representable through damage.

-  An exhausted creature suffers threat on all ability rolls.
-  The exhausted status can be gained more than once. 

### Frightened

The frightened status represents overwhelming terror.

-  A frightened creature cannot willingly move closer to the source or cause of the status.
-  A frightened creature suffers threat on initiative rolls.

### Paralyzed

The paralyzed status represents an inability to move.

-  A paralyzed creature cannot move, speak, or regain stamina.
-  A paralyzed creature automatically fails evade rolls unless the attacker rolls disaster.

### Petrified

The petrified status represents being transformed into a rigid material.

-  A petrified creature is transformed, along with any nonmagical objects it is wearing or carrying, into a solid inanimate substance. While in this state, the creature is immune to toxic damage and cannot gain any other status effects. Any alterations to this rigid form remain after the petrified status is removed.
-  A petrified creature cannot move, speak, or regain stamina.
-  A petrified creature automatically fails evade rolls unless the attacker rolls disaster.
-  The petrified status can be gained up to twice. If a creature has more than one level of the petrified status, it becomes unconscious (see the status effect) until the petrified status ends.

### Poisoned

The poisoned status represents physical, mental, or emotional impairment due to a toxic substance.

-  A poisoned creature suffers threat on ability rolls depending on the source imposing the status. Below is a table of common poisons and which ability rolls they impose threat on.

-  Some poisons and the poisoned status they impose can be cured by an applicable antidote. The Storyteller decides the availability of antidotes.

-  The poisoned status can be gained more than once, but only if each poison is different.

   | **Poison**    | **Affected Ability Rolls**              |
   | ------------- | --------------------------------------- |
   | Alcohol       | Evade, Resist Exhaustion, Judge, Notice |
   | Serpent venom | Resist Restraint, Resist Death          |
   | Truth serum   | Reason, Judge                           |

### Prone

The prone status represents a disadvantageous physical position or stance, usually being knocked down.

-  A prone creature’s only movement option is to crawl. Every foot of movement in this way costs 1 extra foot.
-  A prone creature can end the prone status effect by standing up, at the cost of half their movement.
-  A prone creature suffers threat on attack and evade ability rolls.

### Restrained

The restrained status represents being limited or otherwise bound, being unable to move.

-  A restrained creature’s movement speed becomes 0.
-  A restrained creature suffers threat on attack and evade ability rolls.

### Sick

The sick status represents a physical disorder, such as an infection or illness.

-  A sick creature’s movement speed is halved.
-  A sick creature suffers threat on all Vitality-based ability rolls.
-  The sick status can be gained more than once. If a creature has more than one level of the sick status, it’s speed is not reduced by more than half.

### Stunned

The stunned status represents being staggered or in shock.

-  A stunned creature can’t move, and can speak only falteringly.
-  A stunned creature automatically fails Strength and Agility-based ability rolls.

### Unconscious

The unconscious status represents total mental shutdown, as if asleep.

-  An unconscious creature can’t move, speak, or regain stamina.
-  An unconscious creature is not aware of its surroundings.
-  An unconscious creature automatically fails Strength and Agility-based ability rolls.
-  When a creature becomes unconscious, it drops whatever it is holding and falls to the ground, becoming prone (see the status effect).

# Part 2: Character Options

## Ability Scores

## Creating a Race

## Creating an Origin
`TODO: Explain origins, which are mechanical representations of a backstory`
## Creating Traits
`TODO: Explain traits, which are mainly for character flavor and roleplay but have some mechanical significance`
## Creating a Perk
`TODO: Explain perk trees, which function kind of like a class`

# Part 3: Items

# Part 4: Magic

## Creating a Trick

## Creating a Spell