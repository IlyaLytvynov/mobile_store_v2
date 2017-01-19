import {
    Directive,
    ElementRef,
    HostListener,
    AfterViewChecked,
    OnInit
} from '@angular/core';

const findActive = (elements: any, className: string) => {
    return elements.reduce((reducer, item) => {
        if(item.classList.contains(className)) {
            reducer = item;
        }
        return reducer;
    }, {});
};

const findElements = ( parent: ElementRef, selector: string) => {
    return parent.nativeElement.querySelectorAll(selector);
};

@Directive({
    selector: '[tabsIndicator]'
})
export class IndicatorDirective {
    private tabsControlls: any = [];
    private active: any;
    private indicator: any;

    constructor(private el: ElementRef) {
        console.warn('Indicator init!');
    }

    ngAfterViewChecked() {
        if(this.tabsControlls.length) {
            this.moveIndicator();
        } else {
            this.tabsControlls = Array.prototype.slice.call(findElements(this.el, '.tabs__control'));
            if (this.tabsControlls.length) {
                this.moveIndicator();
            }
        }
    }

    ngOnInit() {
        this.indicator = this.el.nativeElement.querySelector('.tabs__controlls-indicator');
        console.log(this.indicator);
    }

    setIndicatorCoordinate(parent: any, coordinatesOfActiveControl: any) {
        const startPoint = parent.left;
        const dx = coordinatesOfActiveControl.left - startPoint;

        this.indicator.style.width = coordinatesOfActiveControl.width+"px";
        this.indicator.style.left = dx+ "px";
    }

    moveIndicator() {
        debugger;
        this.active = findActive(this.tabsControlls, 'tabs__content-tab_active');
        console.log(this.active);
        this.setIndicatorCoordinate(this.el.nativeElement.getBoundingClientRect(), this.active.getBoundingClientRect())
    }

}
