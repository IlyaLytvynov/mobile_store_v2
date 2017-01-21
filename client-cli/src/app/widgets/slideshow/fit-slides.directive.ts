import { Directive, ElementRef, AfterViewChecked } from '@angular/core';

const findTotalChildrenWidth = (children) => {
    return children.reduce((reduced, item) => {
        reduced = reduced + item.getBoundingClientRect().width;
        return reduced;
    }, 0);
};

@Directive({
    selector: '[fitSlides]'
})
export class FitSlidesDirective {
    private totalChildrenWidth: number;
    private parentWidth: number;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        const childrenElements = Array.prototype.slice.call(this.el.nativeElement.querySelectorAll('.slide-show__thumbnail'));

        if (!findTotalChildrenWidth.length) {
            return;
        }

        this.parentWidth = this.el.nativeElement.getBoundingClientRect().width;
        this.totalChildrenWidth = findTotalChildrenWidth(childrenElements);

        if (this.totalChildrenWidth > this.parentWidth) {
            this.addScroll();
        }
    }

    addScroll() {
        this.el.nativeElement.classList.add('slide-show__thumbnails_scrollable')
    }

    scrollToElement() {

    }
}
