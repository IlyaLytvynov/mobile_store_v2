/**
 * Created by IlyaLitvinov on 31.10.16.
 */
// import "./navbar.styl";

class Controller {
    constructor() {
        debugger;
    }
}

const PhoneComponent =  {
    template: `
        <div class="catalog-item">
            {{$ctrl.phone.name}}
        </div>   
    `,
    controller: Controller,
    bindings: {
        "phone": "="
    },
};

export default PhoneComponent;