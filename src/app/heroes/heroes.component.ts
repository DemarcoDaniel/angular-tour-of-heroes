import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];
}
  constructor(private heroservice: HeroService) {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }


  ngOnInit() {
    getHeroes(): Observable<Hero[]> {
    return of(HEROES);
    }
  }

