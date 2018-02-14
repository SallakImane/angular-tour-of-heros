import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /*------------------le 1 cas Test Simple------------------------------*/
  // hero = 'Windstorm';
  /*------------------le 2 cas D'initialisation------------------------------*/
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  /*----------------------- le 3 cas:  Affichage de la liste des Heroes -------------------*/
  // heroes = HEROES;
  // constructor() { }
  /*----------------------- le 4 cas:  Services -------------------*/
  // selectedHero: Hero;
  // heroes: Hero[];
  //
  // constructor(private heroService: HeroService) { }
  // ngOnInit() {
  //   this.getHeroes();
  // }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  // //Cette fonction pour récupérer les héros du service
  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //     .subscribe(heroes => this.heroes = heroes);
  // }
  /*----------------------- le 5 cas:  Naviguer vers les détails du héros -------------------*/
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
