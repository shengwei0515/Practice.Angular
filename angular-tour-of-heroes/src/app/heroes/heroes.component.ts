import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes', // for css selector
  templateUrl: './heroes.component.html', // where is the html template file
  styleUrls: ['./heroes.component.css'] // where is the css file
})


// export make this component can be imported in other place, for example, AppModule
export class HeroesComponent implements OnInit {
  
  heroes = HEROES;

  constructor() { }

  // life cycle hook, which will be called after component create
  ngOnInit(): void {
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

