/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import "./catalog-item.styl";

class Controller {
    constructor(enums, bucketService, $state, $scope) {
        debugger;
        this.baseUrl = enums.baseUrl + "/";
        this.bucketService = bucketService;
        this.$state = $state;
    }
    addItem(item, $event) {
        debugger;
        if($event.target.classList.contains("btn_add")) {
            $event.stopPropagation();
        }
        this.bucketService.addItem(item)
    }
    openDetails(id) {
        this.$state.go('main.details', {id});
    }
}

const CatalogItemComponent =  {
    template: `
        <div class="catalog-item " ng-click="$ctrl.openDetails($ctrl.item._id)">
            <div class="image-wrapper">
                <img ng-src="{{$ctrl.baseUrl+ $ctrl.item.imgUrl}}" alt="">
            </div>
            <div class="item_info">
                <div class="item_info_header">{{$ctrl.item.name}}</div>
                <div class="item_info_description">{{$ctrl.item.description}}</div>
                <div class="item_info_price">
                    <span ng-click="$ctrl.addItem($ctrl.item, $event)" class="btn_add">Add</span>
                    <span>{{$ctrl.item.price}}</span>
                </div>
            </div>
        </div>   
    `,
    controller: Controller,
    bindings: {
        "item": "="
    },
};

export default CatalogItemComponent;