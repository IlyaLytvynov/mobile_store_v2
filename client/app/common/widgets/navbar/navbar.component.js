import template from "./navbar.html";
import "./navbar.styl";

class Controller {
    constructor($scope) {
        console.log("Navbar created!");
        this.elements = [];
        this.test = "";

        // $scope.$watch(() => {
        //     return this.elements;
        // }, (nextVal, prevVal) => {
        //     debugger;
        // })
    }

    showElement() {
        this.elements[2].isVisible = !this.elements[2].isVisible;
    }

}

const NavbarComponent =  {
    template: template,
    controller: Controller,
    bindings: {
        elements: '<'
    }
};

export { NavbarComponent };