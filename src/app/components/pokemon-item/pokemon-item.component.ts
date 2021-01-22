import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { PokemonInfo } from '../pokemon-list/pokemon-list';
import { PokemonListService } from "../pokemon-list/pokemon-list.service";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  public pokemonList: PokemonInfo[] = [];
  
  constructor(private router: Router, private _pokemonListService: PokemonListService) { }

  ngOnInit(): void {
    this._pokemonListService.getPokemons()
    .subscribe((data) => {
      console.log(data);
      this.pokemonList = data;
    })
  }

  onSelect(pokemon:any){
    this.router.navigate(['/pokemon-detail', pokemon.id])

  }

}
