import template from "./catalog-page.html";
import "./catalog.styl";

class CatalogPageController {
    constructor($scope, phoneService) {
        const el = document.querySelector('.catalog__grid-element');

        this.pageHeader = "Hello wolrd";
        this.data = [];
        this.isValid = false

        phoneService.getAll().then((res) => {
            this.data = res.data;
        })

    }

}

const CatalogPageComponent =  {
        template: template,
        controller: CatalogPageController
};

export { CatalogPageComponent };