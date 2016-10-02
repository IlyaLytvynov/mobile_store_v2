import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
debugger;
console.log(module);
@Component({
    selector: 'toh-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.styl']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor() {
    }

    ngOnInit() {
        this.heroes = [
            {'id': 11, 'name': 'Chewbacca'},
            {'id': 12, 'name': 'Rey'},
            {'id': 13, 'name': 'Finn'},
            {'id': 14, 'name': 'Han Solo'},
            {'id': 15, 'name': 'Luke'},
            {'id': 16, 'name': 'Leia'},
        ]
    }

}