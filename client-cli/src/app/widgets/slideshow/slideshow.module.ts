import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow.component';
import { ControlsDirective } from './slideshow-controlls.directive';
import { SlideshowDirective } from './slideshow.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlideshowComponent,
        ControlsDirective,
        SlideshowDirective
    ],
    exports: [SlideshowComponent]
})
export class SlideshowModule {
}
