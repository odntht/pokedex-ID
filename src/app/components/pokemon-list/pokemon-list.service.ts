import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfo, PokemonListInfo } from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  private _url: string = "https://api.pokemontcg.io/v1/cards/";



  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<PokemonListInfo[]> {
    return this.http.get<PokemonListInfo[]>(this._url)
  }

  public getPokemon(id): Observable<PokemonInfo[]> {
    return this.http.get<PokemonInfo[]>(this._url+id);
  }


}