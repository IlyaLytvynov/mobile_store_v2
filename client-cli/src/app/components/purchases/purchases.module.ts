import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { PurchasesRouting } from './purchases.routes';

@NgModule({
    imports: [
        CommonModule,
        PurchasesRouting
    ],
    declarations: [PurchasesComponent]
})
export class PurchasesModule {
}
