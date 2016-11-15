/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./catalog.page.html";
import "./catalog.styl";

class Controller {
    constructor(phoneModel, bucketService) {
        this.data = [];
        this.phoneModel = phoneModel;
        this.phoneModel.getAll().then((data) => {
           this.data = data;
        });
        console.log("Catalog page is active hello world");

    }
}

const CatalogComponent =  {
    template,
    controller: Controller
};

export default CatalogComponent;