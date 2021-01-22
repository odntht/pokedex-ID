export interface PokemonListInfo {
  id: string;
  name: string;
  nationalPokedexNumber?: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types?: string[];
  supertype: string;
  subtype: string;
  evolvesFrom?: string;
  hp?: string;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks?: Attack[];
  weaknesses?: Weakness[];
  retreatCost?: string[];
  convertedRetreatCost?: number;
  resistances?: Weakness[];
  text?: string[];
  ability?: Ability;
}

export interface PokemonInfo {
  id: string;
  name: string;
  nationalPokedexNumber: number;
  imageUrl: string;
  imageUrlHiRes: string;
  types: string[];
  supertype: string;
  subtype: string;
  evolvesFrom: string;
  hp: string;
  number: string;
  artist: string;
  rarity: string;
  series: string;
  set: string;
  setCode: string;
  attacks: Attack[];
  weaknesses: Weakness[];
}

interface Ability {
  name: string;
  text: string;
  type: string;
}

interface Weakness {
  type: string;
  value: string;
}

interface Attack {
  cost: string[];
  name: string;
  text: string;
  damage: string;
  convertedEnergyCost: number;
}