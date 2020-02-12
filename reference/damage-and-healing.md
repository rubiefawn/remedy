# Damage & Healing

## Damage Types

Damage types can optionally be referred to by their symbols in places where writing their full names would be difficult or impractical.

| Damage Type | Category | Description |
| :--- | :--- | :--- |
| `💢 battering` | Mundane | Blunt force, such as a falling rock or shock wave inflicts battering damage. |
| `🧪 caustic` | Elemental | Strong acids and alkalines that corrode flesh and metal inflict caustic damage. |
| `🧊 cold` | Elemental | Frigid temperatures, such as a blizzard or the ocean inflict cold damage. |
| `⚡ electric` | Elemental | Powerful electric force, such as being struck by lightning inflict electric damage. |
| `🔥 heat` | Elemental | High thermals, such as the inside of a volcano or a forest fire inflict heat damage. |
| `🧠 psychic` | Exotic | Mental strain, such as embarrassment or terror inflict psychic damage. |
| `🌟 radiant` | Exotic | Powerful light, such as exposure to a star or the wrath of a god inflict radiant damage. |
| `🦠 toxic` | Elemental | Harmful substances, such as venom or poison gas inflict toxic damage. |
| `💀 withering` | Exotic | Chaotic and entropic effects, such as antimatter or life-draining spells inflict withering damage. |
| `🩸 wounding` | Mundane | Things that puncture, impale, cut, and slash all inflict wounding damage. |
| `❌ true` | Meta | True damage is a special kind of damage used by the mechanics of the game. True damage cannot be reduced or prevented in any way. |

{% hint style="danger" %}
True damage should not be used in ways similar to other damage types, and exists strictly to enforce game mechanics. Weapons, spells, traps, or other in-world phenomena should never cause true damage.
{% endhint %}

### Weakness & Resistance

If a creature or an object has **resistance** to a damage type, damage of that type is halved against it. If a creature or an object has **weakness** to a damage type, damage of that type is doubled against it.

### Immunity

If a creature or object is **immune** to a damage type, that creature or object ignores all damage of that type.

## Healing Types

Healing types can optionally be referred to by their symbols in places where writing their full names would be difficult or impractical.

### 💖 Healing

Regular **healing** restores lost hit points. A creature cannot exceed its hit point maximum from this kind of healing.

### 💛 Temporary Hit Points

**Temporary hit points** act as a buffer. There is no limit to how many temporary hit points a creature can have. Temporary hit points, however, do not stack; when a creature who already has temporary hit points receives more, the amounts do not stack, and the creature must choose which amount to keep.

## Defense & Soak

Not all attacks can be consistently evaded, and some sources of damage are impossible to dodge at all. Armor serves as a protection against different kinds of damage by providing defense and soak. Some creatures have natural armor, which may provide defense and soak.

Defense and soak can optionally be referred to by their symbols in places where writing their full names would be difficult or impractical.

### 💚 Defense

**Defense** is a damage threshold. Different armor can provide different amounts of defense against different damage types. If a creature has defense against a type of damage and they would take that type of damage, they may reduce that damage to 0 if the amount of damage is less than or equal to their defense against that damage type.

Defense is ignored if the attacker rolls triumph or the defender rolls disaster.

### 💜 Soak

**Soak** is a measurement of damage reduction. Different armor can provide different amounts of soak against different damage types. If a creature has soak against a type of damage and they would take that type of damage, they may reduce that damage by an amount equal to their soak against that damage type. Soak is applied after defense.

Soak is ignored if the attacker rolls triumph or the defender rolls disaster.

## 0 Hit Points

When a creature reaches 0 hit points, it immediately begins Bleeding Out and becomes Unconscious. If the creature was reduced to 0 hit points by an attack, the attacker can decide to only knock the creature out instead, and the creature remains alive and becomes Unconscious for 4d6 hours instead.

## Massive Damage

**Massive damage** is when a creature takes damage greater than or equal to half its hit point maximum. When a creature takes massive damage, it must roll on the table below:

| d12 Result | Effect |
| :--- | :--- |
| 1 | The creature drops to 0 hit points and begins Bleeding Out. |
| 2 | The creature begins Bleeding Out but remains conscious. |
| 3 | The creature loses an eye, imposing threat on all checks that rely on sight. If the creature loses its last eye, it becomes permanently Blinded. |
| 4 | The creature loses an arm or hand, and can only hold one item or weapon at a time and can't use two-handed weapons. |
| 5 | The creature loses a leg or foot, halving its walk, climb, and swim speeds. |
| 6 | The creature becomes Paralyzed for 1 minute. |
| 7 | The creature becomes Crippled. |
| 8 | The creature becomes Traumatized. |
| 9 | The creature is Stunned until the end of its next turn. |
| 10 | The creature drops falls Unconscious. |
| 11 | The creature becomes Deafened for 1 minute. |
| 12 | The creature becomes Wounded. |

## Instant Death

If a creature takes damage that reduces it to 0 hit points and there is still damage left over, the creature dies if the remaining damage is greater than or equal to half its hit point maximum.

