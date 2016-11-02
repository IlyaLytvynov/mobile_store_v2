/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import "./navbar.styl";

class Controller {
    constructor() {
        //model
        this.menuItems = [
            {
                title: "home",
                sref: "main.catalog"
            },
            {
                title: "about",
                sref: "main.about"
            },
            {
                title: "bucket",
                sref: "main.bucket"
            },
        ]
    }
}

const NavbarComponent =  {
    template: `
        <nav class="navbar">
            <ul class="navbar_items">
                <li class="navbar_item" ng-repeat="item in $ctrl.menuItems">
                    <a ui-sref="{{item.sref}}">{{item.title}}</a>
                </li>
            </ul>
        </nav>`,
    controller: Controller
};

export default NavbarComponent;