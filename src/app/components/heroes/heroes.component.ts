import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor(private _HeroesService:HeroesService, 
              private router:Router) { 

  }

  ngOnInit() {
  this.heroes = this._HeroesService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['heroe', idx]);
  }

}
