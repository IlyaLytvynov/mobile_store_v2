/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./details.styles.css";
class DetailsController {
    /** @ngInject */
    constructor(phonesModel, $stateParams) {
        debugger;
        console.log($stateParams.id);
        this._model = phonesModel;
        this._model.getOne($stateParams.id).then((data)=> {
            this.item = data;
            this.mainImage = "http://localhost:4001/api/v1/" + data.images[0];
        });
        this.item = {};
        this.mainImage = null;
    }
    showFull (uri) {
        this.mainImage = "http://localhost:4001/api/v1/" + uri;
    }
}

const DetailsComponent = {
    template: `
       <div class="details__wrapper">
            <div class="col m4 s4 l4">
                <slide-show images="$ctrl.item.images"></slide-show>
              
            </div>
              
        </div>  
    `,
    controller: DetailsController
};

export { DetailsComponent };