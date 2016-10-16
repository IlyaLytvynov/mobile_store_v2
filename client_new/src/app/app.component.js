/**
 * Created by IlyaLitvinov on 15.10.16.
 */
class AppComonentController {
    constructor() {
        console.log("App created!");
        this.test = "App";
    }
}

const AppComponent = {
    template: `
        <div class="todoapp" >
            <h1>{{$ctrl.test}}</h1>
            <a ui-sref="app.home">Home</a>
            <a ui-sref="app.about">About</a>
            <ui-view></ui-view>
        </div>
    `,
    controller: AppComonentController
};

export { AppComponent };