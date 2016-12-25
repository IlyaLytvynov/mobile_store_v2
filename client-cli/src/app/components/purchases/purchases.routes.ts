import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasesComponent } from './purchases.component';

const routes: Routes = [
    { path: 'purchases', component: PurchasesComponent  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PurchasesRouting {}