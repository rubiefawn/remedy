# Success & Failure

## Dice

The game uses several kinds of polyhedral dice. Sets of these can be found both in game stores as well as online. Computer programs, websites, and other tools can be used in lieu of physical dice as well. The following kinds of dice are used:

{% tabs %}
{% tab title="d20" %}
The 20-sided die, or **d20**, is the most commonly used die in the game, used to resolve events, determining success or failure.
{% endtab %}

{% tab title="d12" %}
The 12-sided die, or **d12**.
{% endtab %}

{% tab title="d10" %}
The 10-sided die, or **d10**. This die works a bit differently: It is numbered 0–9, but a 0 is treated as 10. Numbers between 1 and 100 can be generated using a pair of these, also known as percentile dice, or **d100**. One of the pair is multiplied by ten, and then they are added together, with a 0 being treated as 100. Some d10s are specially marked to be used in this way, displaying multiples of ten on its faces 00–90.
{% endtab %}

{% tab title="d8" %}
The 8-sided die, or **d8**.
{% endtab %}

{% tab title="d6" %}
The 6-sided die, or **d6**.
{% endtab %}

{% tab title="d4" %}
The 4-sided die, or **d4**.
{% endtab %}
{% endtabs %}

When dice are used, the rules specify how many dice, what kind of dice, and other information. For example, `3d6+7` would mean rolling three six-sided dice, adding their results together, and adding 7 to the total.

### Dice Modifiers

Sometimes, special symbols called modifiers will appear to indicate special information about a roll. For example, `2d20▲` ****would indicate keeping the highest result out of the two twenty-sided dice. Here are all such symbols:

* `▲` **Advantage:** the highest result out of the group of dice is kept, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next highest die.
* `▼` **Disadvantage:** the lowest result out of the group of dice is kept, and the other dice are ignored. If the symbol is repeated more than once, the number of dice kept increases by 1 for each symbol, keeping the next lowest die.
* `!` **Exploding:** if the result of a die is the maximum number, \(e.g., a result of 6 on a d6\), the dice is rerolled and added to the total. This process may be repeated as long as the result is the maximum number.
* `♻` **Reroll:** if the result of a die is the minimum number, \(e.g., a result of 1 on a d20\), the dice may be rerolled once. The new result must be used. If the symbol is repeated more than once, the minimum range increases by 1 for each symbol \(e.g., `1d20♻♻♻` permits a reroll with a result of 1–3 on a d20\).

## Checks

Many situations have a degree of uncertainty, requiring the indifferent randomness of dice to determine the outcome. These are called checks, and use the 20-sided die. Here are the steps to resolving a check:

1. **Roll the dice:** roll the d20\(s\), applying dice modifiers. See the rules on [aptitude](skills.md#aptitude) and [mastery](skills.md#mastery) to figure out how many d20s to use.
2. **Add applicable ability score:** all checks are based on one of the [six ability scores](skills.md). Find the ability applicable to the check, and add its score directly to the total. Skills are listed under their corresponding ability score. Other actions, such as attacks and spells, specify which ability score to use.
3. **Apply circumstantial bonuses and penalties:** add [dominance](success-and-failure.md#dominance-and-threat), [threat](success-and-failure.md#dominance-and-threat), and any other bonus or penalty applicable to the check, such as those created by spells or abilities.
4. **Compare the result to a target number:** generally, two parties make checks against each other in a contest, but sometimes one party makes a check against a static number called a [difficulty class \(or DC\)](success-and-failure.md#difficulty-class). The party with the higher number wins.

{% hint style="info" %}
Ties are always broken in favor of the party using a reactive skill, or the difficulty class if there is one.
{% endhint %}

### Difficulty Class

Some situations require a check, but a contest isn't applicable. Such situation include lifting a heavy box, resisting the harmful effects of a poisoned drink, or tying a knot in the midst of a furious typhoon. In these cases, a check is made against a difficulty class. Below is a table to help illustrate the range of difficulty classes, and when to use them:

| Difficulty | DC | Examples |
| :--- | :--- | :--- |
| Trivial\` | 0–4 | Noticing something in plain sight |
| Easy | 5–9 | Finding an uncommon book in a library |
| Moderate | 10–14 | Breaking down a typical wooden door |
| Hard | 15–19 | Learning a language in a week |
| Punishing | 20–24 | Smithing a magical weapon |
| Insane | 25–29 | Free-climbing an icy cliff in a thunderstorm |
| Impossible | 30+ | Inventing a completely new type of spell |

{% hint style="danger" %}
Not all situations have a degree of uncertainty at all. The Storyteller has the right to determine success or failure without a check. No, you cannot seduce the killer robot.
{% endhint %}

## Triumph & Disaster

When making a check, the d20 may produce a 1 or a 20. These fairly rare rolls trigger triumph and disaster, reflecting the extremes of both good and bad luck.

In a contest, if both parties get triumph or disaster, they cancel out and are ignored. If one party gets triumph and another gets disaster, both apply.

### Disaster

If the natural \(or unmodified\) result of the roll is 1 \(after dice modifiers\), this triggers disaster. Regardless of what the result would normally be, the ability roll fails. The Storyteller should also impose additional negative effects as part of disaster.

{% hint style="info" %}
Some rare effects may increase the possibility of disaster by increasing the amount of natural numbers that trigger it. These effects will specify the range, such as "1–3".
{% endhint %}

### Triumph

If the natural result of the roll is 20 \(after dice modifiers\), this triggers triumph. Regardless of what the result would normally be, the ability roll succeeds. The Storyteller should also impose additional positive effects as part of triumph. Triumph on an attack roll causes a critical hit.

{% hint style="info" %}
Some rare effects may increase the possibility of triumph by increasing the amount of natural numbers that trigger it. These effects will specify the range, such as "18–20".
{% endhint %}

{% hint style="danger" %}
Triumph guarantees success. The Storyteller should be cautious and disallow ability rolls for truly impossible tasks, such as dead-lifting an entire castle or lying to a god of truth.
{% endhint %}

## Dominance & Threat

Sometimes, circumstances alter the likelihood of success, such attempting to enter a guarded castle while having a good reputation or trying to barter prices with a merchant whom you just offended. Dominance adds a bonus d6 to a check, reflecting a positive circumstance, while threat is the opposite: a penalty d6 that is subtracted from a check.

If you have both dominance and threat, they cancel out—however, both dominance and threat stack. Trying to shoot a target while being blind, drunk, and both arms broken, but having a magic target-seeking arrow might warrant three threats and one dominance, ultimately resulting in just two threats applied to the check.

