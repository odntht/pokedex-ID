import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {
  @Input() message: string | undefined

  constructor(private router: Router) { }

  

  ngOnInit(): void {
  }

  onSelect(pokemon:any){
    this.router.navigate(['/pokemon-detail', pokemon.id])

  }

}
