/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class MenuController {
    constructor($stateParams) {
        console.log("home created!");
        this.header = "Menu page";
        debugger;
    }
}

const MenuComponent = {
    bindings: {
        "someCoolMagicData": "="
    },
    template: `
        <ul>
            <li ng-repeat="item in $ctrl.someCoolMagicData">{{item}}</li>
        </ul>
    `,
    controller: MenuController

};

export { MenuComponent };