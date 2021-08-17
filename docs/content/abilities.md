---
id: abilities
title: Gambits & Spells
sidebar_label: Gambits & Spells
---
<!-- Setup -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Actual content -->
## Gambits

### Aim
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action or bonus action <br /><hr />
		You gain advantage on all attack rolls until the beginning of your next turn.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action or bonus action <br /><hr />
		You gain advantage on all attack rolls until the end of your next turn.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action or bonus action <br /><hr />
		You gain two advantage on all attack rolls until the end of your next turn.
	</TabItem>
</Tabs>

### Ambush
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Target one surprised creature, and make one weapon attack against them. If the attack hits, ignore half the target's Defense.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Target one surprised creature, and make one weapon attack against them. If the attack hits, ignore the target's Defense.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Target one surprised creature, and make one weapon attack against them. If the attack hits, ignore the target's Defense, and the target falls Prone.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 bonus on the attack roll for each extra mana spent on executing this gambit.
:::

### Chi Blocking
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Unarmed <br />
		<b>Execution Time</b> 1 action <br />
		<b>Duration</b> 1 round <br /><hr />
		Make a weapon attack against one creature within your reach. On a hit, the target can't cast spells or execute gambits for the duration.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Fist-load Weapon or Unarmed <br />
		<b>Execution Time</b> 1 action <br />
		<b>Duration</b> 1 round <br /><hr />
		Make a weapon attack against one creature within your reach. On a hit, the target can't cast spells or execute gambits for the duration.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br />
		<b>Duration</b> 1 round <br /><hr />
		Make a weapon attack against one creature within your reach. On a hit, the target can't cast spells or execute gambits for the duration.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 bonus on the attack roll for each extra mana spent on executing this gambit.
:::

### Cleave
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make a weapon attack against one creature within your reach. If an attack wounds a target, you may make another attack against a different creature within your reach you have not already attacked as part of this gambit.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make a weapon attack against one creature within your reach. If an attack hits, you may make another attack against a different creature within your reach you have not already attacked as part of this gambit.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make a weapon attack against two creatures within your reach. If an attack hits, you may make another attack against a different creature within your reach you have not already attacked as part of this gambit.
	</TabItem>
</Tabs>

### Defensive Stance
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 bonus action <br /><hr />
		You gain advantage on all Evasion checks until the beginning of your next turn.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 bonus action <br /><hr />
		You gain two advantage on all Evasion checks until the beginning of your next turn.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 bonus action <br /><hr />
		You gain three advantage on all Evasion checks until the beginning of your next turn.
	</TabItem>
</Tabs>

### Deflect Missiles
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a ranged weapon attack <br /><hr />
		You immediately gain 1d4 Defense against the triggering damage. If you reduce the damage below 0, you deflect the missile towards a creature of your choice. That creature is the new target of the original attack.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a ranged weapon attack <br /><hr />
		You immediately gain 1d6 Defense against the triggering damage. If you reduce the damage below 0, you deflect the missile towards a creature of your choice. That creature is the new target of the original attack.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a ranged weapon attack <br /><hr />
		You immediately gain 1d8 Defense against the triggering damage. If you reduce the damage below 0, you deflect the missile towards a creature of your choice. That creature is the new target of the original attack.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 Defense against the triggering damage for each extra mana spent on executing this gambit.
:::

### Disarm
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. If you wound the target, it must drop one item it is holding of your choice.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. On a hit, the target must drop one item it is holding of your choice.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. On a hit, the target must drop one or two items it is holding of your choice.
	</TabItem>
</Tabs>

### Flurry
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make two weapon attacks. They can target one or different creatures.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action or bonus action <br /><hr />
		Make two weapon attacks. They can target one or different creatures.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action or bonus action <br /><hr />
		Make three weapon attacks. They can target one or different creatures.
	</TabItem>
</Tabs>

### Forceful Attack
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. If the attack hits, the target is moved up to 10 feet in a direction you choose. Fall damage may apply. If the target is moved through the space of another creature, that creature must make a Reflex check with difficulty equal to the damage of the attack or both the creature and the target fall Prone.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. If the attack hits, the target is moved up to 15 feet in a direction you choose. Fall damage may apply. If the target is moved through the space of another creature, that creature must make a Reflex check with difficulty equal to the damage of the attack or both the creature and the target fall Prone.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. If the attack hits, the target is moved up to 20 feet in a direction you choose. Fall damage may apply. If the target is moved through the space of another creature, that creature must make a Reflex check with difficulty equal to the damage of the attack or both the creature and the target fall Prone.
	</TabItem>
</Tabs>

### Great Cleave
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 2 <br />
		<b>Required Weapon</b> Greataxe or greatsword <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack against each creature within your reach.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 2 <br />
		<b>Required Weapon</b> Greataxe, greatsword, sword, or whip <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack against each creature within your reach.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 2 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack against each creature within your reach.
	</TabItem>
</Tabs>

### Lunging Strike
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Move up to half your movement speed towards one creature you can see. If that creature is within your reach after this movement, make one attack against them.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Move up to half your movement speed towards one creature you can see. If that creature is within your reach after this movement, make one attack against them.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Move up to your movement speed towards one creature you can see. If that creature is within your reach after this movement, make one attack against them.
	</TabItem>
</Tabs>

:::note Additional Mana
You can move an additional 5 feet for each extra mana spent on executing this gambit.
:::

### Parry
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a melee attack <br /><hr />
		You immediately gain +1d8 Defense against the triggering damage.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a melee attack <br /><hr />
		You immediately gain +1d10 Defense against the triggering damage.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when you are hit with a melee attack <br /><hr />
		You immediately gain +1d12 Defense against the triggering damage.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 Defense for each extra mana spent on executing this gambit.
:::

### Preemptive Strike
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon<br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature moves within your reach <br /><hr />
		Make one attack against the triggering creature.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature moves within your reach <br /><hr />
		Make one attack against the triggering creature.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature moves within your reach <br /><hr />
		Make one attack against the triggering creature. If you wound the target, they fall Prone.
	</TabItem>
</Tabs>

### Riposte
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Rapier or sword <br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature misses a melee attack against you <br /><hr />
		Make one attack against the triggering creature.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature misses a melee attack against you <br /><hr />
		Make one attack against the triggering creature.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any melee weapon <br />
		<b>Execution Time</b> 1 reaction, which you take when a hostile creature misses a melee attack against you or hits you but fails to wound you<br /><br />
		Make one attack against the triggering creature.
	</TabItem>
</Tabs>

### Smite
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. The attack's damage type is elemental instead of its usual damage type.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. The attack's damage type is spiritual instead of its usual damage type.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Required Weapon</b> Any <br />
		<b>Execution Time</b> 1 action <br /><hr />
		Make one weapon attack. The attack's damage type is either elemental or spiritual \(your choice each time you execute this gambit\) instead of its usual damage type.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 bonus on the attack roll for each extra mana spent on executing this gambit.
:::

## Spells

### Animate Dead
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 3 <br />
		<b>Components</b> Verbal, Somatic, Material \(a corpse or pile of bones, a black onyx stone†\) <br />
		<b>Casting Time</b> 5 minutes (10 minutes ritual) <br /><hr />
		Touch a pile of bones or a corpse of a medium or small creature within range. The target becomes a skeleton if you used bones or a zombie if you used a corpse in the casting of this spell \(The storyteller has the creature's game statistics\). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you \(if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one\). Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 3 <br />
		<b>Components</b> Verbal, Somatic, Material \(a corpse or pile of bones, a black onyx stone†\) <br />
		<b>Casting Time</b> 1 minute (10 minutes ritual) <br /><hr />
		Touch a pile of bones or a corpse of a medium or small creature within range. The target becomes a skeleton if you used bones or a zombie if you used a corpse in the casting of this spell \(The storyteller has the creature's game statistics\). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you \(if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one\). Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 3 <br />
		<b>Components</b> Somatic, Material (a corpse or pile of bones, a black onyx stone†) <br />
		<b>Casting Time</b> 1 minute (5 minutes ritual) <br /><hr />
		Touch a pile of bones or a corpse of a medium or small creature within range. The target becomes a skeleton if you used bones or a zombie if you used a corpse in the casting of this spell \(The storyteller has the creature's game statistics\). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you \(if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one\). Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.
	</TabItem>
</Tabs>

:::note Additional Mana
You may animate or reassert control over one additional undead creature for each extra mana spent on casting this spell.
:::

### Bless
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Somatic <br />
		<b>Casting Time</b> 1 action <br />
		<b>Duration</b> 1 round <br /><hr />
		You touch a creature, bestowing upon it a blessing. That creature gains advantage on all checks until the beginning of your next turn.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Somatic <br />
		<b>Casting Time</b> 1 action <br />
		<b>Duration</b> 1 round <br /><hr />
		You touch a creature, bestowing upon it a blessing. That creature gains two advantage on all checks until the beginning of your next turn.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Somatic <br />
		<b>Casting Time</b> 1 action or bonus action <br />
		<b>Duration</b> 1 round <br /><hr />
		You touch a creature, bestowing upon it a blessing. That creature gains two advantage on all checks until the beginning of your next turn.
	</TabItem>
</Tabs>

:::note Additional Mana
The target gains an additional +1 bonus for each extra mana spent on casting this spell.
:::

### Blink
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (an empty phial) <br />
		<b>Casting Time</b> 1 action <br /><hr />
		You teleport up to 30 feet to an unoccupied space that you can see.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (an empty phial) <br />
		<b>Casting Time</b> 1 action or bonus action <br /><hr />
		You teleport up to 30 feet to an unoccupied space that you can see.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (an empty phial) <br />
		<b>Casting Time</b> 1 bonus action <br />
		<b>Range</b> 10 feet <br /><hr />
		You and up to five willing creatures within range teleport up to 30 feet to an unoccupied space that you can see.
	</TabItem>
</Tabs>

:::note Additional Mana
The maximum distance you can teleport increases by 30 feet for each extra mana spent on casting this spell.
:::

### Blizzard
<b>Mana Cost</b> 1 <br />
<b>Components</b> Verbal, Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 80 feet <br />
<b>Duration</b> Concentration, up to 1 minute <br />
<b>Area of Effect</b> 15-foot radius cylinder <br /><hr />

You shape the clouds above you, creating a small but blinding storm of snow and ice. For the duration, the space within the area of effect becomes difficult terrain. When a creature begins or ends their turn within the area of effect, make a spell attack against them, inflicting elemental damage on a hit.

:::note Additional Mana
The maximum distance you can teleport increases by 30 feet for each extra mana spent on casting this spell.
:::

:::caution Spell Restrictions
This spell can only be cast outside.
:::

### Blood Link
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic <br />
		<b>Casting Time</b> 1 action <br />
		<b>Range</b> Touch <br />
		<b>Duration</b> Concentration, up to 10 minutes <br /><hr />
		You entangle the life-force of yourself and one creature you touch. An unwilling creature must succeed on an Instinct check or become affected by this spell. For the duration, whenever either the target or yourself takes damage, the other also takes the same amount of damage. In addition, whenever either the target or yourself recovers from wounds, the other also recovers from the same amount of wounds.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic <br />
		<b>Casting Time</b> 1 action <br />
		<b>Range</b> Touch <br />
		<b>Duration</b> Concentration, up to 10 minutes <br /><hr />
		You entangle the life-force of two creatures you touch. An unwilling creature must succeed on an Instinct check or become affected by this spell. For the duration, whenever either of the targets takes damage, the other also takes the same amount of damage. In addition, whenever either of the targets recover from wounds, the other also recovers from the same amount of wounds.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic <br />
		<b>Casting Time</b> 1 action <br />
		<b>Range</b> Touch <br />
		<b>Duration</b> Concentration, up to 10 minutes <br /><hr />
		You entangle the life-force of up to three creatures you touch. An unwilling creature must succeed on an Instinct check or become affected by this spell. For the duration, whenever any of the targets takes damage, the rest also take the same amount of damage. In addition, whenever any of the targets recover from wounds, the rest also recover from the same amount of wounds.
	</TabItem>
</Tabs>

### Chain Lightning
<b>Mana Cost</b> 2 <br />
<b>Components</b> Verbal, Somatic, Material (a glass rod) <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 30 feet <br /><hr />

You make a spell attack, hurling an arc of electricity towards one target within range, inflicting elemental damage on a hit.

If you wound the target, you may target an additional creature who hasn't already been wounded by this spell within 30 feet of the previous target. You may repeat this until the spell fails to wound a target or there are no more eligible targets left in range.

:::note Additional Mana
You may retry one missed spell attack for each extra mana spent on casting this spell.
:::

### Counterspell
<b>Mana Cost</b> 3 <br />
<b>Components</b> Verbal, Somatic, Material (a pinch of ashes) <br />
<b>Casting Time</b> 1 reaction, which you take when you see a creature within range casting a spell <br />
<b>Range</b> 60 feet <br /><hr />
You attempt to interrupt a creature in the process of casting a spell. You must be able to see the creature and must be aware that it is casting a spell. The target must succeed on a Willpower check or their spell fails and has no effect. Depending on your familiarity with the target's spell, you gain bonuses or penalties to your spell check:<br />
<ul>
<li>If you do not know the target's spell, you automatically fail the check.</li>
<li>If you have incompetence with the target's spell, you suffer disadvantage on the check.</li>
<li>If you have mastery with the target's spell, you gain advantage on the check.</li>
</ul>

### Cure Wounds
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (a tiny gemstone†) <br />
		<b>Casting Time</b> 1 action (1 minute ritual) <br />
		<b>Range</b> Touch <br /><hr />
		A creature you touch recovers from one wound. This spell has no effect on undead or constructs.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (a tiny gemstone†) <br />
		<b>Casting Time</b> 1 action (1 minute ritual) <br />
		<b>Range</b> Touch <br /><hr />
		A creature you touch recovers from 1d4 wounds. This spell has no effect on undead or constructs.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (a tiny gemstone†) <br />
		<b>Casting Time</b> 1 action or bonus action (1 minute ritual) <br />
		<b>Range</b> Touch <br /><hr />
		A creature you touch recovers from 1d4 wounds. This spell has no effect on undead or constructs.
	</TabItem>
</Tabs>

:::note Additional Mana
The target recovers from one additional wound for each extra mana spent on casting this spell.
:::

:::caution Spell Restrictions
You cannot target yourself when casting this spell sacrificially.
:::

### Detect Magic
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Duration</b> Concentration, up to 5 minutes <br />
		<b>Area of Effect</b> 30-foot radius sphere <br /><hr />
		You open your awareness to sense the presence of magic. For the duration, you see a faint glow around all creatures (including Invisible creatures) except undead and constructs, as well as around any object that has been magically enchanted. In addition, you become aware of the casting of spells within 30 feet even if that spell doesn't require noticeable components, such as verbal or somatic components.<br /><br />
		This faint glow only tells you whether or not magic is present; however, you recognize a spell being cast or an enchantment if it is a spell you know.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Duration</b> Concentration, up to 10 minutes <br />
		<b>Area of Effect</b> 30-foot radius sphere <br /><hr />
		You open your awareness to sense the presence of magic. For the duration, you see a faint glow around all creatures (including Invisible creatures) except undead and constructs, as well as around any object that has been magically enchanted. In addition, you become aware of the casting of spells within 30 feet even if that spell doesn't require noticeable components, such as verbal or somatic components.<br /><br />
		This faint glow only tells you whether or not magic is present; however, you recognize a spell being cast or an enchantment if it is a spell you know.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Duration</b> 10 minutes <br />
		<b>Area of Effect</b> 30-foot radius sphere <br /><hr />
		You open your awareness to sense the presence of magic. For the duration, you see a faint glow around all creatures (including Invisible creatures) except undead and constructs, as well as around any object that has been magically enchanted. In addition, you become aware of the casting of spells within 30 feet even if that spell doesn't require noticeable components, such as verbal or somatic components.<br /><br />
		This faint glow only tells you whether or not magic is present; however, you recognize a spell being cast or an enchantment if it is a spell you know.
	</TabItem>
</Tabs>

:::note Additional Mana
The radius of the spell's area of effect increases by 10 feet for each extra mana spent on casting this spell.
:::

### Fireball
<b>Mana Cost</b> 2 <br />
<b>Components</b> Verbal, Somatic, Material (a piece of sulphur, a flint) <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 120 feet <br />
<b>Area of Effect</b> 10-foot radius sphere <br /><hr />

You create a furious bead of fire at a point within range, which then erupts into an inferno. Make a spell attack against all creatures within the area of effect, inflicting elemental damage on a hit.

The explosion spreads around corners. It ignites flammable objects in the area that aren't being worn or carried.

:::note Additional Mana
The radius of the spell's area of effect increases by 5 feet for each extra mana spent on casting this spell.
:::

### Flameburst
<b>Mana Cost</b> 3 <br />
<b>Components</b> Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Area of Effect</b> 60-foot cone <br /><hr />

You snap your fingers and a torrent of flame explodes from your fingertips. Make a spell attack against all creatures within the area of effect, inflicting elemental damage on a hit.

The flame ignites flammable objects in the area of effect that aren't being worn or carried.

:::note Additional Mana
The spell's area of effect increases by 5 feet for each extra mana spent on casting this spell.
:::

### Flare
<b>Mana Cost</b> 1 <br />
<b>Components</b> Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 15 feet <br /><hr />

You make a spell attack, summoning a mote of a star to smite one creature within range, inflicting elemental damage on a hit. This attack ignores half of the target's Defense.

When you roll triumph on an attack using this spell, the attack ignores all of the target's Defense instead.

:::note Additional Mana
The spell's range increases by 15 feet for each extra mana spent on casting this spell.
:::

### Identify
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 2 <br />
		<b>Components</b> Somatic, Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Range</b> Touch <br /><hr />
		You choose one object or creature that you must touch throughout the casting of the spell. If the target is an object with magical properties, you learn those properties, but not necessarily how to use it. If the target is a creature, you learn the creature's type: either Abberation, Celestial, Construct, Fey, Fiend, Humanoid, Monster, or Undead.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 2 <br />
		<b>Components</b> Somatic, Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Range</b> Touch <br /><hr />
		You choose one object or creature that you must touch throughout the casting of the spell. If the target is an object with magical properties, you learn those properties and the object's basic use. If the target is a creature, you learn the creature's type: either Abberation, Celestial, Construct, Fey, Fiend, Humanoid, Monster, or Undead.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 2 <br />
		<b>Components</b> Somatic, Material (an adder stone) <br />
		<b>Casting Time</b> 1 action (10 minutes ritual) <br />
		<b>Range</b> Touch <br /><hr />
		You choose one object or creature that you must touch throughout the casting of the spell. If the target is an object with magical properties, you learn those properties and the object's basic use. If the target is a creature, you learn what spells are currently affecting the creature as well as the creature's type: either Abberation, Celestial, Construct, Fey, Fiend, Humanoid, Monster, or Undead.
	</TabItem>
</Tabs>

### Icicle
<b>Mana Cost</b> 3 <br />
<b>Components</b> Verbal, Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Duration</b> 1 minute <br />
<b>Area of Effect</b> 15-foot line <br /><hr />

You raise a row of razor-sharp icicles from the ground, piercing any who stand in their path. Make a spell attack against all creatures within the area of effect, inflicting elemental damage on a hit. Creatures wounded by this spell are also Restrained for the duration, which can be escaped by succeeding on a Stamina check.

:::note Additional Mana
The spell's area of effect increases by 5 feet for each extra mana spent on casting this spell.
:::

### Imbalance
<b>Mana Cost</b> 1 <br />
<b>Components</b> Verbal, Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 30 feet <br />
<b>Duration</b> Concentration, up to 1 hour <br /><hr />

You choose one creature within range, shifting around their strengths and weaknesses. The target must succeed on an Instinct check or for the duration, one of their ability scores of your choice is reduced by 2 while another of their ability scores of your choice increases by 2.

:::note Additional Mana
The amount an ability score is affected increases by 1 for each extra mana spent on casting this spell.
:::

### Magic Missile
<b>Mana Cost</b> 1 <br />
<b>Components</b> Somatic, Material (a vial containing only vacuum) <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 60 feet <br /><hr />

You create three magical projectiles. You may direct each of these projectiles to a target of your choice within range. For each projectile, make a spell attack, inflicting physical damage on a hit.

:::note Additional Mana
You create one additional projectile for each extra mana spent on casting this spell.
:::

### Shield
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Verbal, Somatic, Material (a small piece of mirror) <br />
		<b>Casting Time</b> 1 reaction, which you take when you are hit by an attack <br /><hr />
		You immediately gain +1d6 Defense against the triggering attack.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Somatic <br />
		<b>Casting Time</b> 1 reaction, which you take when you are hit by an attack <br /><hr />
		You immediately gain +1d6 Defense against the triggering attack.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 1 <br />
		<b>Components</b> Somatic <br />
		<b>Casting Time</b> 1 reaction, which you take when a creature within range is hit by an attack <br />
		<b>Range</b> 10 feet <br /><hr />
		The targeted creature immediately gains +1d6 Defense against the triggering attack.
	</TabItem>
</Tabs>

:::note Additional Mana
You gain an additional +1 Defense for each extra mana spent on casting this spell.
:::

### Thunderbolt
<b>Mana Cost</b> 1 <br />
<b>Components</b> Verbal, Somatic <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 60 feet <br />
<b>Area of Effect</b> 5-foot radius cylinder <br /><hr />

You call upon the clouds, which rumble with anticipation. Make a spell attack, directing a lightning bolt from the sky towards one target within range, inflicting elemental damage on a hit. A creature wearing metal armor suffers disadvantage on their check to avoid the spell attack. In addition, make a spell attack against all creatures within the area of effect, inflicting physical damage on a hit.

:::note Additional Mana
The radius of the spell's area of effect increases by 5 feet for each extra mana spent on casting this spell.
:::

:::caution Spell Restrictions
This spell can only be cast outside.
:::

### Time Stop
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 12 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		Time ceases for all creatures but you for a moment. You immediately take 1 turn while time is frozen in this way. Existing hazards and magical effects can still harm you. Creatures other than you are frozen in time, and the result of any check they must make while frozen in this way is considered to be 1, unless they also know this spell, in which case they make all checks with five disadvantage.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 12 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		Time ceases for all creatures but you for a moment. You immediately take 1d4 turns in a row while time is frozen in this way. Existing hazards and magical effects can still harm you. Creatures other than you are frozen in time, and the result of any check they must make while frozen in this way is considered to be 1, unless they also know this spell, in which case they make all checks with five disadvantage.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 12 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		Time ceases for all creatures but you for a moment. You immediately take 1d4+1 turns in a row while time is frozen in this way. Existing hazards and magical effects can still harm you. Creatures other than you are frozen in time, and the result of any check they must make while frozen in this way is considered to be 1, unless they also know this spell, in which case they make all checks with disadvantage (d12).
	</TabItem>
</Tabs>

### Torpefy
<b>Mana Cost</b> 2 <br />
<b>Components</b> Somatic, Material (A bit of twine) <br />
<b>Casting Time</b> 1 action <br />
<b>Range</b> 60 feet <br />
<b>Duration</b> Concentration, up to 10 minutes <br /><hr />

Choose a creature you can see within range. The target must succeed on an Athletics check or become Paralyzed for the duration. At the end of each of its turns, it can repeat this check, ending the spell's effect on it on a success.

:::note Additional Mana
You may target one additional creature within range for each extra mana spent on casting this spell. The creatures must be within 30 feet of each other when you target them.
:::

### Wish
<Tabs
	className="tabs--block"
defaultValue="aptitude"
	values={[
		{label: 'Incompetence', value: 'incompetence'},
		{label: 'Aptitude', value: 'aptitude'},
		{label: 'Mastery', value: 'mastery'},
	]}>
	<TabItem value="incompetence">
		<b>Mana Cost</b> 30 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		You speak aloud a wish, and reality reshapes to accommodate. Describe your wish using three words or less. The storyteller decides the details of how your wish is fulfilled.
	</TabItem>
	<TabItem value="aptitude">
		<b>Mana Cost</b> 30 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		You speak aloud a wish, and reality reshapes to accommodate. Describe your wish using one sentence. The storyteller decides the details of how your wish is fulfilled.
	</TabItem>
	<TabItem value="mastery">
		<b>Mana Cost</b> 30 <br />
		<b>Components</b> Verbal <br />
		<b>Casting Time</b> 1 action <br /><hr />
		You speak aloud a wish, and reality reshapes to accommodate. Describe your wish using up to three sentences. The storyteller decides the details of how your wish is fulfilled.
	</TabItem>
</Tabs>

:::danger No Guarantees
Your wish will be fulfilled in a way that satisfies the requirements you provide, but it may have unforseen and unintended side effects or consequences.
:::
