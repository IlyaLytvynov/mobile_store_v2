/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class HomeController {
    constructor() {
        console.log("home created!");
        this.header = "Home page";
        this.menuItems = [1,2,3,4,5,6,7,8,9];
    }
}

const HomeComponent = {
    template: `
        <h1>{{$ctrl.header}}</h1>
        <menu some-cool-magic-data="$ctrl.menuItems"></menu>
    `,
    controller: HomeController
};

export { HomeComponent };