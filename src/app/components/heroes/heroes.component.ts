import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
}) 
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesServicio: HeroesService,
               private _router: Router)  { 

  }

  ngOnInit() {
    this.heroes = this._heroesServicio.getHeroes();
  }

  verHeroe(idx:number){    
    this._router.navigate(["/heroe",idx]);
  }

}