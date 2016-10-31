/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./main-page.html";
import "./main.styl";

class MainPageController {
    constructor() {
        console.log("Main page is active");
    }
}

const MainPageComponent =  {
        template,
        controller: MainPageController
};

export default MainPageComponent;