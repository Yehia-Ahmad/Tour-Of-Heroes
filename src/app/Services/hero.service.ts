import { Injectable } from '@angular/core';
import { HEROES } from '../Heroes/mock-heroes';
import { Hero } from '../Modules/hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
