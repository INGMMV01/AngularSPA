import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroesService: HeroesService;

  constructor() {
    this.heroesService = new HeroesService();
   }

  ngOnInit() {
  }

  /*
  buscarHeroe = function(termino: string) {
    console.log(termino);
    console.log('kitos');
    alert('kitos');
    let i:number = 1/0;
  }
  */

  buscarHeroe(termino:string){
    this.heroesService.buscarHeroes(termino);

  }
}
