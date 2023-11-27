import { HeroService } from './../../Services/hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/Modules/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    HeroDetailComponent,
    RouterModule,
  ],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;

  heroSub: Subscription;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroSub = this.heroService.getHeroes().subscribe((resp: Hero[]) => {
      this.heroes = resp;
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.heroSub.unsubscribe();
  }
}
