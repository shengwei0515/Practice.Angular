import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes', // for css selector
  templateUrl: './heroes.component.html', // where is the html template file
  styleUrls: ['./heroes.component.css'] // where is the css file
})


// export make this component can be imported in other place, for example, AppModule
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id:1,
    name: 'Womdstrom'
  }

  constructor() { }

  // life cycle hook, which will be called after component create
  ngOnInit(): void {
  }

}

