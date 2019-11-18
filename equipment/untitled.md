---
description: >-
  Armor serves as a protection against different kinds of damage by providing
  defense and soak.
---

# Armor & Shields

Not all attacks can be consistently evaded, and some sources of damage are impossible to dodge at all. Armor serves as a protection against different kinds of damage by providing defense and soak. 

Some creatures have natural armor, which may provide defense and soak.

## 💚 Defense

Defense is a damage threshold. Different armor can provide different amounts of defense against different [damage types](../reference/damage.md#damage-types). If a creature has defense against a type of damage and they would take that type of damage, they may reduce that damage to 0 if the amount of damage is less than or equal to their defense against that damage type.

Defense is ignored if the attacker rolls [triumph](../success-and-failure.md#triumph) or the defender rolls [disaster](../success-and-failure.md#disaster).

## 💜 Soak

Soak is a measurement of damage reduction. Different armor can provide different amounts of soak against different [damage types](../reference/damage.md#damage-types). If a creature has soak against a type of damage and they would take that type of damage, they may reduce that damage by an amount equal to their soak against that damage type. Soak is applied after defense.

Soak is ignored if the attacker rolls [triumph](../success-and-failure.md#triumph) or the defender rolls [disaster](../success-and-failure.md#disaster).

## Armor

Some armor provides an amount of defense or soak that scales with a character's level. `L` is equal to your level, and `l` is equal to your level divided by two \(rounded down\).

{% hint style="warning" %}
### Incompetence

When wearing a kind of armor you lack aptitude with, you suffer [threat](../success-and-failure.md#dominance-and-threat) on all [🏃‍♂️ Resist Restraint](../ability-scores-and-skills.md#resist-restraint), [💨 Evade](../ability-scores-and-skills.md#evasion), and [🤫 Stealth](../ability-scores-and-skills.md#stealth) checks.

### Mastery

When wearing a kind of armor you have mastery with, you may ignore any minimum [💪 Strength](../ability-scores-and-skills.md#strength) requirement.
{% endhint %}

### Light Armor

| Armor | Cost | Defense | Soak | [💪 Strength](../ability-scores-and-skills.md#strength) minimum |
| :--- | :--- | :--- | :--- | :--- |
| Padded | 2 gp | `3+L💚 vs 🩸` | — | -1 |
| Leather | 10 gp | `5+L💚 vs 💢🩸` | — | ±0 |
| Studded leather | 25 gp | `5+L💚 vs 💢🩸` | `1💜 vs 🩸` | +1 |

### Medium Armor

To wear medium armor, you must have a minimum [💪 Strength](../ability-scores-and-skills.md#strength) score of +1.

| Armor | Cost | Defense | Soak | Other |
| :--- | :--- | :--- | :--- | :--- |
| Hide | 8 gp | `4+L💚 vs 💢🩸` | `2💜 vs 🧊🩸` | — |
| Chain shirt | 35 gp | — | `3+l💜 vs 🩸` | — |
| Scale mail | 35 gp | — | `2+l💜 vs 💢🩸` | [Threat](../success-and-failure.md#dominance-and-threat) on [🤫 Stealth](../ability-scores-and-skills.md#stealth) |
| Breastplate | 80 gp | `4💚 vs 🧪` | `4+l💜 vs 💢🩸` | — |
| Half plate | 150 gp | — | `5+l💜 vs 💢🩸` | [Threat](../success-and-failure.md#dominance-and-threat) on [🤫 Stealth](../ability-scores-and-skills.md#stealth) |

### Heavy Armor

While wearing heavy armor, you have [threat](../success-and-failure.md#dominance-and-threat) on [🤫 Stealth](../ability-scores-and-skills.md#stealth) checks and you can't swim.

| Armor | Cost | Defense | Soak | [💪 Strength](../ability-scores-and-skills.md#strength) minimum |
| :--- | :--- | :--- | :--- | :--- |
| Ring mail | 20 gp | `L💚 vs 💢🩸` | `1+l💜 vs 🩸` | +2 |
| Chain mail | 50 gp | `L💚 vs 💢🩸` | `3+l💜 vs 🩸` | +2 |
| Splint | 60 gp | `L💚 vs 💢🧪🩸` | `1+l💜 vs 💢🩸` | +3 |
| Full plate | 300 gp | `L💚 vs 💢🧪🩸` | `5+l💜 vs 💢🩸` | +3 |

## Shields

Shields can also provide defense and soak, but unlike armor, they must be actively used in order to be effective. When a creature you can see damages you with a spell or attack, you can use your [reaction](../encounters.md#reactions) to apply the shield's defense and soak against that damage.

Shields provide an amount of defense or soak that scales with a character's level. `L` is equal to your level, and `l` is equal to your level divided by two \(rounded down\).

{% hint style="warning" %}
### Incompetence

When using shields without aptitude, you must first succeed a DC `10` [💨 Evasion](../ability-scores-and-skills.md#evasion) check or the shield has no effect.

### Mastery

When using shields with mastery, you may ignore any minimum [💪 Strength](../ability-scores-and-skills.md#strength) requirement.
{% endhint %}

| Shield | Cost | Defense | Soak | [💪 Strength](../ability-scores-and-skills.md#strength) minimum |
| :--- | :--- | :--- | :--- | :--- |
| Wicker | 2 gp | `2+L💚 vs 🩸` | `1💜 vs 💢🩸` | -1 |
| Wooden | 10 gp | `1+L💚 vs ⚡` | `L💜 vs 💢🩸` | +1 |
| Metal | 20 gp | `5+L💚 vs 🧪🔥` | `L💜 vs 💢🧪🩸` | +2 |
| Greatshield | 60 gp | — | `L💜 vs 💢🧪🔥🌟🩸` | +4 |

