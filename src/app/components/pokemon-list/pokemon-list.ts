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
    ability: Ability;
    hp: string;
    retreatCost: string[];
    convertedRetreatCost: number;
    number: string;
    artist: string;
    rarity: string;
    series: string;
    set: string;
    setCode: string;
    attacks: Attack[];
    weaknesses: Weakness[];
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
  
  interface Ability {
    name: string;
    text: string;
    type: string;
  }