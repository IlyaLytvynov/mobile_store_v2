import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent }  from "./home/home.component";

const appRoutes: Routes = [
    // { path: "hero/:id", component: HeroDetailComponent },
    // { path: "crisis-center", component: CrisisCenterComponent },
    {
        path: "home",
        component: HomeComponent,
        data: {
            title: "Home"
        }
    },
    { path: "", component: HomeComponent },
    // { path: "**", component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);