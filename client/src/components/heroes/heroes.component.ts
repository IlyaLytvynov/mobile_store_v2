import { Component, OnInit } from "@angular/core";
import { Hero } from "./hero.model";
import {HeroService} from "./hero.service";
import "rxjs/add/operator/map";
import { subscribeOn } from "rxjs/operator/subscribeOn";

@Component({
    selector: "toh-heroes",
    templateUrl: "./heroes.component.html",
    styleUrls: ["./heroes.styl"],
    providers: [HeroService]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroesService: HeroService) {
    }

    ngOnInit() {
        // this.heroes = this.heroesService.getHeroes();
        this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

}