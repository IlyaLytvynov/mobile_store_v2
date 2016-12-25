import template from "./main-page.html";
import "./main.styl";

class MainPageController {
    constructor($scope) {
        this.pageHeader = "Hello wolrd";
        this.menu = [
            {
                title: 'Catalog',
                link: 'main.catalog',
                isVisible: true
            },
            {
                title: 'About',
                link: 'main.about',
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

const MainPageComponent =  {
        template: template,
        controller: MainPageController
};

export { MainPageComponent };