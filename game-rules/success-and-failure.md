---
description: >-
  Many situations have a degree of uncertainty, requiring the indifferent
  randomness of dice to determine the outcome.
---

# Success & Failure

## Dice

_Dromissium_ uses several kinds of polyhedral **dice**. Sets of these can be found both in game stores as well as online. Computer programs, websites, and other tools can be used in lieu of physical dice as well.

The following kinds of polyhedral dice are used:

* The 20-sided die, or **d20**, is the most commonly used die in the game. It is typically used to determine whether something succeeds or fails, and how severely.
* The 12-sided die, or **d12**.
* The 10-sided die, or **d10**. This die works a bit differently: It is numbered 0–9, but when rolled on its own, a 0 is treated as 10. Numbers between 1 and 100 can be generated using a pair of these, also known as percentile dice, or **d100**. One of the pair is multiplied by ten, and then they are added together, with a total result of 0 being treated as 100. Some d10s called "percentile dice" are specially marked to be used in this way, displaying multiples of ten on its faces 00–90. When something specifies a percent chance, a d100 is used.
* The 8-sided die, or **d8**.
* The 6-sided die, or **d6**.
* The 4-sided die, or **d4**.
* A coin, or **d2**. These are rarely used, and are not included in polyhedral dice sets.

When dice are used, the rules specify how many dice, what kind of dice, and other information. For example, `3d6+7` would mean rolling three six-sided dice, adding their results together, and adding 7 to the total.

### Dice Modifiers

Sometimes, special symbols called **dice modifiers** will appear to indicate special information about a roll. For example, `2d20🔼` _\*\*_would indicate keeping the highest result out of the two twenty-sided dice.

#### `🔼` **Advantage**

The highest result out of the group of dice is kept rather than added, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next highest die.

#### `🔽` **Disadvantage**

The lowest result out of the group of dice is kept rather than added, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next lowest die.

#### `💥` **Exploding**

If the result of a die is the maximum number, \(e.g., a result of 6 on a d6\), the dice is rerolled and added to the total. This process may be repeated as long as the result is the maximum number.

#### `🔄` **Reroll**

If the result of a die is the minimum number, \(e.g., a result of 1 on a d20\), the dice may be rerolled once. The new result must be used. If the symbol is repeated more than once, the minimum range increases by 1 for each symbol \(e.g., `1d20🔄🔄🔄` permits a reroll with a result of 1–3 on a d20\).

## Checks

Many situations have a degree of uncertainty, requiring the indifferent randomness of dice to determine the outcome. **Checks** use dice to determine how luck plays into the situation, and together with a character's natural abilities determine the outcome of a situation: positive, negative, or anywhere in-between.

Checks are resolved as follows:

1. Roll the d20\(s\), applying dice modifiers. See the rules on **proficiency** to determine how many dice to use [here](ability-scores-and-skills.md#proficiency).
2. All checks are based on one of the six **ability scores**. Find the ability score applicable to the check, and add it directly to the total. Skills are listed under their corresponding ability score. Other actions, such as attacks and spells, specify which ability score to use. See the rules on ability scores [here](ability-scores-and-skills.md#ability-scores).
3. Add **dominance**, **threat**, and any other circumstantial bonus or penalty applicable to the check, such as those created by abilities or the environment.
4. Generally, two parties make checks against each other in a contest, but sometimes one party makes a check against a static number called **difficulty**. Regardless, the party with the higher number wins.

{% hint style="info" %}
Ties are always broken in favor of the party using a reactive skill, or the difficulty if there is one. In rare situations where both parties are using active skills, ties are treated as ties and no progress in favor of either party is made. See [here](ability-scores-and-skills.md#list-of-skills) for a description of active vs. reactive rules.
{% endhint %}

{% hint style="warning" %}
It is important for the storyteller to remember "degrees of success"; meaning that success and failure does not have to be precise. A successful check might only mean progress towards a desirable goal, and failure might only be a temporary setback.
{% endhint %}

### Difficulty

Some situations require a check, but a contest isn't applicable. Such situation include lifting a heavy box, resisting the harmful effects of a poisoned drink, or tying a knot in the midst of a furious typhoon. In these cases, a check is made against a static number called **difficulty**. Below is a table to help illustrate the range of difficulty, and when to use them:

| Difficulty | Result | Examples |
| :--- | :--- | :--- |
| Trivial | 0–4 | Noticing something in plain sight |
| Easy | 5–9 | Finding an uncommon book in a library |
| Moderate | 10–14 | Breaking down a typical wooden door |
| Hard | 15–19 | Learning a new language over the course of a month |
| Punishing | 20–24 | Smithing a magical weapon |
| Insane | 25–29 | Free-climbing an icy cliff in a thunderstorm |
| Impossible | 30+ | Inventing a completely new type of spell |

{% hint style="danger" %}
Not all situations have a degree of uncertainty at all. The Storyteller has the right to determine success or failure without a check.
{% endhint %}

### Margin of Success or Failure

Some effects and abilities may specify additional consequences for the amount by which a check is passed or failed by. If the check was against difficulty, the margin of success or failure is simply the difference between the result of the check and the difficulty. In the event of a contest, each party has a margin of success or failure, calculated by subtracting one's own result from the result of the opposing party.

### Triumph & Disaster

When making a check, the d20 may produce a 1 or a 20. These fairly rare rolls trigger **triumph** and **disaster**, reflecting the extremes of both good and bad luck.

In a contest, if both parties get triumph or disaster, they cancel out and are ignored. If one party gets triumph and another gets disaster, both apply.

If the unmodified result of the roll is 20 \(after dice modifiers\), this triggers triumph. When triumph occurs, something good should occur in addition to the normal consequences of the check's result. The storyteller will decide what this additional benefit is according to the situation.

If the unmodified result of the roll is 1 \(after dice modifiers\), this triggers disaster. When disaster occurs, something bad should occur in addition to the normal consequences of the check's result. The storyteller will decide what this additional drawback is according to the situation.

Some effects may increase the possibility of triumph or disaster by increasing the amount of "natural" dice results that trigger them. These effects will specify the new range, such as "1–3" or "18–20".

### Dominance & Threat

Sometimes, circumstances alter the likelihood of success, such attempting to enter a noble's mansion while having a good local reputation, or trying to haggle prices with a merchant whom you just offended. **Dominance** adds a bonus d4 to a check, reflecting a positive circumstance, while **threat** is the opposite: a penalty d4 that is subtracted from a check.

If you have both dominance and threat, they cancel out—however, both dominance and threat stack. Trying to shoot a target while being blind, drunk, and both arms broken, but having a magic target-seeking arrow might warrant three threats and one dominance, ultimately resulting in just two threats applied to the check.

