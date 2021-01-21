import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {


  pokemonList: any = [
    {"id": "ex14-28", "name": "Venusaur", "type": "Grass", "img": "https://images.pokemontcg.io/ex14/28.png"},
    {"id": "ex14-28", "name": "Venusaur", "type": "Grass", "img": "https://images.pokemontcg.io/ex14/28.png"},
   ]


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(pokemon:any){
    this.router.navigate(['/pokemon-detail', pokemon.id])

  }

}
