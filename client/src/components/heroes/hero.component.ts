/**
 * Created by IlyaLitvinov on 04.10.16.
 */
import { Component, Input } from "@angular/core";
import { Hero } from "./hero.model";

@Component({
    moduleId: module.id.toString(),
    selector: "hero",
    templateUrl: "./hero.component.html"
})
export class HeroComponent {
    @Input() hero: Hero;
}