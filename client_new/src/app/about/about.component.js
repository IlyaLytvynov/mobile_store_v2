/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class AboutController {
    constructor() {
        console.log("About created!");
        this.header = "About page";
        this.menuItems = ["test", "hello", "About"];
    }
}

const AboutComponent = {
    template: `
        <h1>{{$ctrl.header}}</h1>
        <menu some-cool-magic-data="$ctrl.menuItems"></menu>
    `,
    controller: AboutController
};

export { AboutComponent };