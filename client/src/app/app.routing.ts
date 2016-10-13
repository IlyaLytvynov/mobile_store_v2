import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/catalog", pathMatch: "full" },

    // lazy loaded modules
    { path: "details/:id", loadChildren: "../+details/details.module#DetailsModule" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRouting { }