import template from "./catalog-item.html";
import "./catalog-item.styl";

class Controller {
    constructor() {
        this.data = {}
    }

}

const CatalogItemComponent =  {
    template: template,
    controller: Controller,
    bindings: {
        data: '<'
    }
};

export { CatalogItemComponent };