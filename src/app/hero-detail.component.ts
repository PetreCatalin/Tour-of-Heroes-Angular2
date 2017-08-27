import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent {
	@Input() hero: Hero;  //are tipul @Input() pentru ca se va transmite din componenta App eroul selectat selectedHero -> hero
}