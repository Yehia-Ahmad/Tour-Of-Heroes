import { HeroService } from './../../Services/hero.service';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from 'src/app/Modules/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe, HeroDetailComponent],
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[];
  selectedHero: Hero;

  heroSub: Subscription;

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

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

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.heroSub.unsubscribe();
  }
}
