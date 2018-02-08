import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};
  mivar: string = 'kitos';


  constructor(private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroeService.getHeroe(params['id']);
      console.log(params['id']);
      console.log(this.heroe);
      console.log(_heroeService.getHeroes());
    });
  }


}

