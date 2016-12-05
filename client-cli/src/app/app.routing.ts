import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    // lazy loaded modules
    { path: 'details', loadChildren: './components/+details/details.module#DetailsModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
