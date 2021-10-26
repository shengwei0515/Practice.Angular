import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service'


@Component({
  selector: 'app-heroes', // for css selector
  templateUrl: './heroes.component.html', // where is the html template file
  styleUrls: ['./heroes.component.css'] // where is the css file
})


// export make this component can be imported in other place, for example, AppModule
export class HeroesComponent implements OnInit {
  
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // life cycle hook, which will be called after component create
  ngOnInit(): void {
    this.getHeroes();
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

