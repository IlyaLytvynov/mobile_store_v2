/**
 * Created by IlyaLitvinov on 31.10.16.
 */
class MainPageController {
    constructor() {
        console.log("Main page is active");
    }
}

const MainPageComponent =  {
        template: require("./main-page.html"),
        controller: MainPageController
};

export default MainPageComponent;