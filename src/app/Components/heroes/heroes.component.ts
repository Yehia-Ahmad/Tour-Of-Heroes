import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HEROES } from 'src/app/Heroes/mock-heroes';
import { Hero } from 'src/app/Modules/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe],
})
export class HeroesComponent {
  hero: Hero[] = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
