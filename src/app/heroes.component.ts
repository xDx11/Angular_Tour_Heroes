import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router }   from '@angular/router';


@Component({    
  selector: 'my-heroes',
  templateUrl: './heroes.component.html'
  ,
  styleUrls: [ './heroes.component.css' ],
  providers: [HeroService]
})



export class HeroesComponent implements OnInit {     
  title = 'Tour of Heroes';  
  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(
    private heroService: HeroService,
    private router: Router
        ) { }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}



