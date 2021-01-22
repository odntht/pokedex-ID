import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PokemonListInfo } from './pokemon-list';
import { PokemonListService } from "./pokemon-list.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  public pokemonList: PokemonListInfo[] = [];

  constructor(private router: Router, private _pokemonListService: PokemonListService) {
  }

  ngOnInit(): void {

  }


}
