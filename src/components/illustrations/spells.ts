/**
 * The wizard's spell book. Each cast picks a spell; its colour becomes the
 * contact section's `--spell` variable, which tints the projectile, the
 * impact burst, the staff orb and the "Let's talk." heading.
 *
 * Colours stay at 3:1 or better against white so the heading stays legible.
 */
export type SpellKind = "fire" | "frost" | "arcane" | "nature";

export interface Spell {
  kind: SpellKind;
  name: string;
  color: string;
}

export const SPELLS: Spell[] = [
  { kind: "fire", name: "Fireball", color: "#D9772B" },
  { kind: "frost", name: "Frost shard", color: "#2F7FD8" },
  { kind: "arcane", name: "Arcane star", color: "#8A4FD8" },
  { kind: "nature", name: "Leaf blade", color: "#2E9A57" },
];

/** Spell loop length — must match the 5s `bolt`/`impact`/`burst` animations. */
export const SPELL_CYCLE_MS = 5000;
/** When the orb starts charging (≈46% of the loop): switch spells here. */
export const SPELL_CHARGE_MS = 2300;

/** A random spell index that differs from the current one. */
export const nextSpell = (current: number) => {
  const offset = 1 + Math.floor(Math.random() * (SPELLS.length - 1));
  return (current + offset) % SPELLS.length;
};
