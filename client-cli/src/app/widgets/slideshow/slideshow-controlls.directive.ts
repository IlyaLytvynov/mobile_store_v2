import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[controls]'
})
export class ControlsDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

}
