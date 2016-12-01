import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component'

const routes: Routes = [
    { path: "catalog", component: CatalogComponent  },

    // lazy loaded modules
    // { path: 'details', loadChildren: './+details/details.module#DetailsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class CatalogRouting {}