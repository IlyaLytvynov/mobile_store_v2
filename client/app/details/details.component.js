import template from "./details-page.html";
import "./details.styl";

class DetailsPageController {
    constructor($scope, phoneService, $stateParams) {
        console.log($stateParams.id);
        phoneService.getOne($stateParams.id).then((resp) => {
            this.item = resp.data;
        })

    }

}

const DetailsPageComponent =  {
        template: template,
        controller: DetailsPageController
};

export { DetailsPageComponent };