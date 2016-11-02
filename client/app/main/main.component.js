/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./main-page.html";
import "./main.styl";

class MainPageController {
    constructor() {
        this.header = "Hello world"
    }
}

const MainPageComponent =  {
        template: template,
        controller: MainPageController
};

export default MainPageComponent;