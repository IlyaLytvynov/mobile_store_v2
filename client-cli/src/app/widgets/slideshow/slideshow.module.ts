import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowComponent } from './slideshow.component';
import { ControlsDirective } from './slideshow-controlls.directive';
import { SlideshowDirective } from './slideshow.directive';
import { FitSlidesDirective } from './fit-slides.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlideshowComponent,
        ControlsDirective,
        SlideshowDirective,
        FitSlidesDirective
    ],
    exports: [SlideshowComponent]
})
export class SlideshowModule {
}
