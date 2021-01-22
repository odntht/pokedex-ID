import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonInfo } from './pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  private _url: string = "https://pokemontcg.io/cards/";
  private _pkmnSelecionado: string = "ex14-28"


  constructor(private http: HttpClient) { }

  public getPokemons(): Observable<PokemonInfo[]>{
   return this.http.get<PokemonInfo[]>(this._url+this._pkmnSelecionado);
  }
}