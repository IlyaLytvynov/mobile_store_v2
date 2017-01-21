import template from "./catalog-item.html";
import "./catalog-item.styl";

const test = '121';

class Controller {
    constructor() {
        this.data = {};

    }
    $ngOnInit() {
        console.log('Inited!!');
    }

    $onChanges () {
        console.log(this.data);
        console.log('++++++++++');
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