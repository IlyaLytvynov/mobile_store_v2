/**
 * Created by IlyaLitvinov on 31.10.16.
 */
import template from "./about-page.html";
import "./about.styl";

class Controller {
    constructor() {
        this.header = "Hello world"
    }
}

const AboutPageComponent =  {
    template,
    controller: Controller
};

export default AboutPageComponent;