import template from "./catalog-page.html";
import "./catalog.styl";

class CatalogPageController {
    constructor($scope, phoneService) {
        this.pageHeader = "Hello wolrd";
        this.data = [];

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