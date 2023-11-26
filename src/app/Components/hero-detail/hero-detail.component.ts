import { Hero } from './../../Modules/hero';
import { NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  standalone: true,
  imports: [FormsModule, NgIf, UpperCasePipe],
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
