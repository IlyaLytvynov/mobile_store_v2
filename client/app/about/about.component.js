import template from "./about-page.html";
import "./about.styl";

class AboutPageController {
    constructor($scope) {
        this.pageHeader = "Hello wolrd";
        this.menu = [
            {
                title: 'Catalog',
                link: '#',
                isVisible: true
            },
            {
                title: 'About',
                link: '#',
                isVisible: true
            },
            {
                title: 'My cart',
                link: '#',
                isVisible: false
            }
        ];
    }

}

const AboutPageComponent =  {
        template: template,
        controller: AboutPageController
};

export { AboutPageComponent };