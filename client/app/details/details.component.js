/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./details.page.html";
// import "./catalog.styl";

class Controller {
    constructor($stateParams, phoneModel, commentsModel, bucketService) {
        this.item = {};
        this.comments = [];

        this.phoneModel = phoneModel;
        this.phoneModel.getOne($stateParams.id).then((data) => {
            this.item = data;
        });
        this.commentsModel = commentsModel;
        this.commentsModel.get($stateParams.id).then((data) => {
            this.comments = data;
        });

        this.bucketService = bucketService;
        console.log("Catalog page is active hello world");

    }

    addItem() {
        debugger;
        let bucketObject = {
            _id: this.item._id,
            name: this.item.name,
            price: this.item.price,
            imgUrl: this.item.images[0],
            description: this.item.description,
            average_rating: this.item.average_rating
        };

        this.bucketService.addItem(bucketObject);
    }
}

const DetailsComponent =  {
    template,
    controller: Controller
};

export default DetailsComponent;