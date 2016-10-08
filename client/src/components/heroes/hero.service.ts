/**
 * Created by IlyaLitvinov on 04.10.16.
 */
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import {Hero} from "./hero.model";

@Injectable()
export class HeroService {
    heroes: Hero[];
    constructor(private http: Http) {
    }
    getHeroes() {
        return this.http.get("src/heroes.json").map((res: Response) => {
            debugger;
            return res.json();
        });
    }

}