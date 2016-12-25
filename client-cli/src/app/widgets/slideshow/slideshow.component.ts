import {
    Component,
    OnInit,
    Input,
    SimpleChange
} from '@angular/core';

@Component({
    selector: 'slideshow',
    templateUrl: 'slideshow.component.html',
    styleUrls: ['slideshow.component.styl'],
})
export class SlideshowComponent implements OnInit {
    public _images: any[];
    public mainImage: string;
    public isShown: string = 'true';
    private indexOfActiveSlide: number = 0;

    @Input()
    set images(images: string[]) {
        this._images = images || [];
    }

    constructor() {
    }

    ngOnChanges(changes: {images: SimpleChange}) {
        if (changes.images.currentValue) {
            this._images = changes.images.currentValue.map((item, i) => {
                return {
                    src: item,
                    isShown: false,
                    index: i
                };
            });

            this._images[this.indexOfActiveSlide].isShown = true;
        }
    }

    ngOnInit() {
        console.log('Slide show init');
    }

    showImage(index: number) {
       this.changeSlide(index);
    }

    previousSlide() {
        if (this.indexOfActiveSlide !== 0) {
            this.indexOfActiveSlide--;
        } else {
            this.indexOfActiveSlide = this._images.length - 1;
        }

        this.changeSlide(this.indexOfActiveSlide);
    }

    nextSlide() {
        if (this.indexOfActiveSlide + 1 !== this._images.length) {
            this.indexOfActiveSlide++;
        } else {
            this.indexOfActiveSlide = 0;
        }
        this.changeSlide(this.indexOfActiveSlide);
    }

    changeSlide(index) {
        this.indexOfActiveSlide = index;
        this._images.forEach(item => item.isShown = false);
        this._images[index].isShown = true;
    }
}
