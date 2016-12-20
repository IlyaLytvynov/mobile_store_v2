import {
    Component,
    OnInit,
    Input,
    SimpleChange,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'slideshow',
    templateUrl: 'slideshow.component.html',
    styleUrls: ['slideshow.component.styl'],
    animations: [
        trigger('changeSlide', [
            // state('in', style({
            //     transform: 'translate3d(0, 0, 0)'
            // })),
            // state('out', style({
            //     transform: 'translate3d(100%, 0, 0)'
            // })),
            // transition('in => out', animate('400ms ease-in-out')),
            // transition('out => in', animate('400ms ease-in-out'))
            state('shown', style({opacity: 1})),
            state('hidden', style({opacity: 0})),
            transition('hidden => shown', [
                animate('400ms ease-in-out')
            ])
        ])
    ]
})
export class SlideshowComponent implements OnInit {
    public _images: string[];
    public mainImage: string;
    public slideShowState: string = 'shown';
    private timeOut: any;

    @Input()
    set images(images: string[]) {
        this._images = images || [];
    }

    constructor() {
    }

    ngOnChanges(changes: {images: SimpleChange}) {
        if (changes.images.currentValue) {
            this.mainImage = changes.images.currentValue[0];
        }
    }

    ngOnInit() {
        console.log('Slide show init');
    }

    showImage(imageUrl: string) {
        this.mainImage = imageUrl;
        this.slideShowState = 'hidden';

        // this.timeOut = setTimeout(() => {
        //     debugger;
        //     this.slideShowState = 'out';
        //     this.timeOut = null;
        // }, 1000);
    }

    animStartCallback(e) {
        debugger;
    }
    animDoneCallback(e) {
        console.log(e);
        this.slideShowState = 'shown';
    }
}
