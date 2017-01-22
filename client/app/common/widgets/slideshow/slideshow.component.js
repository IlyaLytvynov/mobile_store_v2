import template from "./slideshow.html";
import "./slideshow.styl";

class Controller {
    constructor() {
        this.images = [];
        this.activeImg = null;
    }

    $onChanges() {
        if(this.images && this.images.length) {
            this.activeImg = this.images[0];
            console.log(this.activeImg)
        }
    }

    changeImg(img) {
        this.activeImg = img;
    }
}

const SlideshowComponent =  {
    template: template,
    controller: Controller,
    bindings: {
        images: '<'
    }
};

export { SlideshowComponent };