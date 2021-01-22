import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { PokemonInfo } from '../pokemon-list/pokemon-list';

import { PokemonListService } from "../pokemon-list/pokemon-list.service";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: [
  ]
})
export class PokemonDetailComponent implements OnInit {
  id: string;
  public pokemonDetail: PokemonInfo[] = [];

  constructor(
    private route: ActivatedRoute,
    private _pokemonListService: PokemonListService,
    public dialog: MatDialog) {
    this.id = this.route.url._value[1].path;
  }

  ngOnInit(): void {
    this._pokemonListService.getPokemon(this.id)
      .subscribe((data) => {
        console.log(data);
        this.pokemonDetail = data;
      })
  }

  openDialog(attack) {
    this.dialog.open(DialogDataExampleDialog, {
      data : attack
    });
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template: `<p>Custo {{data.convertedEnergyCost}} - {{data.cost[0]}}</p> <p>{{data.name}}</p> <p>Dano {{data.damage}}</p> <p>{{data.text}}</p>`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}
