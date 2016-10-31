/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./catalog.page.html";
import "./catalog.styl";

class Controller {
    constructor() {
        console.log("Catalog page is active");
    }
}

const CatalogComponent =  {
    template,
    controller: Controller
};

export default CatalogComponent;