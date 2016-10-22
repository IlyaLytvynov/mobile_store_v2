/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class PreviewController {
    /** @ngInject */
    constructor($stateParams) {
        console.log("home created!");
        this.header = "Menu page";
    }
}

const PreviewComponent = {
    bindings: {
        "data": "="
    },
    template: `
        <a ui-sref="app.homeDetails({id: $ctrl.data._id})">
           <div class="row" id="{{$ctrl.data._id}}">
            <div class="col s12 m7">
              <div class="card">
                <div class="card-image">
                  <img ng-src="{{$ctrl.data.imgUrl}}">
                  <span class="card-title teal">{{$ctrl.data.name}}</span>
                </div>
                <div class="card-content">
                  <p>{{$ctrl.data.description}}</p>
                  <span class="new badge">{{$ctrl.data.price}}</span>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
      </a>
    `,
    controller: PreviewController

};

export { PreviewComponent };