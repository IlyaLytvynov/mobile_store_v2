import {
    Directive,
    ElementRef,
    HostListener,
    Input
} from '@angular/core';

@Directive({
    selector: '[slideshowControlls]'
})
export class SlideshowDirective {

    @HostListener('click', ['$event']) onClick(e) {
        this.highlight('yellow');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    constructor(private el: ElementRef) {}

}
