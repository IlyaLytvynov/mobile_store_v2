import {
    Directive,
    ElementRef,
    HostListener,
    AfterViewChecked,
    Input,
    OnInit
} from '@angular/core';

@Directive({
    selector: '[setHtmlContent]'
})
export class SetHtmlContentDirective {
    @Input() content:string;

    constructor(private el: ElementRef) {
        console.warn('SetHtmlDir init!');
    }

    ngAfterViewChecked() {

    }

    ngOnInit() {
        console.log(this.content);
        this.el.nativeElement.innerHTML = this.content;
    }

    setIndicatorCoordinate(parent: any, coordinatesOfActiveControl: any) {

    }

    moveIndicator() {
    }

}
